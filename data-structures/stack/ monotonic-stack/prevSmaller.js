const arr = [35, 5, 5, 4, 34, 235, 32, 3, 34];

function prevSmaller(a){
    const results = Array.from(Array(a.length), () => null);
    const stack = [];
    for(let i = 0; i < a.length; i++ ){
        while (stack.length && a[stack.at(-1)] >= a[i]) {
            const headIndex = stack.pop();
        }
        if (stack.length) {
            results[i] = a[stack.at(-1)];
        }
        stack.push(i);
    }

    return results;
}

console.log(prevSmaller(arr));
