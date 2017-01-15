'use strict';

class arrayUtil {
  static discardAll(array) { return []; }

  static keepFirst(array) { return [array[0]]; }

  static keepSecond(array) { return [array[1]]; }

  static discardFirst(array) { return array.slice(1); }

  static discardSecond(array) { return [array[0]].concat(array.slice(2)); }
}

module.exports = arrayUtil;
