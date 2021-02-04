/**
 * Functions to be implemented
 * push(item)
 * pop()
 * peek()
 * isEmpty()
 * printStack()
 */


class Stack {

  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0)
      return 'Underflow';
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  /** This method returns a string in which all the element of an stack is concatenated. */
  printStack() {
    var str = '';
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] + ' ';
    return str;
  }
}
