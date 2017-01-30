'use strict';

class arrayUtil {
  static discardAll(array) { return []; }

  static keepFirst(array) { return [array[0]]; }

  static keepSecond(array) { return [array[1]]; }

  static keepThird(array) { return [array[2]]; }

  static keepFirstAndThird(array) { return [array[0]].concat(array[2]); }

  static discardFirst(array) { return array.slice(1); }

  static discardSecond(array) { return [array[0]].concat(array.slice(2)); }

  static discardLast(array) { return array.slice(0, array.length - 1); }
}

module.exports = arrayUtil;
