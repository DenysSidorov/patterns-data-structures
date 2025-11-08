/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith
row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.
* */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  // TTTTTTTTFFFF maximization left = mid 1555|8
  // k * (k + 1) / 2
  // let k = 1; // simple solution O(n)
  // while(((k * (k + 1)) / 2) < n){
  //     k++;
  // }
  // return k - 1;
  let l = 1;
  let r = n + 1;
  function condition(n, m){
    return ((m * (m + 1)) / 2) <= n
  }
  while (l + 1 < r) {
    const m = l + Math.floor((r-l)/ 2);
    if (condition(n, m)) {
      l = m;
    } else {
      r = m
    }
  }
  return l; // todo add checks here if it's needed;

};

console.log(arrangeCoins(8))
