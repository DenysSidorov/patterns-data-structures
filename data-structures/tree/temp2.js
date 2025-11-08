// PART 1
export class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    addLeft(node) {
        if (this.left) {
            this.left.parent = null;
            node.parent = this;
        }
        this.left = node;
    }

    addRight(node) {
        if (this.right) {
            this.right.parent = null;
            node.parent = this;
        }
        this.right = node;
    }
}

export class BinaryTree {
    traverseDFS(node, cb) {
        if (node) {
            cb(node.value);
        }

        if (node.left) {
            this.traverseDFS(node.left, cb);
        }

        if (node.right) {
            this.traverseDFS(node.right, cb);
        }
    }

    traverseBFS(node, cb) {
        const q = []; // dequeue/enqueue - push/shift
        if (node) {
            q.push(node);
        }

        while (q.length > 0) {
            const firstNode = q.shift();
            cb(firstNode.value);
            if (firstNode.left) {
                q.push(firstNode.left);
            }
            if (firstNode.right) {
                q.push(firstNode.right);
            }
        }
    }

    traversalInorderRecursive(node, cb) {
        if (node) {
            this.traversalInorderRecursive(node.left, cb); // left subtree
            cb(node.value); // root
            this.traversalInorderRecursive(node.right, cb); // right subtree
        }
    }

    traversalInorderIteratively(node, cb) {
        const stack = [];
        let curr = node;
        while(curr || stack.length > 0) {
            while(curr) {
                stack.push(curr)
                curr = curr.left;
            }
            curr = stack.pop();
            cb(curr.value);
            curr = curr.right;
        }
    }
}


const aNode = new BinaryTreeNode('a');
const bNode = new BinaryTreeNode('b');
aNode.addLeft(bNode);
const cNode = new BinaryTreeNode('c');
bNode.addLeft(cNode);
const dNode = new BinaryTreeNode('d');
aNode.addRight(dNode);
const eNode = new BinaryTreeNode('e');
const fNode = new BinaryTreeNode('f');
dNode.addLeft(eNode);
dNode.addRight(fNode);
const gNode = new BinaryTreeNode('g');
fNode.addRight(gNode);

const tree = new BinaryTree();
// tree.traverseDFS(aNode, (value) => console.log(value));
console.log('----');
// tree.traverseBFS(aNode, (value) => console.log(value));


// PART 2
class BinarySearchTreeNode extends BinaryTreeNode {
    constructor(value, comparator) {
        super(value);
        this.comparator = comparator;
    }

    addValue(value) {
        const newNode = new BinarySearchTreeNode(value, this.comparator);
        if (this.comparator(value, this.value) < 0) {
            if (this.left) {
                this.left.addValue(value);
            } else {
                this.addLeft(newNode);
            }
        } else if (this.comparator(value, this.value) > 0) {
            if (this.right) {
                this.right.addValue(value);
            } else {
                this.addRight(newNode);
            }
        }

        // return this;
    }

    find(value) {
        if (this.comparator(value, this.value) === 0) {
            return this;
        }

        if (this.comparator(value, this.value) < 0 && this.left) {
            return this.left.find(value);
        }

        if (this.comparator(value, this.value) > 0 && this.right) {
            return this.right.find(value);
        }

        return null;
    }
}

class BinarySearchTree extends BinaryTree {
    constructor(value, comparator) {
        super();
        this.comparator = comparator;
        this.root = new BinarySearchTreeNode(value, comparator);
    }

    insert(value) {
        this.root.addValue(value);
    }

    findValue(value) {
        return this.root.find(value);
    }
}

const bTree = new BinarySearchTree(8, (a, b) => a - b);

bTree.insert(3);
bTree.insert(10);
bTree.insert(14);
bTree.insert(1);
bTree.insert(6);
bTree.insert(4);
bTree.insert(7);
bTree.insert(13);

// console.log(bTree.findValue(14));

(function traverseInOrder(){
    /*
       4
      / \
     2   5
    / \   \
   1   3   6
    * */
    const bst = new BinarySearchTree(4, (a, b) => a - b);
    bst.insert(2);
    bst.insert(5);
    bst.insert(1);
    bst.insert(3);
    bst.insert(6);


    // 1,2,3,4,5,6
    // bst.traversalInorder(bst.root, (value) => console.log(value));
    bst.traversalInorderIteratively(bst.root, (value) => console.log(value));
})();


const traverseTree = new BinarySearchTree(8, (a, b) => a - b);