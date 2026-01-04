// with recursion (postorder) we can find total sum elements of every branch for node
// on evey stem count the tilt and update global tilt
// repeat it for every node starting from the furthest left node
var findTilt = function(root) {
    let totalTilt = 0;

    function getSum(node){
        if (node === null || node === undefined) return 0;
        const leftSum = getSum(node.left);
        const rightSum = getSum(node.right);
        const tilt = Math.abs(rightSum - leftSum);
        totalTilt = totalTilt + tilt;
        return node.val + leftSum + rightSum;
    }
    getSum(root);
    return totalTilt;
};