var isSameNodes = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null || p.val !== q.val) return false;

    return isSameNodes(p.left, q.left) && isSameNodes(p.right, q.right);
};


// second solution
var isSameTree2 = function(p, q) {
    let pResults = [];
    let qResults = [];

    if (!p && !q) {
        return true;
    }

    if ((p && !q) || (!p && q)) {
        return false;
    }

    function traverse(node, arr, indicator) {
        if (node.left){
            traverse(node.left, arr, 'left');
        }
        arr.push(node.val + indicator);
        if (node.right){
            traverse(node.right, arr, 'right');
        }
    }
    traverse(p, pResults, 'head');
    traverse(q, qResults, 'head');
    if (pResults.length !== qResults.length) {
        return false;
    }
    let i = 0;
    while(i < pResults.length) {
        if (pResults[i] !== qResults[i]){
            return false;
        }
        i++;
    }
    return true;
};