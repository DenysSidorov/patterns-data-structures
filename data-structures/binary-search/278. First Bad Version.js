/*You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of
your product fails the quality check. Since each version is developed based on the previous version, all the versions
after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out which one is the first bad one, which causes all
the following versions to be bad. You are given an API bool isBadVersion(version) which will return whether version is
bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.*/


// TTTTFFFF maximisation of T
// isBadVersion(version)
// FFFFFFTTTT minimisation

function firstBadVersion(n) {
  // [1...n]
  // f(x) =/ isBadVersion(x)
  // FFFFFTTT - minimization 15559
  const isBadVersion = (x) => x >= 5;
  let left = 0;
  let right = n;
  while(left + 1 < right) {
    const mid = left + Math.floor((right -left) / 2);
    if (isBadVersion(mid)) {
      right = mid
    } else {
      left = mid
    }
  }
  return right;
}
const a = [1,3,4,5,7,9]
console.log(firstBadVersion(555));
