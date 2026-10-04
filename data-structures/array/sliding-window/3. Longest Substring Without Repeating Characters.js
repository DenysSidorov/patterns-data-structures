var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let r = 0;
    let maxLength = 0;
    if (s.length === 0) return 0;
    // 'ab'
    let set = new Set();
    while (r < s.length) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++
        }
        maxLength = Math.max(maxLength, r - l + 1);
        set.add(s[r]);
        r++;

    }
    return maxLength;
}