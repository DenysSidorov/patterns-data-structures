// Don't solve it with n*n time complexity!

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate the width between the two lines
        const width = right - left;

        // The height of the water is limited by the shorter line
        const minHeight = Math.min(height[left], height[right]);

        // Calculate the current area and update the maximum found so far
        const currentWater = width * minHeight;
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer that points to the shorter line.
        // Moving the taller line would only decrease the width without increasing the height.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};

// Time Complexity: O(N)
// Space Complexity: O(1)

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));