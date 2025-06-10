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

// bangla date
export function formatDateToBangla(dateInput, options = { showDay: false, showMonthName: true }) {
  const date = new Date(dateInput);

  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const banglaMonths = [
    'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
    'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
  ];
  const banglaWeekdays = [
    'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
  ];

  const convertToBanglaDigit = (number) =>
    number.toString().split('').map(d => banglaDigits[parseInt(d, 10)] || d).join('');

  const day = convertToBanglaDigit(date.getDate());
  const month = options.showMonthName
    ? banglaMonths[date.getMonth()]
    : convertToBanglaDigit(date.getMonth() + 1);
  const year = convertToBanglaDigit(date.getFullYear());

  const weekday = options.showDay ? `${banglaWeekdays[date.getDay()]}, ` : '';

  return `${weekday}${day} ${month}, ${year}`;
}
