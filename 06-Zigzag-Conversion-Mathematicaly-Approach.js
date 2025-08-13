//Mathematical (Cycle Length) Approach
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  let res = [];
  let cycleLen = 2 * numRows - 2;

  for (let r = 0; r < numRows; r++) {
    for (let i = 0; i + r < s.length; i += cycleLen) {
      res.push(s[i + r]); // down stroke
      if (r !== 0 && r !== numRows - 1 && i + cycleLen - r < s.length) {
        res.push(s[i + cycleLen - r]); // up stroke
      }
    }
  }
  return res.join('');
};
