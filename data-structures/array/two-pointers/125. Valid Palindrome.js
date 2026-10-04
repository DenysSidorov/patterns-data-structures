/**
* @param {string} s
* @return {boolean}
*/
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    // Helper function to check if a character is alphanumeric
    const isAlphanumeric = (char) => {
        const code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) || // 0-9
            (code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122);  // a-z
        // it can be solved via RegExp or string with all allowed symbols
    };

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        if (!isAlphanumeric(s[left])) {
            left++;
            continue;
        }

        // Skip non-alphanumeric characters from the right
        if (!isAlphanumeric(s[right])) {
            right--;
            continue;
        }

        // Compare characters in lowercase
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Move both pointers inward
        left++;
        right--;
    }

    return true;
};

// Time Complexity: O(N)
// Space Complexity: O(1)