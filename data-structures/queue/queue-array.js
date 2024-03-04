/**
 * Functions to be implemented
 * enqueue(item)
 * dequeue()
 * front()
 * isEmpty()
 * printQueue()
 * */

class QueueArray {

  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift(); // O(n) - is bad, but its JavaScript :(
  }

  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    var str = '';
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] + ' ';
    return str.trim();
  }
}

module.exports = QueueArray;
