var characterReplacement = function(s, k) {
    let left = 0;
    let maxFreq = 0;
    let maxCounter = 0;
    const freqMap = {};

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        freqMap[char] = (freqMap[char] || 0) + 1;

        maxFreq = Math.max(maxFreq, freqMap[char]);

        while (right - left + 1 - maxFreq > k) {
            const leftChar = s[left];
            freqMap[leftChar]--;
            left++;
        }

        maxCounter = Math.max(maxCounter, right - left + 1);
    }

    return maxCounter;
};