// Random ID generator
export const randomId = (length = 8) => {
  return Math.random().toString(36).substr(2, length);
};

// Random HEX color
export const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
