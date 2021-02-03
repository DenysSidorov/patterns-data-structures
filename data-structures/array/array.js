/**
 * Push()
 * Pop()
 * insertAt()
 * deleteAt()
 * getElementAtIndex()
 * */

class Array {

  constructor() {

    // It store the length of array.
    this.length = 0;

    // Object to store elements.
    this.data = {};
  }

  /** This function is used to push an element at the end of the array. */
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }

  /** It is used to delete an element at the end of the array. */
  pop() {
    let item = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return item;
  }
}

module.exports = Array;
