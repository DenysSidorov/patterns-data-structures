export const searchRange = function (nums, target) {

  function isGreaterOrEqual(arr, ind, target) {
    return arr[ind] >= target
  }

  function findFirstElement(nums, target) {
    let left = -1;
    let right = nums.length;
    while (left + 1 < right) {
      const mid = left + Math.floor((right - left) / 2);

      if (isGreaterOrEqual(nums, mid, target)) {
        right = mid;
      } else {
        left = mid
      }
    }
    return nums[right] === target ? right : -1;
  }

  function isSmallerOrEqual(arr, ind, target) {
    return arr[ind] <= target;
  }

  function findLastElement(nums, target) {
    let left = -1;
    let right = nums.length;
    while (left + 1 < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isSmallerOrEqual(nums, mid, target)) {
        left = mid;
      } else {
        right = mid
      }
    }
    if (left === -1 || nums[left] !== target) {
      return -1;
    }
    return left;
  }


  const leftElement = findFirstElement(nums, target);
  if (leftElement === -1) {
    return [-1, -1];
  }

  return [leftElement, findLastElement(nums, target)];

};


const a = [1,5,5,5,8]
console.log(searchRange(a, 5));

