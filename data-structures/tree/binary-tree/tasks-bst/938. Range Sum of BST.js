var rangeSumBST = function(root, low, high) {
    let sum = 0;
    function dfs(node){
        if(node === null) return 0;
        dfs(node.left);
        if (node.val >= low && node.val <= high){
            sum += node.val;
        }
        dfs(node.right);
    }
    dfs(root);
    return sum;
};