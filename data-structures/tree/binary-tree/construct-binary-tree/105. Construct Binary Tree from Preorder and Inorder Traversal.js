function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 1. find root value in inorder array
// 2. construct left/right INORDER arrays for next recursion step
// 3. construct left/right PREORDER arrays for next recursion step

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    const root = new TreeNode(preorder[0]);
    const rootValue = root.val;

    const mid = inorder.indexOf(rootValue);


    const leftInOrder = inorder.slice(0, mid);
    const rightInOrder = inorder.slice(mid + 1);

    const leftPreOrder = preorder.slice(1, leftInOrder.length + 1);
    const rightPreOrder = preorder.slice(leftInOrder.length + 1);

    root.left = buildTree(leftPreOrder, leftInOrder);
    root.right = buildTree(rightPreOrder, rightInOrder);

    return root;
};