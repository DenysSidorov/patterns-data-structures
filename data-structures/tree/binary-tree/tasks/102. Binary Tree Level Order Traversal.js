var levelOrder = function (root) {
    if (!root) return [];
    const q = [];
    const results = [];

    q.push(root);
    while (q.length) {
        const internalResult = []
        const l = q.length;
        for (let i = 0; i < l; i++){
            const head = q.shift();
            internalResult.push(head.val);
            if (head.left){
                q.push(head.left)
            }
            if (head.right){
                q.push(head.right)
            }
        }
        results.push(internalResult);
    }

    console.log(results);
    return results;
};