// Format number with commas
export const formatNumber = (num) => {
  return num.toLocaleString();
};

// Format currency
// export const formatCurrency = (amount, currency = "USD") => {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency,
//   }).format(amount);
// };

// Format international number
export const formatInternationalNumber = (num) => {
  return new Intl.NumberFormat("bn-BD", {
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
};
