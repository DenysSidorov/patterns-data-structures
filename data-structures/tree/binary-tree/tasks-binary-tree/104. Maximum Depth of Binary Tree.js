// here we go through LEVELS and every level we increase counter


var maxDepth = function(root) {
    let level = 0;
    if (!root) return level;

    const q = [root];
    while(q.length ){
        const l = q.length;
        level++; // MAIN PART
        for(let i =0; i < l; i++){
            const head = q.shift();

            if (head.left) {
                q.push(head.left);
            }
            if (head.right) {
                q.push(head.right);
            }
        }
    }
    return level;
};