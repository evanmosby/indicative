module.exports = (input) => {
  if (typeof input === "string") {
    console.log("in existy.string");
    return input.trim().length >= 0;
  }
  return input !== null && input !== undefined;
};
