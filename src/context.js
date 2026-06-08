"use strict";

import { arrayUtilities} from "necessary";

import State from "./state";

const { clear } = arrayUtilities;

export default class Context {
  constructor(context, state, childNodes) {
    this.context = context;
    this.state = state;
    this.childNodes = childNodes;
  }

  getContext() {
    return this.context;
  }

  getState() {
    return this.state;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getRuleMap() { return this.context.getRuleMap(); }

  getNonTerminalNodeMap() { return this.context.getNonTerminalNodeMap(); }

  getDefaultNonTerminalNode() { return this.context.getDefaultNonTerminalNode(); }

  NonTerminalNodeFromRuleName(ruleName) { return this.context.NonTerminalNodeFromRuleName(ruleName); }

  isCallAhead() { return this.context.isCallAhead(); }

  findRule(ruleName) { return this.context.findRule(ruleName); }

  getTokens() { return this.state.getTokens(); }

  getIndex() { return this.state.getIndex(); }

  getOffset() { return this.state.getOffset(); }

  getNextToken() { return this.state.getNextToken(); }

  getNextSignificantToken() { return this.state.getNextSignificantToken(); }

  isNextTokenWhitespaceToken() { return this.state.isNextTokenWhitespaceToken(); }

  adjustIndex(offset) { this.state.adjustIndex(offset); }

  callAhead() { return this.context.calledAhead(this.state); }

  calledAhead(state) {
    const offset = this.getOffset();

    state = this.state.adjusted(offset)

    const parsed = this.context.calledAhead(state);

    return parsed;
  }

  addChildNode(childNode) {
    this.childNodes.push(childNode);
  }

  addChildNodes(childNodes) {
    this.childNodes.push(...childNodes);
  }

  overwriteChildNodes(...childNodes) {
    this.childNodes = childNodes;
  }

  commit() {
    const index = this.getIndex(),
          offset = index;  ///

    this.context.adjustIndex(offset);

    this.context.addChildNodes(this.childNodes);

    clear(this.childNodes);
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let index = context.getIndex(),
        offset = context.getOffset();

    offset = offset + index; ///

    const tokens = context.getTokens(),
          state = State.fromTokensAndOffset(tokens, offset),
          childNodes = [];

    context = new Class(context, state, childNodes, ...remainingArguments);

    return context;
  }
}