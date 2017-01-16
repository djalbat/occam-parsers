'use strict';

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

const DEFAULT_MAXIMUM_DEPTH = 99;

class Context {
  constructor(tokens, maximumDepth = DEFAULT_MAXIMUM_DEPTH) {
    this.tokens = tokens;

    this.maximumDepth = maximumDepth;

    this.depth = 0;

    this.index = 0;
  }

  getMaximumDepth() {
    return this.maximumDepth;
  }

  getDepth() {
    return this.depth;
  }

  getIndex() {
    return this.index;
  }

  isTooDeep() {
    var tooDeep = this.depth > this.maximumDepth;
    
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

  fastForward() {
    var tokensLength = this.tokens.length,
        index = tokensLength;

    this.setIndex(index);
  }
}

module.exports = Context;

function significantTokenIsWhitespaceToken(significantToken) {
  var type = significantToken.getType(),
      whitespaceToken = (type === SignificantToken.types.whitespace);
  
  return whitespaceToken;
}
