var invertTree = function(root) {
    // we invert left and right nodes of every node with recursion
    function changeOrder(node){
        if (!node) return;
        const tempRight = node.right;
        node.right = node.left;
        node.left = tempRight;
        changeOrder(node.left);
        changeOrder(node.right);
    }
    changeOrder(root);
    return root;
};