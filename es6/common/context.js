'use strict';

const lexers = require('occam-lexers');

const { WhitespaceToken } = lexers;

const DEFAULT_MAXIMUM_DEPTH = 99;

class Context {
  constructor(tokens, rules, maximumDepth = DEFAULT_MAXIMUM_DEPTH) {
    this.tokens = tokens;

    this.rules = rules;

    this.maximumDepth = maximumDepth;

    this.depth = 0;

    this.index = 0;
  }

  getRules() {
    return this.rules;
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
    const tooDeep = this.depth > this.maximumDepth;
    
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
    let nextSignificantToken = null;

    for (;;) {
      const nextToken = this.tokens[this.index++];

      if (nextToken === undefined) {
        break;
      }
      
      const nextTokenSignificant = nextToken.isSignificant();

      if (nextTokenSignificant) {
        nextSignificantToken = nextToken;

        break;
      }
    }

    return nextSignificantToken;
  }

  getNextNonWhitespaceSignificantToken(noWhitespace) {
    let nextNonWhitespaceSignificantToken = null,
        nextSignificantToken = this.getNextSignificantToken();

    if (nextSignificantToken !== null) {
      let nextSignificantTokenIsWhitespaceToken;

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
    const index = this.getIndex(),
          savedIndex = index; ///
    
    return savedIndex;
  }

  backtrack(savedIndex) {
    this.index = savedIndex;  ///
  }
}

module.exports = Context;

function significantTokenIsWhitespaceToken(significantToken) {
  const type = significantToken.getType(),
        whitespaceToken = (type === WhitespaceToken.type);
  
  return whitespaceToken;
}
