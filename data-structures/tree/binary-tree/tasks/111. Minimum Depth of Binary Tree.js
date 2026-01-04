// this is level order and if node doesn't have children -> return the current level
var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) {
        return 1;
    }

    let level = 0;

    const q = [root];
    while(q.length) {
        const l = q.length;
        level++;
        for(let i = 0; i<l; i++){
            const head = q.shift();

            if(head.left){
                q.push(head.left);
            }
            if(head.right){
                q.push(head.right);
            }

            if (!head.left && !head.right){
                return level;
            }

        }
    }
};