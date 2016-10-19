'use strict';

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

class Context {
  constructor(tokens) {
    this.tokens = tokens;
    
    this.index = 0;
  }

  getIndex() {
    return this.index;
  }

  setIndex(index) {
    this.index = index;
  }

  getNextToken() {
    var nextToken = this.tokens[this.index++] || null;

    return nextToken;
  }

  getNextNonWhitespaceToken(noWhitespace) {
    var nextNonWhitespaceToken = this.getNextToken();

    if (nextNonWhitespaceToken !== null) {
      var type;

      if (noWhitespace) {
        type = nextNonWhitespaceToken.getType();
        
        if (type === SignificantToken.types.WHITESPACE) {
          nextNonWhitespaceToken = null;
        }
      } else {
        while (nextNonWhitespaceToken !== null) {
          type = nextNonWhitespaceToken.getType();

          if (type === SignificantToken.types.WHITESPACE) {
            nextNonWhitespaceToken = this.getNextToken();
          } else {
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

function indexOf(element, array) {
  var foundIndex = -1;
  
  array.some(function(arrayElement, index) {
    if (element === arrayElement) {
      foundIndex = index;
      
      return true;
    } else {
      return false;
    }
  });
  
  var index = foundIndex;
  
  return index;
}
