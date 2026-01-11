// part 1: add to list all values traversed with inorder
// part 2: find val in list with two pointers
var findTarget = function(root, k) {
    // list [1,2,3,4,5,6], k=5      l=0 ,  r =list.lenght - 1
    if (root === null) return false;
    const list = [];
    function traverse(node){
        if (node.left) {
            traverse(node.left)
        }
        list.push(node.val);
        if (node.right) {
            traverse(node.right)
        }
    }
    traverse(root);
    let l = 0;
    let r = list.length - 1;
    while(l<r){
        const sum = list[l] + list[r];
        if (sum === k){
            return true;
        } else if (sum < k ){
            l = l + 1;
        } else {
            r = r - 1;
        }
    }
    return false;
};