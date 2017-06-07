'use strict';

class Tuple {
  constructor (...elements) {
    this.elements = elements;
  }
  
  getElements() {
    return this.elements;
  }
  
  getFirstElement() {
    const firstElement = first(this.elements);
    
    return firstElement;
  }
  
  getLastElement() {
    const lastElement = last(this.elements);
    
    return lastElement;
  }
}

module.exports = Tuple;

function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
