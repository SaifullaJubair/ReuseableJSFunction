// Format number with commas
export const formatNumber = (num) => {
  return num.toLocaleString();
};

// Format currency
export const formatCurrency = (amount, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};
