// Format date to 'DD-MM-YYYY'
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB"); // UK format: DD/MM/YYYY
};

// Format to ISO string without time
export const toISODate = (date) => {
  return new Date(date).toISOString().split("T")[0]; // 'YYYY-MM-DD'
};
