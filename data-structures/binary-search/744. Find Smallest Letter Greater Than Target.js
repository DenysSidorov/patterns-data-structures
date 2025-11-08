// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target,
//   find the smallest element in the list that is larger than the given target.

//  abcdefg , target = d


var nextGreatestLetter = function(letters, target) {
  let l = -1;
  let r = letters.length;
  function condition(letters, target, mid){
    return target < letters[mid] ; // false
  }
  while(l + 1 < r) {
    const mid = l + Math.floor((r - l) /2);
    if (condition(letters, target, mid)) {
      r = mid;
    } else{
      l = mid;
    }
  }
  if (r >  letters.length - 1) {
    return letters[0]
  }
  return letters[r]
};
