var mergeTrees = function(root1, root2) {
    // we will add right tree to left tree;
    // 1. edge cases
    // 2. find root node (left.val + right.val)
    // 3. find left and right children with recursion
    // 4. return root node
    if (!root1 && !root2) return null;
    if (root1 && !root2) return root1;
    if (!root1 && root2) return root2;

    root1.val = root1.val + root2.val;

    root1.left =  mergeTrees(root1.left, root2.left);
    root1.right =  mergeTrees(root1.right, root2.right);

    return root1;
};