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
    const state = this.serialise(), ///
          result = {
            state,
            childNodes
          };

    this.cache.set(part, result);
  }

  recover(part) {
    let result;

    result = this.cache.get(part) || null;

    if (result !== null) {
      this.cache.delete(part);

      const { childNodes } = result;

      let state;

      ({ state } = result);

      state = this.unserialise(state);  ///

      result = {
        state,
        childNodes
      };
    }

    return result;
  }

  adjustIndex(index) {
    this.index = index;
  }

  adjustState(state) {
    state.adjustIndex(this.index);
  }

  serialise() {
    const index = this.index,
          state = {
            index
          };

    return state;
  }

  unserialise(state) {
    const { index } = state;

    state = new State(this.tokens, index, this.cache);  ///

    return state;
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
