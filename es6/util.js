'use strict';

class util {
  static spliceArray(array, start, deleteCount, itemsArray) {
    var args = [start, deleteCount].concat(itemsArray);
  
    Array.prototype.splice.apply(array, args);
  }

  static trimString(string) { 
    var trimmedString = string.replace(/^\s+|\s+$/g, ''); 
  
    return trimmedString;
  }
}

module.exports = util;
