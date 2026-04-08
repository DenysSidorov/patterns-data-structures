var binaryTreePaths = function(root) {
    if (!root) return [];
    if (!root.left && !root.right) return [String(root.val).toString()];
    const results = [];
    // ** format: "1->2->5" with -> symbols
    function traversePreOrder(n, path) {
        if(!n) return;
        let newPath = !path
            ? + n.val
            : path + '->' + n.val;
        if (!n.left && !n.right) {
            results.push(newPath);
            return;
        }
        traversePreOrder(n.left, newPath);
        traversePreOrder(n.right, newPath);
    }
    traversePreOrder(root, "");
    return results;
};