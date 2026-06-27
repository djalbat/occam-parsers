"use strict";

export default class State {
  constructor(tokens, cache, index) {
    this.tokens = tokens;
    this.cache = cache;
    this.index = index;
  }

  getTokens() {
    return this.tokens;
  }

  getCache() {
    return this.cache;
  }

  getIndex() {
    return this.index;
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

  store(part, frame) {
    this.cache.set(part, frame);
  }

  recover(part) {
    const frame = this.cache.get(part) || null;

    if (frame !== null) {
      this.cache.delete(part);
    }

    return frame;
  }

  clone() {
    const state = new State(this.tokens, this.cache, this.index);

    return state;
  }

  static fromTokens(tokens) {
    const cache = new WeakMap(),
          index = 0,
          state = new State(tokens, cache, index);

    return state;
  }
}
