/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    // Divide and Conquer method here can be used
    // nums is a result of inorder traverse ->  left  _ val  _ right

    // [1,2,3,  4 ,5,6,  mid,  8,9,10,  11 ,12,13]
    function buildNode(left, right) {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = buildNode(left, mid - 1);
        root.right = buildNode(mid + 1, right);
        return root;
    }

    const rootNode = buildNode(0, nums.length - 1);
    return rootNode;
};