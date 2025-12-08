const arr = [35, 5, 5, 4, 34, 235, 32, 3, 34];

function nextGreater(a){

    const results = Array.from(Array(arr.length), (el, ind) => -1);
    const stack = [];

    for (let i = 0; i < a.length; i++){
        while (stack.length && a[stack.at(-1)] < a[i]) {
            const topIndex = stack.pop();
            results[topIndex] = a[i];
        }
        stack.push(i);
    }

    return results;
}

console.log(nextGreater(arr));
