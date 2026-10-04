/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    // Use two pointers moving inward until they meet
    while (left < right) {
        const sum = numbers[left] + numbers[right];

        // If the sum matches the target, return 1-based indices
        if (sum === target) {
            return [left + 1, right + 1];
        }

        // If the sum is too large, decrease the right pointer
        if (sum > target) {
            right--;
        }
        // If the sum is too small, increase the left pointer
        else {
            left++;
        }
    }

    // Return empty or default array if no solution is found
    // (though the problem guarantees exactly one solution)
    return [-1, -1];
};

// Time Complexity: O(N)
// Space Complexity: O(1)