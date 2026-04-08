function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 1. find root value in inorder array
// 2. construct left/right INORDER arrays for next recursion step
// 3. construct left/right POSTORDER arrays for next recursion step

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;
    const rootValue = postorder[postorder.length - 1]
    const root = new TreeNode(rootValue);

    const mid = inorder.indexOf(rootValue);

    const leftInOrder = inorder.slice(0, mid);
    const rightInOrder = inorder.slice(mid + 1);

    const leftPostOrder = postorder.slice(0, leftInOrder.length);
    const rightPostOrder = postorder.slice(leftInOrder.length, leftInOrder.length + rightInOrder.length);

    root.left = buildTree(leftInOrder, leftPostOrder);
    root.right = buildTree(rightInOrder, rightPostOrder);

    return root;
};