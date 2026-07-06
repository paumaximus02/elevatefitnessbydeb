interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function parsePayload(request: Request): Promise<ContactPayload | null> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    try {
      return (await request.json()) as ContactPayload;
    } catch {
      return null;
    }
  }

  if (
    contentType.includes("multipart/form-data") ||
    contentType.includes("application/x-www-form-urlencoded")
  ) {
    const formData = await request.formData();
    return {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };
  }

  return null;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const payload = await parsePayload(request);

  if (!payload) {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const website = payload.website?.trim() ?? "";

  if (website) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    return Response.json(
      { ok: false, error: "Contact form is not configured yet." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `New contact form message from ${name}`,
      html: `
        <h2>New message from elevatefitnessbydeb.com</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    console.error("Resend error:", await response.text());
    return Response.json(
      { ok: false, error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
};

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        Allow: "POST, OPTIONS",
      },
    });
  }

  return Response.json({ ok: false, error: "Method not allowed." }, { status: 405 });
};
