/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    // 'slow' pointer tracks the position for the next unique element
    let slow = 1;

    // 'fast' pointer scans through the array to find new unique elements
    for (let fast = 1; fast < nums.length; fast++) {
        // If we find a new unique number (different from the previous one)
        if (nums[fast] !== nums[fast - 1]) {
            // Write it to the 'slow' position and move 'slow' forward
            nums[slow] = nums[fast];
            slow++;
        }
    }

    // 'slow' now represents the length of the array with unique elements
    return slow;
};

// Time Complexity: O(N)
// Space Complexity: O(1)