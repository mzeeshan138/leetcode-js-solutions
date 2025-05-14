/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let num of nums) {
    if ((num.toString().length & 1) === 0) {
      count++;
    }
  }
  return count;
};
