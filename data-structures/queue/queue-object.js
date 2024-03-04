/**
 * Functions to be implemented
 * enqueue(item)
 * dequeue()
 * front()
 * isEmpty()
 * */

class QueueObject {
  constructor() {
    this.queue = {}
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.queue[++this.tail] = element;
  }

  size() {
    return this.tail - this.head;
  }

  dequeue() {
    if (this.head === this.tail){
      return undefined;
    }

    const removed = this.queue[++this.head];
    delete this.queue[this.head];
    return removed;
  }

  front() {
    return this.queue[this.head + 1];
  }

  isEmpty() {
    return this.size() === 0;
  }
}

module.exports = QueueObject;
