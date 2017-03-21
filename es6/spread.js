'use strict';

class Spread {
  constructor(startIndex, endIndex) {
    this.startIndex = startIndex;
    this.endIndex = endIndex;

    this.index = 0;
  }

  isBetween() {
    const between = ((this.index >= this.startIndex) && (this.index <= this.endIndex));

    return between;
  }

  incrementIndex() {
    this.index += 1;
  }

  static fromExpression(expression) {
    let startIndex = -1,
        endIndex = Number.POSITIVE_INFINITY;

    if (expression !== undefined) {
      const regExp = /\[(\d+)?(\.\.\.)?(\d+)?\]/,
          matches = expression.match(regExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches);

      if (secondMatch !== undefined) {
        startIndex = parseInt(secondMatch);

        if (thirdMatch === undefined) {
          endIndex = startIndex;
        }
      }

      if (fourthMatch !== undefined) {
        endIndex = parseInt(fourthMatch);

        if (thirdMatch === undefined) {
          startIndex = endIndex;
        }
      }
    }

    const spread = new Spread(startIndex, endIndex);

    return spread;
  }
}

module.exports = Spread;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
function fourth(array) { return array[3]; }
