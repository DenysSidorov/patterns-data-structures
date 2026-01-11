var getMinimumDifference = function(root) {
    // minimum absolute difference
    // min is |a-b|
    // inorder
    // 0, |2, 3|, 15, 19.   |3-2| = 1 - it's the min between 2 and 3
    if(root === null) return 0;

    let min = Infinity;
    let current = undefined;
    let prev = undefined;
    function traverseInOrder(node){
        if (node.left){
            traverseInOrder(node.left)
        }

        if (prev === undefined) {
            prev = node.val;
        } else {
            current = node.val;
            if (prev !== undefined && current !== undefined) {
                min = Math.min(min, Math.abs(prev - current))
            }
            prev = current;
        }

        if (node.right){
            traverseInOrder(node.right)
        }
    }

    traverseInOrder(root);
    return min === -Infinity ? 0 : min;
};