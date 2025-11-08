/*
    8
   / \
  3   10
 /\     \
1  6    14
   /\   /
  4  7  13
* */

// insert(value)
// find(value)
// travers(root/node)
// remove (value)
    //    - remove leaf (no children)
    //    - remove node only with one child (left or right)
    //    - remove node with two children


import {BinaryTree} from "./binary-tree.js";

class BinaryTreeNode {
  constructor(value) {
    this.parent = null;
    this.left = null;
    this.right = null;
    this.value = value;
  }

  setLeft(node) {

    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;
    node.parent = this;

  }

  setRight(node) {

    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;
    node.parent = this;

  }
}

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value, comparator) {
    super(value);
    this.comparator = comparator;
  }

  insert(value) {
    if (this.comparator(value, this.value) < 0) {  //  true | 3 - 8 < 0
      if (this.left) { // if we have left child just use recursion
        this.left.insert(value);
        return; // next work is not needed
      }

      let newNode = new BinarySearchTreeNode(value, this.comparator);
      this.setLeft(newNode);

      return newNode;
    }

    if (this.comparator(value, this.value) > 0) {
      if (this.right) {
        this.right.insert(value);
        return;
      }
      let newNode = new BinarySearchTreeNode(value, this.comparator);
      this.setRight(newNode);

      return newNode;
    }
    return this;
  }

  find(value){
    if (this.comparator(this.value, value) === 0) return this;

    if (this.comparator(value, this.value) < 0 && this.left) {
      return this.left.find(value);
    }

    if (this.comparator(value, this.value) > 0 && this.right) {
      return this.right.find(value);
    }

    return null;
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

  find(value) {
    return super.findNodeByValue(this.root, value);
    // return this.root.find(value);
  }
}

const tree = new BinarySearchTree(8, (a, b) => a - b);
tree.insert(3);
tree.insert(10);
tree.insert(14);
tree.insert(1);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(13);


function traverseBF(root) {
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let node = queue.shift();  // Извлекаем первый элемент из очереди
    console.log(node.value);   // Выводим значение текущего узла

    // Добавляем потомков в очередь, если они существуют
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

// traverseBF(tree.root)

console.log(tree.find(14));
// const node7 = tree.find(7);
// console.log(node7 ? `Node with value 7 found: ${node7.value}` : 'Node 7 not found');
