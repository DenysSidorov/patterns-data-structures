var zigzagLevelOrder = function(root) {
    const r = []
    const q = [];
    let level = 1;
    if (root) {
        q.push(root)
    }
    while(q.length) {
        const l = q.length;
        const midtermResult = [];
        let switcher = level % 2 === 1;
        for (let i = 0; i < l; i++) {
            const head = q.shift();
            if (switcher) {
                midtermResult.push(head.val);
            } else {
                midtermResult.unshift(head.val);
            }
            if (head.left) {
                q.push(head.left);
            }
            if (head.right) {
                q.push(head.right);
            }
        }
        r.push(midtermResult);
        level++;
    }
    return r;
};