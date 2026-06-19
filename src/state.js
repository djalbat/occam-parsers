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

  store(part, precedence, childNodes) {
    const state = this, ///
          frame = Frame.fromStatePrecedenceAndChildNodes(state, precedence, childNodes),
          key = part, ///
          value = frame.serialise();

    State.cache.set(key, value);
  }

  recover(part) {
    let frame = null;

    const key = part, ///
          value = State.cache.get(key) || null;

    if (value !== null) {
      const state = this; ///

      frame = Frame.unserialise(value, state);

      State.cache.delete(key);
    }

    return frame;
  }

  clone() {
    const state = new State(this.index);

    return state;
  }

  serialise() {
    const index = this.index,
          value = {
            index
          };

    return value;
  }

  static unserialise(value) {
    const { index } = value,
          state = new State(index);

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
