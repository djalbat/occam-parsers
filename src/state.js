"use strict";

import CallAheadRecord from "./callAheadRecord";

export default class State {
  constructor(index) {
    this.index = index;
  }

  static cache;

  static tokens;

  getIndex() {
    return this.index;
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

  store(part, childNodes, precedence) {
    const state = this, ///
          callAheadRecord = CallAheadRecord.fromStateChildNodesAndPrecedence(state, childNodes, precedence),
          key = part, ///
          value = callAheadRecord.serialise();

    State.cache.set(key, value);
  }

  recover(part) {
    let callAheadRecord = null;

    const key = part, ///
          value = State.cache.get(key) || null;

    if (value !== null) {
      const state = this; ///

      callAheadRecord = CallAheadRecord.unserialise(value, state);

      State.cache.delete(key);
    }

    return callAheadRecord;
  }

  adjustIndex(index) {
    this.index = index;
  }

  adjustState(state) {
    state.adjustIndex(this.index);
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
