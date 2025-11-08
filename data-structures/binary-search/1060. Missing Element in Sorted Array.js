// https://leetcode.com/discuss/post/2371234/an-opinionated-guide-to-binary-search-co-1yfw/#540-single-element-in-a-sorted-array
const judgeSquareSum = function(c) {
  // for 5  -> 1*1 + 4*4,  2*2 + 3*3, 2*2 +  2*2
  let left = 0;
  let right = c;
  while (left <= right) {
    console.log('left:', left, 'right:', right);
    const result = (left * left) + (right * right);
    console.log(result);
    if (result === c) {
      return true;
    }
    if (result > c) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};

console.log(judgeSquareSum(3));
