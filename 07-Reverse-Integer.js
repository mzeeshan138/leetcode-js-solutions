/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;
  const INT_MAX = 2147483647; // 2^31 - 1
  const INT_MIN = -2147483648; // -2^31

  while (x !== 0) {
    let pop = x % 10; // extract last digit
    x = Math.trunc(x / 10); // remove last digit

    // Check overflow before multiplying
    if (
      rev > Math.trunc(INT_MAX / 10) ||
      (rev === Math.trunc(INT_MAX / 10) && pop > 7)
    )
      return 0;
    if (
      rev < Math.trunc(INT_MIN / 10) ||
      (rev === Math.trunc(INT_MIN / 10) && pop < -8)
    )
      return 0;

    rev = rev * 10 + pop;
  }

  return rev;
};
