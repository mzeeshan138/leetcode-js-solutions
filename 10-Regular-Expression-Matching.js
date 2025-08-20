/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length,
    n = p.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  dp[0][0] = true; // empty string matches empty pattern

  // Handle patterns like a*, a*b*, a*b*c* that match empty string
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] !== '*') {
        // Current char matches
        if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
          dp[i][j] = dp[i - 1][j - 1];
        }
      } else {
        // Zero occurrence
        dp[i][j] = dp[i][j - 2];

        // One or more occurrences
        if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }

  return dp[m][n];
};
