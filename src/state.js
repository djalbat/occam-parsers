"use strict";

export default class State {
  constructor(tokens, offset, index) {
    this.tokens = tokens;
    this.offset = offset;
    this.index = index;
  }

  getTokens() {
    return this.tokens;
  }

  getOffset() {
    return this.offset;
  }

  getIndex() {
    return this.index;
  }

  getNextToken() {
    let nextToken = null;

    const index = this.index + this.offset,
          length = this.tokens.length;

    if (index < length) {
      nextToken = this.tokens[index];

      this.index++;
    }

    return nextToken;
  }

  getNextSignificantToken() {
    let nextSignificantToken = null;

    const length = this.tokens.length

    let index = this.index + this.offset;

    while (index < length) {
      const token = this.tokens[index];

      this.index++;

      index = this.index + this.offset;

      const tokenSignificant = token.isSignificant();

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

    const index = this.index + this.offset,
          length = this.tokens.length;

    if (index < length) {
      const nextToken = this.tokens[index];

      nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
    }

    return nextTokenWhitespaceToken;
  }

  adjustIndex(offset) {
    this.index += offset;
  }

  adjusted(offset) {
    const index = this.index + offset;

    offset = 0;

    const state = new State(this.tokens, offset, index);

    return state;
  }

  static fromTokens(tokens) {
    const offset = 0,
          index = 0,
          state = new State(tokens, offset, index);

    return state;
  }

  static fromTokensAndOffset(tokens, offset) {
    const index = 0,
          state = new State(tokens, offset, index);

    return state;
  }
}
