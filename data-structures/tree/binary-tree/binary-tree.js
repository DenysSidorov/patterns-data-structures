// https://medium.com/@dimko1/%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D1%8B-%D0%BE%D0%B1%D1%85%D0%BE%D0%B4-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B0-ed54848c2d47

import Queue from "../queue.js";


class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    addLeft(value){
        if (this.left){
          this.left.parent = null;
        }
        this.left = new BinaryTreeNode(value);
        this.left.parent = this;
        return this;
    }
    addRight(value){
            if (this.right){
              this.right.parent = null;
            }
            this.right = new BinaryTreeNode(value);
            this.right.parent = this;
            return this;
        }
}

export class BinaryTree {

    // recursion
    traverseDFS_preorder(node, cb) {
        if (!node) return;
        cb(node);
        this.traverseDFS_preorder(node.left, cb);
        this.traverseDFS_preorder(node.right, cb);
    }

    // recursion
    traverseDFS_inorder(node, cb) {
        if (!node) return;
        this.traverseDFS_inorder(node.left, cb);
        cb(node);
        this.traverseDFS_inorder(node.right, cb);
    }

    // recursion
    traverseDFS_postorder(node, cb) {
        if (!node) return;
        this.traverseDFS_postorder(node.left, cb);
        this.traverseDFS_postorder(node.right, cb);
        cb(node);
    }

    // with queue
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
}

const root = new BinaryTreeNode('F');
const b = new BinaryTreeNode('B');
const g = new BinaryTreeNode('G');
root.left = b;
root.right = g;

const a = new BinaryTreeNode('A');
const d = new BinaryTreeNode('D');
b.left = a;
b.right = d;

const c = new BinaryTreeNode('C');
const e = new BinaryTreeNode('E');
d.left = c;
d.right = e;

const i = new BinaryTreeNode('I');
const h = new BinaryTreeNode('H');

g.right = i;
i.left = h;
// new BinaryTree().traverseDFS_preorder(root, (node) => console.log(node.value));
// F, B, A, D, C, E, G, I, H

// new BinaryTree().traverseDFS_inorder(root, (node) => console.log(node.value));
// A, B, C, D, E, F, G, H, I

// new BinaryTree().traverseDFS_postorder(root, (node) => console.log(node.value));
// A, C, E, D, B, H, I, G, F

// new BinaryTree().traverseBFS(root, (node) => console.log(node.value));
// F, B, G, A, D, I, C, E, H
