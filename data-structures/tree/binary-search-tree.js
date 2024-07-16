// no same values (in some realisations it could be)
// node's value more than any value in left subtree
// node's value less than any value in right subtree

/*
6
| \
5  10
|  /\
2  9
      \
       11
* */


import BinaryTreeNode from './binary-tree';

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value, comparator) {
    super(value);
    this.comparator = comparator;
  }

  insert(value) {
    if (this.comparator(value, this.value) < 0) {
      if (this.left) return this.left.insert(value);
      let newNode = new BinarySearchTreeNode(value, this.comparator);
      this.setLeft(newNode);

      return newNode;
    }

    if (this.comparator(value, this.value) > 0) {
      if (this.right) return this.right.insert(value);
      let newNode = new BinarySearchTreeNode(value, this.comparator);
      this.setRight(newNode);

      return newNode;
    }
    return this;
  }

  find(value) {
    if (this.comparator(this.value, value) === 0) return this;

    if (this.comparator(this.value, value) < 0 && this.left) {
      return this.left.find(value);
    }

    if (this.comparator(this.value, value) > 0 && this.right) {
      return this.right.find(value);
    }

    return null;
  }

  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }

  removeChild(nodeToRemove) {
    if (this.left && this.left === nodeToRemove) {
      this.left = null;
      return true;
    }

    if (this.right && this.right === nodeToRemove) {
      this.right = null;
      return true;
    }

    return false;
  }

  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.left === nodeToReplace) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }
}

class BinarySearchTree {
  constructor(value, comparator) {
    this.root = new BinarySearchTreeNode(value, comparator);
    this.comparator = comparator;
  }

  insert(value) {
    if (!this.root.value) this.root.value = value;
    else this.root.insert(value);
  }

  find(value) {
    return this.root.find(value);
  }

  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error('Item not found');
    }

    const parent = nodeToRemove.parent;

    // Нет потомков, листовой узел
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        // Удалить у родителя указатель на удаленного потомка
        parent.removeChild(nodeToRemove);
      } else {
        // Нет родителя, корневой узел
        nodeToRemove.value = undefined;
      }
    }

    // Есть и левый, и правый потомки
    else if (nodeToRemove.left && nodeToRemove.right) {
      // Ищем минимальное значение в правом поддереве
      // И ставим его на место удаляемого узла
      const nextBiggerNode = nodeToRemove.right.findMin();

      if (this.comparator(nextBiggerNode, nodeToRemove.right) === 0) {
        // Правый потомок одновременно является минимальным в правом дереве
        // то есть у него нет левого поддерева
        // можно просто заменить удаляемый узел на его правого потомка
        nodeToRemove.value = nodeToRemove.right.value;
        nodeToRemove.setRight(nodeToRemove.right.right);
      } else {
        // Удалить найденный узел (рекурсия)
        this.remove(nextBiggerNode.value);
        // Обновить значение удаляемого узла
        nodeToRemove.value = nextBiggerNode.value;
      }
    }

    // Есть только один потомок (левый или правый)
    else {
      // Заменить удаляемый узел на его потомка
      const childNode = nodeToRemove.left || nodeToRemove.right;

      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        this.root = childNode;
      }
    }

    // Удалить ссылку на родителя
    nodeToRemove.parent = null;

    return true;
  }
}
