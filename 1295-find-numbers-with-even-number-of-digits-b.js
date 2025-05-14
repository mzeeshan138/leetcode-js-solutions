/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let num of nums) {
    let digits = 0,
      x = num;
    while (x > 0) {
      digits++;
      x = Math.floor(x / 10);
    }
    if ((digits & 1) === 0) {
      count++;
    }
  }
  return count;
};
