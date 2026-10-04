/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0;
    let min = Infinity;
    let sum =0;
    for(let r= 0; r < nums.length; r++) {

        sum = sum + nums[r];

        while (sum >= target) {
            min = Math.min(min, r - l + 1);
            sum = sum - nums[l];
            l++;
        }
    }
    return min === Infinity ? 0 : min;
};