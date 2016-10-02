'use strict';

var WhitespaceToken = require('../../Lexers/es6/common/token/whitespace');

class Context {
  constructor(tokens) {
    this.tokens = tokens;
    
    this.index = 0;
    
    this.savedIndex = undefined;  ///
  }

  getNextNonWhitespaceToken() {
    var token = this.tokens[this.index++];

    while (token !== undefined) {
      if (token instanceof WhitespaceToken) {
        token = this.tokens[this.index++];
      } else {
        break;
      }
    }

    return token;
  }

  advanceJustPastToken(token) {
    var tokenIndex = indexOf(token, this.tokens);

    this.index = tokenIndex + 1;
  }
  
  saveIndex() {
    this.savedIndex = this.index;
  }

  backtrack() {
    this.index = this.savedIndex;
  }
}

module.exports = Context;

function indexOf(element, array) {
  var index = array.reduce(function(index, arrayElement, arrayIndex) {
    if (index === -1) {
      if (element === arrayElement) {
        index = arrayIndex;
      }
    }

    return index;
  }, -1);

  return index;
}
