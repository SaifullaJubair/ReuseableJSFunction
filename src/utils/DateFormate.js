// Format date to 'DD-MM-YYYY'
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB"); // UK format: DD/MM/YYYY
};

// Format to ISO string without time
export const toISODate = (date) => {
  return new Date(date).toISOString().split("T")[0]; // 'YYYY-MM-DD'
};

// Get relative time (e.g., "2 hours ago")
export const timeAgo = (date) => {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const diff = (new Date() - new Date(date)) / 1000;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return rtf.format(-days, "day");
  if (hours > 0) return rtf.format(-hours, "hour");
  if (minutes > 0) return rtf.format(-minutes, "minute");
  return "just now";
};
