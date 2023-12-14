// append
// prepend
// deleteTail
// deleteHead
// findFirst
// getSize
// clear - remove all values
// toArray
// fromArray

// reverse
// removeElement - remove nodes with value

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    if (!this.head && !this.tail) {
      this._addToEmptyList(value);
    } else {

      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      const newTail = new LinkedListNode(value);
      currentNode.next = newTail;
      this.tail = newTail;
      this.length++;
    }

    return this;
  }

  findFirst(value) {
    if (this.getSize() === 0) {
      return null;
    }

    if (this.getSize() === 1) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  prepend(value) {

    if (!this.head && !this.tail) {
      this._addToEmptyList(value);
    } else {
      let currentHead = this.head;
      const newHead = new LinkedListNode(value, currentHead);
      this.head = newHead;
      this.length++;
    }

    return this;
  }

  deleteTail() {
    if (this.getSize() === 0) {
      return this;
    }

    if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    // find the latest element
    let currentHead = this.head;
    let nextToCurrentHead = currentHead.next;
    while (nextToCurrentHead.next) {
      currentHead = currentHead.next;
      nextToCurrentHead = nextToCurrentHead.next;
    }

    // remove tail and update the previous link to the null
    currentHead.next = null;
    this.tail = currentHead;

    this.length--;
    return this;
  }

  _addToEmptyList(value) {
    const newNode = new LinkedListNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  getSize() {
    return this.length;
  }

  deleteHead() {
    if (this.getSize() === 0) {
      return this;
    }

    if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    let nextToTheHead = this.head.next;
    this.head = nextToTheHead;

    this.length--;
    return this;
  }

  toArray() {
    if (this.getSize() === 0) {
      return [];
    }

    if (this.getSize() === 1) {
      return [this.head.value];
    }

    const result = [];
    let currentHead = this.head;
    while (currentHead.next) {
      result.push(currentHead.value);
      currentHead = currentHead.next;
    }

    result.push(this.tail.value);
    return result;
  }

  fromArray(values) {
    if (!Array.isArray(values)) {
      throw Error('argument of fromArray function is not the array');
    }

    values.forEach((element) => {
      this.append(element);
    });
  }
}

module.exports = {LinkedList, LinkedListNode};


// const list = new LinkedList();
// list.prepend(45);
// list.prepend(55);
// list.prepend(55);
// list.prepend(55);
// console.log(list);
