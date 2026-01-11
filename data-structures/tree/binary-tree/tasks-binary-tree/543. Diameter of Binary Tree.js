// post order, left -> right -> node
// find max height for current node
// left max height + right max height = diameter
// update global max with current diameter and return it

var diameterOfBinaryTree = function(root) {
    // preorder node left right 1 2 4 5 3
    // inorder left node right 4 2 5 1 3
    // postorder left right node 4 5 2 3 1

    // node's diameter is the sum of diameter left + right nodes
    let max = 0;
    function getHeight (node){
        if (node === null) return 0;
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }

    function dfs(node){
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);

        const h = getHeight(node.left) + getHeight(node.right);
        max = Math.max(max, h);
    }

    dfs(root);
    return max;
};