'use strict';

var lexers = require('occam-lexers'),
    WhitespaceToken = lexers.WhitespaceToken;

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

  getNextToken(noWhitespace) {
    var token = this.tokens[this.index++],
        type;

    if (noWhitespace) {
      if (token !== undefined) {
        type = token.getType();

        if (type === WhitespaceToken.type) {
          token = undefined;
        }
      }      
    } else {
      while (token !== undefined) {
        type = token.getType();

        if (type === WhitespaceToken.type) {
          token = this.tokens[this.index++];
        } else {
          break;
        }
      }
    }

    return token;
  }

  advanceJustPastToken(token) {
    var tokenIndex = indexOf(token, this.tokens);

    this.index = tokenIndex + 1;
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
