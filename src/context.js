"use strict";

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

  getIndex() { return this.state.getIndex(); }

  getTokens() { return this.state.getTokens(); }

  getNextToken() { return this.state.getNextToken(); }

  getNextSignificantToken() { return this.state.getNextSignificantToken(); }

  isNextTokenWhitespaceToken() { return this.state.isNextTokenWhitespaceToken(); }

  adjustIndex(index) { this.state.adjustIndex(index); }

  callAhead() { return this.context.calledAhead(this.state); }

  calledAhead(state) { return this.context.calledAhead(state); }

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
    const index = this.getIndex();

    this.context.adjustIndex(index);

    this.context.addChildNodes(this.childNodes);
  }

  applyState(Class, state, ...remainingArguments) {
    let context;

    state = state.clone();

    const childNodes = [];

    context = new Class(this.context, state, childNodes, ...remainingArguments);

    return context;
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();

    const childNodes = [];

    context = new Class(context, state, childNodes, ...remainingArguments);

    return context;
  }
}