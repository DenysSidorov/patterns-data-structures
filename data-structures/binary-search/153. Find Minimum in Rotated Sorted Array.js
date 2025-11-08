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
  return nums[r];
};
