function searchValue(arr, value) {

  let left = -1;
  let right = arr.length;

  while (right - left > 1) {

    const center = Math.floor((left + right) / 2); // index of center
    if (arr[center] === value) {
      return center;
    } else if (arr[center] > value) {
      right = center;
    } else {
      left = center;
    }
  }

  return -1;

}

console.log(searchValue([1,2,3,4,5,6,7,8,9], 7)); // getIndex 6
console.log(searchValue([1,2,3,4,5,6,7,8,9], 3)); // getIndex 2
console.log(searchValue([1,2,3,4,5,6,7,8,9], 1)); // getIndex 0
console.log(searchValue([1,2,3,4,5,6,7,8,9], -100)); // getIndex -1
console.log(searchValue([1,2,3,4,5,6,7,8,9], 100)); // getIndex -1
console.log(searchValue([1,2,3,4,5,6,7,8,9], 10)); // getIndex -1
console.log(searchValue([1,2,3,4,5,6,7,8,9], 0)); // getIndex -1
