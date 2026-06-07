"use strict";

import { arrayUtilities} from "necessary";

const { clear } = arrayUtilities;

export default class Context {
  constructor(context, offset, index, childNodes) {
    this.context = context;
    this.offset = offset;
    this.index = index;
    this.childNodes = childNodes;
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

  getChildNodes() {
    return this.childNodes;
  }

  getTokens() { return this.context.getTokens(); }

  getRuleMap() { return this.context.getRuleMap(); }

  getNonTerminalNodeMap() { return this.context.getNonTerminalNodeMap(); }

  getDefaultNonTerminalNode() { return this.context.getDefaultNonTerminalNode(); }

  NonTerminalNodeFromRuleName(ruleName) { return this.context.NonTerminalNodeFromRuleName(ruleName); }

  isCallAhead() { return this.context.isCallAhead(); }

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

  callAhead(...remainingArguments) {
    const context = this, ///
          parsed = this.context.calledAhead(...remainingArguments, context);

    return parsed;
  }

  adjustIndex(offset) {
    this.index += offset;
  }

  addChildNode(childNode) {
    this.childNodes.push(childNode);
  }

  addChildNodes(childNodes) {
    this.childNodes.push(...childNodes);
  }

  overwriteChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  commit() {
    const offset = this.index;  ///

    this.context.adjustIndex(offset);

    this.context.addChildNodes(this.childNodes);

    clear(this.childNodes);
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let index = context.getIndex(),
        offset = context.getOffset();

    offset = offset + index; ///

    index = 0;

    const childNodes = [];

    context = new Class(context, offset, index, childNodes, ...remainingArguments);

    return context;
  }
}