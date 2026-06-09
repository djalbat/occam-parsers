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

  getNextToken() { return this.state.getNextToken(); }

  getNextSignificantToken() { return this.state.getNextSignificantToken(); }

  isNextTokenWhitespaceToken() { return this.state.isNextTokenWhitespaceToken(); }

  callAhead() {
    const state = this.state.clone(),
          parsed = this.context.calledAhead(state);

    if (parsed) {
      this.state = state;
    }

    return parsed;
  }

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

  adjustState(state) {
    this.state = state;
  }

  commit() {
    this.context.adjustState(this.state);

    this.context.addChildNodes(this.childNodes);
  }

  static fromState(Class, state, ...remainingArguments) {
    let context = remainingArguments.pop();

    const childNodes = [];

    context = new Class(context, state, childNodes, ...remainingArguments);

    return context;
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const childNodes = [];

    context = new Class(context, state, childNodes, ...remainingArguments);

    return context;
  }
}