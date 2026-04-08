function findFirstOccurrence(nums, t) {
    let l = -1;
    let r = nums.length;
    while(l + 1 < r) {
        const mid = l + Math.floor((r - l) / 2);
        // const mid = Math.floor((l + r) / 2);
        if (condition(mid)) {
            r = mid;
        } else {
            l = mid;
        }
    }
    function condition(m) {
     return nums[m] >= t;
    }
    return r < nums.length && nums[r] === t ? r : -1;
}

function findLastOccurrence(nums, t) {
    // TTTtFFFF // maximization template
    // 1,2,3,9,9,9,10,66]
    let l = -1;
    let r = nums.length;
    while(l + 1 < r){ // no infinity loop
        const mid = l + Math.floor((r-l)/2);
        if (condition(mid)){
            l = mid;
        } else {
            r = mid;
        }
    }
    function condition (m){
        return nums[m] <= t
    }
    return nums[l] === t && l < nums.length ? l : -1;
}

let target = 9;
let a1 = [1,2,3,9,9,9,10,66]; // l = 8
let a2 = [1,2,3,9,9,9]; // l = 6
let a3 = [9,9,9,10,66]; // l = 5
let a4 = [1,2,3,9]; // l = 4
let a5 = [1,2,3]; // l = 3
let a6 = [9,9,9]; // l = 3
let a7 = [9]; // l = 1
let a8 = [5]; // l = 1
let a9 = []; // l = 0


// console.log(findLastOccurrence(a1, target));

module.exports = { findFirstOccurrence, findLastOccurrence };