export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
