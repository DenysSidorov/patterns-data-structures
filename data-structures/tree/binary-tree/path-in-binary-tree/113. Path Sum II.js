/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) return [];

    // WITHOUT BACKTRACKING!!!
    let results = [];

    function traversePreOrder(n, value, arr) {
        if (!n) return;

        let curValue = value + n.val;
        const curArr = [...arr];
        curArr.push(n.val);

        const isLeaf = !n.left && !n.right
        if (isLeaf && targetSum === curValue){
            results.push(curArr);
        }

        if (isLeaf){
            return;
        }
        traversePreOrder(n.left, curValue, curArr);
        traversePreOrder(n.right, curValue, curArr);
    };

    traversePreOrder(root, 0, []);
    return results;
};