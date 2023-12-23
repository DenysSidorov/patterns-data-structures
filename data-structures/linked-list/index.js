// append(value) -> this
// prepend(value) -> this
// deleteTail() -> this
// deleteHead() -> this
// findFirst(value) -> Node | null
// getSize() -> number
// clear() -> this
// toArray() -> values[]
// fromArray(Nodes) -> Node
// getAt(index) -> Node | null
// removeAt(index) -> Node | null
// insertAt(index, value) -> this

// reverse() -> this
// removeElements(value) - this

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
    return this;
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

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  getAt(index) {
    let counter = 0;
    let currentNode = this.head;

    while(currentNode) {
      if (counter === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
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

  removeAt(index) {
    if (this.head === null){
      return null;
    }

    if (this.getSize() === 1) {
      const currentHead = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentHead;
    }

    if (index === 0){
      const currentHead = this.head;
      this.head = this.head.next;
      this.length--;
      return currentHead;
    }

    let previousNodeFromRemoved = this.getAt(index - 1);
    let nodeForRemoving = this.getAt(index);

    if (previousNodeFromRemoved && nodeForRemoving) {
      previousNodeFromRemoved.next = nodeForRemoving.next;
      this.length--;
    }

    if (previousNodeFromRemoved.next === null) {
      this.tail = previousNodeFromRemoved;
    }

    return nodeForRemoving;
  }

  insertAt(index, value) {
    const newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    if(index === 0) {
      let currentHead = this.head;
      newNode.next = currentHead;
      this.head = newNode;
      this.length++;
      return this;
    }

    let nodeByIndex = this.getAt(index);
    let prevNodeByIndex = this.getAt(index - 1);

    if (prevNodeByIndex && nodeByIndex) {
      prevNodeByIndex.next = newNode;
      newNode.next = nodeByIndex;

      this.length++;
      return this;
    }

    if (!nodeByIndex) {
      this.append(value);
    }
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

    return this.head;
  }
}

module.exports = {LinkedList, LinkedListNode};


// const list = new LinkedList();
// list.append(45);
// list.append(55);
// list.append(66);
// list.insertAt(3, 77);
// console.log(list);
