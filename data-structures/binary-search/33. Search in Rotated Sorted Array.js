
function searchRotatedSortedArr(arr, target) {
  let minIndex = findMin(arr);
  if (isOnRight(arr, target)) {
    return binarySearch(arr, target, minIndex, arr.length - 1);
  } else {
    return binarySearch(arr, target, 0, minIndex - 1);
  }
}

function isOnRight(arr, target) {
  return target <= arr[arr.length - 1];
}

// type: minimization
// scale: `lo` -> invalid (left - 1), `hi` -> valid (left - right) (inclusive)
// initialize: `lo` to `left - 1`, `hi` to `right`
// condtion: `f(x) = x >= target`

function binarySearch(arr, target, left, right) {
  let lo = left - 1, hi = right;
  while (lo + 1 < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (isGreaterOrEqual(arr[mid], target)) {
      hi = mid;
    } else {
      lo = mid;
    }
  }
  return arr[hi] === target ? true : false;
}

function isGreaterOrEqual(num, target) {
  return num >= target;
}

// here we compare every element with the last element to decide which side to go
let findMin = function(nums) {
  let l = -1;
  let r = nums.length-1;
  function condition(nums,m){
    return nums[m] <= nums[nums.length - 1];
  }
  while(l + 1 < r) {
    const m = l + Math.floor((r-l)/2);
    if (condition(nums,m)){
      r = m;
    } else{
      l = m;
    }
  }
  return r;
};

