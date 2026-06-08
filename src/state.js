"use strict";

export default class State {
  constructor(tokens, index) {
    this.tokens = tokens;
    this.index = index;
  }

  getTokens() {
    return this.tokens;
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

  adjustIndex(index) {
    this.index = index;
  }

  clone() {
    const state = new State(this.tokens, this.index);

    return state;
  }

  static fromTokens(tokens) {
    const index = 0,
          state = new State(tokens, index);

    return state;
  }
}
