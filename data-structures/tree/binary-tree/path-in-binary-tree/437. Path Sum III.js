/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let counter = 0;

    // main idea that we find the path not for only the root, but also for every node in the tree

    function getSumInNode(node) {
        function preorderTraverse(n, sum) {
            if (!n) return;
            const newSum = sum + n.val;
            const isLeaf = !n.left && !n.right;

            if (newSum === targetSum) {
                counter += 1;
            }

            if (isLeaf) {
                return;
            }
            preorderTraverse(n.left, newSum);
            preorderTraverse(n.right, newSum);
        }
        preorderTraverse(node, 0);
    }

    function traverse(n) {
        if (!n) return;
        getSumInNode(n);
        traverse(n.left);
        traverse(n.right);
    }

    traverse(root);
    return counter;
};