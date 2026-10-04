/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let maxLen = 0;
    let zerosCount = 0;

    // 'right' is the fast pointer that expands the window
    for (let right = 0; right < nums.length; right++) {
        // If we encounter a zero, increment the zero counter
        if (nums[right] === 0) {
            zerosCount++;
        }

        // If the number of zeros exceeds k, shrink the window from the left
        while (zerosCount > k) {
            // If the element slipping out of the window is a zero, decrement the counter
            if (nums[left] === 0) {
                zerosCount--;
            }
            // Move the left boundary of the window forward
            left++;
        }

        // The window is valid (zerosCount <= k), update the maximum length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};