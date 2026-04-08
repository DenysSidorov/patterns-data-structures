var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right && targetSum === 0) return false;
    let result = false;

    function traversePreOrder(n, value) {
        if (!n) return;
        let current = value + n.val;
        const isLeaf = !n.left && !n.right
        if (isLeaf && targetSum === current){
            result = true;
        }

        if (isLeaf){
            return;
        }
        traversePreOrder(n.left, current);
        traversePreOrder(n.right, current);
    };

    traversePreOrder(root, 0);
    return result;
};