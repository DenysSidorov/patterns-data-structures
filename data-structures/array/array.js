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
    if (this.length > 0) {
      let item = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return item;
    } else {
      return undefined;
    }
  }

  /** This function is used to insert an element at given index. */
  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.length;
  }

  /** This function is used to remove an element at given index or property in a data object. */
  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  /** It returns the element at given index. */
  getElementAtIndex(index) {
    return this.data[index];
  }
}

module.exports = Array;
