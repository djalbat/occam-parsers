'use strict';

const DEFAULT_MAXIMUM_DEPTH = 99;

class Configuration {
  constructor(significantTokens, maximumDepth, rules, depth, index) {
    this.significantTokens = significantTokens;
    this.maximumDepth = maximumDepth;
    this.rules = rules;
    this.depth = depth;
    this.index = index;
  }
  
  getSignificantTokens() {
    return this.significantTokens;
  }

  getMaximumDepth() {
    return this.maximumDepth;
  }

  getRules() {
    return this.rules;
  }

  getDepth() {
    return this.depth;
  }

  getIndex() {
    return this.index;
  }

  getSavedIndex() {
    const index = this.getIndex(),
          savedIndex = index; ///
  
    return savedIndex;
  }

  getNextSignificantToken() {
    const significantTokensLength = this.significantTokens.length,
          lastIndex = significantTokensLength - 1,
          nextSignificantToken = (this.index <= lastIndex) ?
                                    this.significantTokens[this.index++] :
                                      null;

    return nextSignificantToken;
  }

  getNextNonWhitespaceSignificantToken(noWhitespace) {
    let nextNonWhitespaceSignificantToken = null;

    const nextSignificantToken = this.getNextSignificantToken();

    if (nextSignificantToken !== null) {
      const nextSignificantTokenIsWhitespaceToken = nextSignificantToken.isWhitespaceToken(),
            nextSignificantTokenIsNonWhitespaceToken = !nextSignificantTokenIsWhitespaceToken;

      if (nextSignificantTokenIsNonWhitespaceToken) {
        nextNonWhitespaceSignificantToken = nextSignificantToken;
      } else {
        if (noWhitespace) {
          nextNonWhitespaceSignificantToken = null;
        } else {
          nextNonWhitespaceSignificantToken = this.getNextNonWhitespaceSignificantToken(noWhitespace);
        }
      }
    }

    return nextNonWhitespaceSignificantToken;
  }

  isTooDeep() {
    const tooDeep = (this.depth > this.maximumDepth);

    return tooDeep;
  }

  setIndex(index) {
    this.index = index;
  }

  increaseDepth() {
    this.depth++;
  }

  decreaseDepth() {
    this.depth--;
  }

  backtrack(savedIndex) {
    this.index = savedIndex;  ///
  }

  static fromSignificantTokensAndRules(significantTokens, rules) {
    const maximumDepth = DEFAULT_MAXIMUM_DEPTH,
          depth = 0,
          index = 0,
          configuration = new Configuration(significantTokens, maximumDepth, rules, depth, index);

    return configuration;
  }
}

module.exports = Configuration;
