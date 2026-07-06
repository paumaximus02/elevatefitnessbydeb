// functions/api/contact.ts

interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  website?: string; // Honeypot
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const payload: ContactPayload = await context.request.json();

    // Honeypot check (blocks most bots)
    if (payload.website && payload.website.trim() !== "") {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Basic validation
    if (!payload.name || !payload.email || !payload.message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Please fill in all required fields." }),
        { status: 400 }
      );
    }

    // Send email using Resend (recommended)
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Elevate Fitness <no-reply@elevatefitnessbydeb.com>", // Change this later
        to: "pau.maximus@gmail.com", // ← Change to Deb's real email
        subject: `New message from ${payload.name}`,
        html: `
          <p><strong>Name:</strong> ${payload.name}</p>
          <p><strong>Email:</strong> ${payload.email}</p>
          <p><strong>Message:</strong></p>
          <p>${payload.message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend error:", errorText);
      return new Response(
        JSON.stringify({ ok: false, error: "Failed to send message. Please try again later." }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ ok: false, error: "Something went wrong. Please try again." }),
      { status: 500 }
    );
  }
};