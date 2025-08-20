/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const lastIndex = new Map();
  let maxLen = 0;
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    const ch = s[j];
    if (lastIndex.has(ch) && lastIndex.get(ch) >= i) {
      i = lastIndex.get(ch) + 1;
    }
    lastIndex.set(ch, j);
    maxLen = Math.max(maxLen, j - i + 1);
  }

  return maxLen;
};
