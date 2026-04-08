var constructFromPrePost = function(preorder, postorder) {
    if (preorder.length === 0) return null;

    const root = new TreeNode(preorder[0]);
    if (preorder.length === 1) return root;

    // The second element in preorder is the root of the left subtree
    const leftChildVal = preorder[1];
    const mid = postorder.indexOf(leftChildVal);

    // Number of nodes in the left subtree
    const leftCount = mid + 1;

    // Slicing arrays for recursion
    const leftPre = preorder.slice(1, leftCount + 1);
    const rightPre = preorder.slice(leftCount + 1);

    const leftPost = postorder.slice(0, leftCount);
    const rightPost = postorder.slice(leftCount, postorder.length - 1);

    root.left = constructFromPrePost(leftPre, leftPost);
    root.right = constructFromPrePost(rightPre, rightPost);

    return root;
};