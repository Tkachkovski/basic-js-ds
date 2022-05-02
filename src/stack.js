const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {

  constructor(element) {
      this.element = element;
      let arr = [];
      this.arr = arr;
  }
  push(element) {
      let el = this.arr.push(element);
      return el;
    
  }

  pop() {
      let el = this.arr.pop();
      return el;
  }

  peek() {
      let el = this.arr.pop();
      this.arr.push(el);
      return el;
  }
}

module.exports = {
  Stack
};
