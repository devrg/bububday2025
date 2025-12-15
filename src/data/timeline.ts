export interface TimelineEntry {
  year: string;
  title: string;
  text: string;
  image: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2010",
    title: "A Bright Beginning",
    text: "Bubu brought sunshine to everyone from day one.",
    image: "/gallery1.jpg",
  },
  {
    year: "2015",
    title: "Growing Up Fast",
    text: "Full of energy, laughter, and endless curiosity.",
    image: "/gallery2.jpg",
  },
  {
    year: "2020",
    title: "Golden Memories",
    text: "Creating unforgettable moments with loved ones.",
    image: "/gallery3.jpg",
  },
];
