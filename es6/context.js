'use strict';

var lexers = require('./occam-lexers'),
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

  getNextToken() {
    var nextToken = this.tokens[this.index++] || null;

    return nextToken;
  }

  getNextNonWhitespaceToken(noWhitespace) {
    var nextNonWhitespaceToken = null,
        nextToken = this.getNextToken();

    if (nextToken !== null) {
      var nextTokenIsWhitespaceToken;

      if (noWhitespace) {
        nextTokenIsWhitespaceToken = tokenIsWhitespaceToken(nextToken);

        if (!nextTokenIsWhitespaceToken) {
          nextNonWhitespaceToken = nextToken;
        }
      } else {
        while (nextToken !== null) {
          nextTokenIsWhitespaceToken = tokenIsWhitespaceToken(nextToken);

          if (nextTokenIsWhitespaceToken) {
            nextToken = this.getNextToken();
          } else {
            nextNonWhitespaceToken = nextToken;

            break;
          }
        }
      }
    }

    return nextNonWhitespaceToken;
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

function tokenIsWhitespaceToken(token) {
  var type = token.getType(),
      whitespaceToken = (type === SignificantToken.types.WHITESPACE);
  
  return whitespaceToken;
}
