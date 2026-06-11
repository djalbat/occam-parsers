"use strict";

export default class State {
  constructor(tokens, index, cache) {
    this.tokens = tokens;
    this.index = index;
    this.cache = cache;
  }

  getTokens() {
    return this.tokens;
  }

  getIndex() {
    return this.index;
  }

  getCache() {
    return this.cache;
  }

  getNextToken() {
    let nextToken = null;

    const length = this.tokens.length;

    if (this.index < length) {
      nextToken = this.tokens[this.index++];
    }

    return nextToken;
  }

  getNextSignificantToken() {
    let nextSignificantToken = null;

    const length = this.tokens.length

    while (this.index < length) {
      const token = this.tokens[this.index++],
            tokenSignificant = token.isSignificant();

      if (tokenSignificant) {
        const significantToken = token; ///

        nextSignificantToken = significantToken;	///

        break;
      }
    }

    return nextSignificantToken;
  }

  isNextTokenWhitespaceToken() {
    let nextTokenWhitespaceToken = false;

    const length = this.tokens.length;

    if (this.index < length) {
      const nextToken = this.tokens[this.index];

      nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
    }

    return nextTokenWhitespaceToken;
  }

  store(part, childNodes) {
    const state = this, ///
          result = {
            state,
            childNodes
          };

    this.cache.set(part, result);
  }

  recover(part) {
    const key = part, ///
          result = this.cache.get(key) || null;

    if (result !== null) {
      this.cache.delete(key);
    }

    return result;
  }

  adjustIndex(index) {
    this.index = index;
  }

  adjustState(state) {
    state.adjustIndex(this.index);
  }

  clone() {
    const state = new State(this.tokens, this.index, this.cache);

    return state;
  }

  static fromTokens(tokens) {
    const index = 0,
          cache = new WeakMap(),
          state = new State(tokens, index, cache);

    return state;
  }
}
