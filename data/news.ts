export type NewsPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD: the actual publication date
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  gallery?: { image: string; alt: string; caption: string }[];
};

// Add approved announcements here. Keep this empty until real news is ready.
export const newsPosts: NewsPost[] = [];

export function getNewsPosts() {
  return [...newsPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
