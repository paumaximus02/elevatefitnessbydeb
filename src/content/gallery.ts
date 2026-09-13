export const galleryImages = [
  {
    src: "/images/gallery/studio-overview.jpg",
    alt: "Personal training studio in Silverdale with power rack, cable machine, and treadmill",
  },
  {
    src: "/images/gallery/studio-equipment.jpg",
    alt: "Strength training equipment including dumbbells, kettlebells, and resistance bands",
  },
  {
    src: "/images/gallery/studio-wide.jpg",
    alt: "Wide view of the Silverdale training studio with bench, rack, and cardio equipment",
  },
  {
    src: "/images/gallery/studio-rack.jpg",
    alt: "Power rack with TRX straps, dumbbells, and cable machines in the training studio",
  },
  {
    src: "/images/gallery/studio-cardio.jpg",
    alt: "Cardio and strength equipment including air bike and leg press in the studio",
  },
] as const;

export type GalleryImage = (typeof galleryImages)[number];
