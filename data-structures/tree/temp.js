export class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    addLeft(node){
        if (this.left) {
            this.left.parent = null;
            node.parent = this;
        }
        this.left = node;
    }

    addRight(node){
        if (this.right) {
            this.right.parent = null;
            node.parent = this;
        }
        this.right = node;
    }
}

export class BinaryTree {
    traverseDFS(node, cb){
        if(node){
            cb(node.value);
        }

        if(node.left){
            this.traverseDFS(node.left, cb);
        }

        if(node.right){
            this.traverseDFS(node.right, cb);
        }
    }

    traverseBFS(node, cb){
        const q = []; // dequeue/enqueue - push/shift
        if (node) {
            q.push(node);
        }

        while(q.length > 0){
            const firstNode = q.shift();
            cb(firstNode.value);
            if(firstNode.left) {
                q.push(firstNode.left);
            }
            if(firstNode.right) {
                q.push(firstNode.right);
            }
        }

    }

    preorderTraverse(node, cb) {
        this.traverseDFS(node, cb);
    }
}

const tree = new BinaryTree();


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

// tree.traverseDFS(aNode, (value) => console.log(value));
console.log('----');
// tree.traverseBFS(aNode, (value) => console.log(value));




