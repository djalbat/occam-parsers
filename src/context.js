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

  setContext(context) {
    this.context = context;
  }

  setState(state) {
    this.state = state;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  getRuleMap() { return this.context.getRuleMap(); }

  getNonTerminalNodeMap() { return this.context.getNonTerminalNodeMap(); }

  getDefaultNonTerminalNode() { return this.context.getDefaultNonTerminalNode(); }

  NonTerminalNodeFromRuleName(ruleName) { return this.context.NonTerminalNodeFromRuleName(ruleName); }

  findRule(ruleName) { return this.context.findRule(ruleName); }

  isCallAhead() { return this.context.isCallAhead(); }

  getNextToken() { return this.state.getNextToken(); }

  getNextSignificantToken() { return this.state.getNextSignificantToken(); }

  isNextTokenWhitespaceToken() { return this.state.isNextTokenWhitespaceToken(); }

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

  adjustState(state) { this.state.adjustState(state); }

  commit() {
    const state = this.state.clone();

    this.context.setState(state);

    this.context.addChildNodes(this.childNodes);
  }

  static fromState(Class, state, ...remainingArguments) {
    let context = remainingArguments.pop();

    const childNodes = [];

    state = state.clone();  ///

    context = new Class(context, state, childNodes, ...remainingArguments);

    return context;
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    const childNodes = [];

    let state;

    state = context.getState();

    state = state.clone();  ///

    context = new Class(context, state, childNodes, ...remainingArguments);

    return context;
  }
}