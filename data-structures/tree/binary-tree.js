// add
// remove (not implemented)
// find
// traverse  (go through all tree)

// find height of the tree (not implemented)
// find height of the subtree (not implemented)

/* Additional (not implemented)
add/remove subtree;
add/remove branch;
insert the element in certain position
Finding the smallest common ancestor of two nodes.

* */


// https://my-js.org/docs/other/js-algorithms/
export class BinaryTreeNode {
  constructor(value) {
    this.parent = null;
    this.left = null;
    this.right = null;
    this.value = value;
  }

  addLeft(node) {

    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;
    node.parent = this;

  }

  addRight(node) {

    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;
    node.parent = this;

  }

  getHeight() {
    const maxLeftHeight = this.left ? this.left.height + 1 : 0;
    const maxRightHeight = this.right ? this.right.height + 1 : 0;
    return Math.max(maxLeftHeight, maxRightHeight);
  }
}

class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(value){
    this.list.push(value);
  }

  dequeue(){
    return this.list.shift();
  }

  isEmpty(){
    return !this.list.length;
  }
}

/*
a
| \
b  d
|  /\
c  e f
      \
       g
* */

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


export class BinaryTree {

  // DFS (Depth-First Search)
  // here root might be the node of the subbranch
  traverseDFS(root, callback) {

    callback(root);
    if (root.left) {
      this.traverseDFS(root.left, callback);
    }

    if (root.right) {
      this.traverseDFS(root.right, callback);
    }
  }

  // BFS (Breadth-First Search)
  traverseBFS(root, callback){
    const queue = new Queue();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();

      callback(node);

      if (node.left){
        queue.enqueue(node.left);
      }

      if (node.right){
        queue.enqueue(node.right);
      }

    }
  }

  findNodeByValue(root, value) {
    let foundNode = null;
    this.traverseDFS(root, (node) => {
      if (node.value === value) {
        foundNode = node;
      }
    });
    return foundNode;
  }
}


// const tree = new BinaryTree();
// tree.traverseDFS(aNode, (node) => console.log(node.value));
// console.log('-----');
// tree.traverseBFS(aNode, (node) => console.log(node.value));
// console.log('-----');
// console.log(tree.findNodeByValue(aNode, 'e')?.value);
// console.log('-----');

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value, comparator) {
    super(value);
    this.comparator = comparator;
  }

  insert(value) {
    if (this.comparator(value, this.value) < 0) {
      if (this.left) return this.left.insert(value);
      let newNode = new BinarySearchTreeNode(value, this.comparator);
      this.addLeft(newNode);

      return newNode;
    }

    if (this.comparator(value, this.value) > 0) {
      if (this.right) return this.right.insert(value);
      let newNode = new BinarySearchTreeNode(value, this.comparator);
      this.addRight(newNode);

      return newNode;
    }
    return this;
  }
}

class BinarySearchTree extends BinaryTree{
  constructor(value, comparator) {
    super();
    this.root = new BinarySearchTreeNode(value, comparator);
    this.comparator = comparator;
  }

  insert(value) {
    this.root.insert(value);
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

// bTree.traverseDFS(bTree.root, (node) => console.log(node.value));
