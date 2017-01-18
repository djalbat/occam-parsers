'use strict';

class Spread {
  constructor(startIndex, endIndex) {
    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }

  containsIndex(index) {
    return ((index >= this.startIndex) && (index <= this.endIndex));  ///
  }

  static fromExpression(expression) {
    var startIndex = -1,
        endIndex = Number.POSITIVE_INFINITY;

    if (expression !== undefined) {
      var matches = expression.match(/\[(\d+)?(\.\.\.)?(\d+)?\]/),
          secondMatch = second(matches),
          fourthMatch = fourth(matches);

      if (secondMatch !== undefined) {
        startIndex = parseInt(secondMatch);
      }

      if (fourthMatch !== undefined) {
        endIndex = parseInt(fourthMatch);
      }
    }

    var spread = new Spread(startIndex, endIndex);

    return spread;
  }
}

module.exports = Spread;

function second(array) { return array[1]; }
function fourth(array) { return array[3]; }
