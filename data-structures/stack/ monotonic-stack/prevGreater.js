const arr = [35, 5, 5, 4, 34, 235, 32, 3, 34];
function prevGreater(a){
    const results = Array.from(Array(a.length), () => null);
    const stack = []; // for indexes
    for (let i = 0; i < a.length; i++) {
        while(stack.length && a[stack.at(-1)] <= a[i]) {
            stack.pop();
        }
        if (stack.length) {
            results[i] = a[stack.at(-1)];
        }
        stack.push(i);
    }
    console.log(stack);
    return results;
}

console.log(prevGreater(arr));
// results = [null, 35, 35, 5, 35, null, 235, 32, 235]
// stack = [5, 38]

