class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(1)
  append(value) {
    const node = new LinkedListNode(value);

    if (this.length === 0 ){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  // O(1)
  prepend(value) {
    const node = new LinkedListNode(value);

    if (this.length === 0 ){
      this.head = node;
      this.tail = node;
    } else {

      // save current head
      const currentHead = new LinkedListNode(this.head.value);
      currentHead.next = this.head.next;

      // change head with new node
      this.head = node;
      this.head.next = currentHead;
    }

    this.length++;
  }

  // O(n)
  remove(value) {

    // case when list has same values in first positions
    while(this.head && this.head.value === value) {
      this.head = this.head.next;
      this.length--;
    }

    let currentNode = this.head;
    let prevNode = null;

    while(currentNode){

      if (value === currentNode.value){
        if(prevNode === null) {
          currentNode = currentNode.next
          this.head = this.head.next;
        } else {
          prevNode.next = currentNode.next

          // for case when removed value will be in the last position
          if (currentNode.next === null){
            this.tail = prevNode;
          }

        }
        this.length--;
      }

      // for case when list has same values in the end
      prevNode = (currentNode.next && currentNode.value !== currentNode.next.value) ? currentNode : prevNode;
      currentNode = currentNode.next;
    }

    if (this.length === 0){
      this.head = null;
      this.tail = null;
    }

  }

  // O(1)
  isEmpty() {
    return this.length === 0;
  }

  // O(n)
  print() {
    let current = this.head;
    let buf = []
    while(current){
      buf.push(current.value);
      current = current.next
    }
    console.log('--- ', buf);
  }

}

module.exports = LinkedList;
