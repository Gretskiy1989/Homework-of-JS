
function getMinDivider(n) {
  if (typeof n !== "number" || Number.isNaN(n) || n < 1) {
    return NaN;
  }
  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      return i;
    }
  }
  return n;
}
const result = getMinDivider(9);

console.log(result);
