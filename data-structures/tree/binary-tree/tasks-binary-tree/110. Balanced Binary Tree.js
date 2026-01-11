
// O(n*n) solution with counting height every time

// do it for root node and after for left/right nodes every time
var isBalanced = function (root) {
    if (root === null) return true;

    function getHeight(node) {
        if (node === null) return 0;
        const leftHeigth = getHeight(node.left); // 8
        const rightHeigth = getHeight(node.right); // 2
        return Math.max(leftHeigth, rightHeigth) + 1;
    }

    const left = getHeight(root.left);
    const right = getHeight(root.right);

    if (Math.abs(left - right) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right)

};
