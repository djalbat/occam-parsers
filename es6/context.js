'use strict';

var lexers = require('occam-lexers'),
    WhitespaceToken = lexers.WhitespaceToken;

class Context {
  constructor(tokens) {
    this.tokens = tokens;
    
    this.index = 0;
    
    this.savedIndex = undefined;  ///
  }

  getNextNonWhitespaceToken() {
    var token = this.tokens[this.index++];

    while (token !== undefined) {
      var type = token.getType();

      if (type === WhitespaceToken.type) {
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
