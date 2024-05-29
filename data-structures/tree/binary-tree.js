// add
// remove
// find
// traverse  (go through all tree)

/* Additional
add/remove subtree;
add/remove branch;
insert the element in certain position
Finding the smallest common ancestor of two nodes.
* */

class BinaryTreeNode {
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


class BinaryTree {
  constructor() {
  }

  // DFS (Depth-First Search)
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

  findNodeByValue(root, value){
    if (root.value === value) {
      return root;
    }

    if (root.left){
      this.findNodeByValue(root.left, value);
    }

    if (root.right){
      this.findNodeByValue(root.right, value);
    }
  }
}


new BinaryTree().traverseDFS(aNode, (node) => {
  console.log(node.value);
});

console.log('-----');

new BinaryTree().traverseBFS(aNode, (node) => {
  console.log(node.value);
});

console.log('-----');

console.log(new BinaryTree().findNodeByValue(aNode, 'e'));

// Find node by value
function findNode(root, value) {
  if (!root) return null;
  if (root.value === value) return root;
  let leftResult = findNode(root.left, value);
  if (leftResult) return leftResult;
  return findNode(root.right, value);
}
