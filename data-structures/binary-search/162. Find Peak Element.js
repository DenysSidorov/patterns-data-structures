function findPeakElement(n) {
  if (n.length === 1) return 0;
  const cond = (n,mid) => {
    if (mid === n.length -1) return true;
    return n[mid] > n[mid + 1];
  };
  let left = -1;
  let right = n.length;
  while(left + 1 < right) {
    const mid = left + Math.floor((right -left) / 2);
    if (cond(n, mid)) {
      right = mid
    } else {
      left = mid
    }
  }
  return right;
}
const a = [1,2,1,3,5,6,4]
console.log(findPeakElement(a));
