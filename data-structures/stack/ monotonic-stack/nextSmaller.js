const arr = [35, 5, 5, 4, 34, 235, 32, 3, 34];

function nextSmaller(a){
    const results = Array.from(Array(a.length), () => null);
    const stack = [];
    for(let i = 0; i < a.length; i++ ){
        while (stack.length && a[stack.at(-1)] > a[i]) {
            const headIndex = stack.pop();
            results[headIndex] = a[i];
        }
        stack.push(i);
    }

    return results;
}

console.log(nextSmaller(arr));
