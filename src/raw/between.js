module.exports = (input, min, max) => {
  input = Number(input)
  return (input > Number(min)) && (input < Number(max))
}
