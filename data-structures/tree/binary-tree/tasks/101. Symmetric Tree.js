var isSymmetric = function (root) {
    function isSameNodes(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        return node1.val === node2.val
            && isSameNodes(node1.left, node2.right)
            && isSameNodes(node1.right, node2.left);
    }
    return isSameNodes(root, root);
};



// second solution
var isSymmetric2 = function (root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    if ((!root.left && root.right) || (root.left && !root.right)) return false;

    const q = [root];
    const results = [];
    while (q.length) {
        const l = q.length;
        const midtermResults = [];
        for (let i = 0; i < l; i++) {
            const head = q.shift();

            if (head === null) {
                midtermResults.push(null);
            } else {
                midtermResults.push(head.val);
                q.push(head.left);
                q.push(head.right);
            }
        }
        if (!isPalindrome(midtermResults)) {
            return false;
        }
        results.push(midtermResults);
    }
    console.log(results);
    return true;

};


function isPalindrome(a) { // ad b da
    let left = 0;
    let right = a.length - 1;
    while (left < right) {
        if (a[left] !== a[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}