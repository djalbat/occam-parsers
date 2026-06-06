"use strict";

export default class Context {
  constructor(context, offset, index) {
    this.context = context;
    this.offset = offset;
    this.index = index;
  }

  getContext() {
    return this.context;
  }

  getOffset() {
    return this.offset;
  }

  getIndex() {
    return this.index;
  }

  getTokens() { return this.context.getTokens(); }

  getRuleMap() { return this.context.getRuleMap(); }

  getNonTerminalNodeMap() { return this.context.getNonTerminalNodeMap(); }

  getDefaultNonTerminalNode() { return this.context.getDefaultNonTerminalNode(); }

  NonTerminalNodeFromRuleName(ruleName) { return this.context.NonTerminalNodeFromRuleName(ruleName); }

  isCallAhead() { return this.context.isCallAhead(); }

  callAhead(...remainingArguments) { return this.context.callAhead(...remainingArguments); }

  findRule(ruleName) { return this.context.findRule(ruleName); }

  getNextToken() {
    let nextToken = null;

    const tokens = this.getTokens(),
          length = tokens.length,
          index = this.index + this.offset;

    if (index < length) {
      nextToken = tokens[index];

      this.index++;
    }

    return nextToken;
  }

  getNextSignificantToken() {
    let nextSignificantToken = null;

    const tokens = this.getTokens(),
          length = tokens.length

    let index = this.index + this.offset;

    while (index < length) {
      const token = tokens[index];

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

    const tokens = this.getTokens(),
          length = tokens.length,
          index = this.index + this.offset;

    if (index < length) {
      const nextToken = tokens[index];

      nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
    }

    return nextTokenWhitespaceToken;
  }

  adjustIndex(offset) {
    this.index += offset;
  }

  commit() {
    const offset = this.index;  ///

    this.context.adjustIndex(offset);
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let index = context.getIndex(),
        offset = context.getOffset();

    offset = offset + index; ///

    index = 0;

    context = new Class(context, offset, index, ...remainingArguments);

    return context;
  }
}