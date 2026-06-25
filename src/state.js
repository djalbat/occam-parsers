"use strict";

import Frame from "./frame";

export default class State {
  constructor(index) {
    this.index = index;
  }

  static cache;

  static tokens;

  getIndex() {
    return this.index;
  }

  getCache() {
    return State.cache;
  }

  getTokens() {
    return State.tokens;
  }

  getNextToken() {
    let nextToken = null;

    const length = State.tokens.length;

    if (this.index < length) {
      nextToken = State.tokens[this.index++];
    }

    return nextToken;
  }

  getNextSignificantToken() {
    let nextSignificantToken = null;

    const length = State.tokens.length

    while (this.index < length) {
      const token = State.tokens[this.index++],
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

    const length = State.tokens.length;

    if (this.index < length) {
      const nextToken = State.tokens[this.index];

      nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
    }

    return nextTokenWhitespaceToken;
  }

  store(part, frame) {
    State.cache.set(part, frame);
  }

  recover(part) {
    const frame = State.cache.get(part) || null;

    if (frame !== null) {
      State.cache.delete(part);
    }

    return frame;
  }

  clone() {
    const state = new State(this.index);

    return state;
  }

  static fromTokens(tokens) {
    const index = 0,
          state = new State(index);

    State.cache = new WeakMap();

    State.tokens = tokens;

    return state;
  }
}
