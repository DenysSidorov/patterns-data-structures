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
// removeKthNodeFromEnd(k) - Node | null

// removeElement(value) - this

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

    while (currentNode) {
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
    if (this.head === null) {
      return null;
    }

    if (this.getSize() === 1) {
      const currentHead = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentHead;
    }

    if (index === 0) {
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

    if (index === 0) {
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

  reverse() {

    if (!this.head || !this.head.next) {
      return this;
    }

    let head = this.head;
    let prevNode = null;
    let currentNode = this.head;

    while (currentNode) {
      let next = currentNode.next;
      let current = currentNode;

      prevNode = current;
      currentNode = next;

    }

    this.head = prevNode;
    this.tail = head;
    this.tail.next = null;
    return prevNode;
  }

  removeKthNodeFromEnd(k) {
    // if the list is empty
    if (!this.head) {
      return null;
    }

    let currentHead = this.head;

    // count length
    let length = 0;
    while (currentHead) {
      length += 1;
      currentHead = currentHead.next;
    }

    if (length < k) {
      return null;
    }

    const removedIndex = length - (k - 1);

    length = 1;
    currentHead = this.head;
    let prevHead = null;

    while (currentHead) {
      if (length === removedIndex) {
        // removed element is head
        if (!prevHead) {

          if (this.head.next === null) {
            this.tail = null;
          }

          this.head = this.head.next;

          this.length -= 1;
          return this;
        }

        prevHead.next = currentHead.next;

        // save the tail
        if (currentHead.next === null) {
          this.tail = prevHead;
        }

        this.length -= 1;
        return this;
      }

      prevHead = currentHead;
      currentHead = currentHead.next;
      length += 1;
    }
  }

  removeElement(value) {

    if (this.head === null) {
      return this;
    }

    // [3]: null preHead 1 2 3
    // Create new Node before the head
    const preHeadNode = new LinkedListNode(999, this.head);

    let prevHead = preHeadNode;
    let currentHead = this.head;

    while (currentHead) {
      if (currentHead.value === value) {
        this.length -= 1;
        prevHead.next = currentHead.next;

        if (prevHead.next === null) {
          this.tail = prevHead;
        }
      } else {
        prevHead = currentHead;
      }
      currentHead = currentHead.next;
    }

    this.head = preHeadNode.next;
  }
}

module.exports = {LinkedList, LinkedListNode};
