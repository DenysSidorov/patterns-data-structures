var searchBST = function (root, val) {

    const result = findSubtree(root, val);

    function findSubtree(root, val) {
        while (root) {
            if (root.val === val) {
                return root;
            } else if (root.val > val) {
                root = root.left;
            } else {
                root = root.right
            }
        }
        return null;
    }

    return result;
};

/* with recursion

    if (val < root.val) {
        return searchBST(root.left, val);
    }
    return searchBST(root.right, val);
*/