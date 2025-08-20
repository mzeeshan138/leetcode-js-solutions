/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0,
    sign = 1,
    result = 0;
  const n = s.length;
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  // 1. Skip leading whitespace
  while (i < n && s[i] === ' ') {
    i++;
  }

  // 2. Check for sign
  if (i < n && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  // 3. Read digits
  while (i < n && s[i] >= '0' && s[i] <= '9') {
    let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

    // 4. Handle overflow before adding digit
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  // 5. Return final result
  return result * sign;
};
