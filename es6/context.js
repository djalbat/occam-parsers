'use strict';

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

const MAXIMUM_DEPTH = 100;

class Context {
  constructor(tokens) {
    this.tokens = tokens;
    
    this.index = 0;

    this.depth = 0;
  }

  getIndex() {
    return this.index;
  }
  
  isTooDeep() {
    var tooDeep = this.depth > MAXIMUM_DEPTH;
    
    return tooDeep;
  }

  increaseDepth() {
    this.depth++;
  }

  decreaseDepth() {
    this.depth--;
  }

  setIndex(index) {
    this.index = index;
  }

  getNextSignificantToken() {
    var nextSignificantToken;

    for (;;) {
      var nextToken = this.tokens[this.index++];

      if (nextToken === undefined) {
        nextSignificantToken = null;

        break;
      }

      if (nextToken instanceof SignificantToken) {
        nextSignificantToken = nextToken;

        break;
      }
    }

    return nextSignificantToken;
  }

  getNextNonWhitespaceSignificantToken(noWhitespace) {
    var nextNonWhitespaceSignificantToken = null,
        nextSignificantToken = this.getNextSignificantToken();

    if (nextSignificantToken !== null) {
      var nextSignificantTokenIsWhitespaceToken;

      if (noWhitespace) {
        nextSignificantTokenIsWhitespaceToken = significantTokenIsWhitespaceToken(nextSignificantToken);

        if (nextSignificantTokenIsWhitespaceToken) {
          nextNonWhitespaceSignificantToken = null
        } else {
          nextNonWhitespaceSignificantToken = nextSignificantToken;
        }
      } else {
        for (;;) {
          nextSignificantTokenIsWhitespaceToken = significantTokenIsWhitespaceToken(nextSignificantToken);

          if (nextSignificantTokenIsWhitespaceToken) {
            nextSignificantToken = this.getNextSignificantToken();
          } else {
            nextNonWhitespaceSignificantToken = nextSignificantToken;

            break;
          }

          if (nextSignificantToken === null) {
            nextNonWhitespaceSignificantToken = null;

            break;
          }
        }
      }
    }

    return nextNonWhitespaceSignificantToken;
  }

  savedIndex() {
    var index = this.getIndex(),
        savedIndex = index; ///
    
    return savedIndex;
  }

  backtrack(savedIndex) {
    var index = savedIndex; ///
    
    this.setIndex(index);
  }
}

module.exports = Context;

function significantTokenIsWhitespaceToken(significantToken) {
  var type = significantToken.getType(),
      whitespaceToken = (type === SignificantToken.types.WHITESPACE);
  
  return whitespaceToken;
}
