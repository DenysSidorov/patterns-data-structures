function searchInsertPosition(a, target) {
  let left = -1; // bot valid first element
  let right = a.length;
  while(left + 1 < right) {
    const mid = left + Math.floor((right -left) / 2);
    if (minCondition(a, mid, target)) {
      right = mid
    } else {
      left = mid
    }
  }
  function minCondition(a, mid, target) {
    return a[mid] >= target;
  }
  return right;
}
const a = [1,3,4,5,7,9]
console.log(searchInsertPosition(a, 5));
