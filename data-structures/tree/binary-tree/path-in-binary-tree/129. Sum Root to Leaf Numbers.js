/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    // corner cases later: be careful with String -> Number  and Number -> String conversions
    let result = 0;
    function preorderTraverse(n, str) {
        if(!n) return;
        let newStr = str + String(n.val);

        const isLeaf = !n.left && !n.right;
        if (isLeaf) {
            result += stringSum(newStr);
        }

        if (isLeaf) return;

        preorderTraverse(n.left, newStr);
        preorderTraverse(n.right, newStr);
    }

    function stringSum(str){
        if (typeof str !== 'string') {
            throw Error('Parameter of stringSum is not the string');
        }
        return Number(str);
    }

    preorderTraverse(root, '');
    return result;
};