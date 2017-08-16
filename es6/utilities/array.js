'use strict';

class arrayUtilities {
  static keepFirst(array) { return keepNth(array, 0); }

  static keepSecond(array) { return keepNth(array, 1); }

  static keepLast(array) { return keepNth(array, -1); }

  static discardFirst(array) { return discardNth(array, 0); }

  static discardSecond(array) { return discardNth(array, 1); }

  static discardLast(array) { return discardNth(array, -1); }
  
  static discardLastThenFirst(array) { return discardNth(discardNth(array, -1), 0); }

  static discardFourthThenSecond(array) { return discardNth(discardNth(array, 3), 1); }

  static discardFifthThenSecond(array) { return discardNth(discardNth(array, 4), 1); }

  static discardOdd(array) { return array.filter(function(entry, index) { return isEven(index); }); }
}

module.exports = arrayUtilities;

function keepNth(array, n) {
  array = array.slice();

  return array.splice(n, 1);
}

function discardNth(array, n) {
  array = array.slice();

  array.splice(n, 1);

  return array;
}

function isEven(index) {
  const even = (Math.floor(index/2) === index/2);

  return even;
}
