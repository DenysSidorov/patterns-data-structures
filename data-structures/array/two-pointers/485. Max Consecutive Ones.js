/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let left = 0;
    let max = 0;
    for(let right = 0; right < nums.length; right++) {
        if (nums[right] === 1) {
            let currentMaxNumber = right - left + 1;
            max = Math.max(max, currentMaxNumber)
        } else {
            left = right + 1
        }
    }
    return max;
};