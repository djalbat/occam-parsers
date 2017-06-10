'use strict';

class arrayUtil {
  static keepFirst(array) { return keepNth(array, 0); }

  static keepSecond(array) { return keepNth(array, 1); }

  static keepLast(array) { return keepNth(array, -1); }

  static discardFirst(array) { return discardNth(array, 0); }

  static discardSecond(array) { return discardNth(array, 1); }

  static discardLast(array) { return discardNth(array, -1); }

  static splice(array, start, deleteCount, itemsArray = []) {
    const args = [start, deleteCount, ...itemsArray],
          deletedItemsArray = Array.prototype.splice.apply(array, args);
  
    return deletedItemsArray;
  }
}

module.exports = arrayUtil;

function keepNth(array, n) {
  array = array.slice();

  return array.splice(n, 1);
}

function discardNth(array, n) {
  array = array.slice();

  array.splice(n, 1);

  return array;
}
