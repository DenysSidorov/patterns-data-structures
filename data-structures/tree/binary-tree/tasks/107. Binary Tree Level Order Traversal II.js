var levelOrderBottom = function (root) {
    const results = [];
    const q = []; // queue
    if (root) {
        q.push(root);
    }

    while (q.length) {
        const levelItems = [];
        const l = q.length;
        for (let i = 0; i < l; i++) {
            const head = q.shift();
            levelItems.push(head.val);
            if (head.left) {
                q.push(head.left);
            }
            if (head.right) {
                q.push(head.right);
            }
        }
        results.unshift(levelItems);
    }
    return results;
};