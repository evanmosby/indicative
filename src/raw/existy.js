module.exports = (input) => {
  if (typeof input === "string") {
    return input.trim().length >= 0; // accept empty strings
  }
  return input !== null && input !== undefined;
};
