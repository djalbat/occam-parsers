"use strict";

export default class Context {
  constructor(context, state, childNodes, siblingParts) {
    this.context = context;
    this.state = state;
    this.childNodes = childNodes;
    this.siblingParts = siblingParts;
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

  getSiblingParts() {
    return this.siblingParts;
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

  isCallAhead() { return this.context.isCallAhead(); }

  findRule(ruleName) { return this.context.findRule(ruleName); }

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

    let siblingParts;

    siblingParts = context.getSiblingParts();

    siblingParts = [ ///
      ...siblingParts
    ]

    context = new Class(context, state, childNodes, siblingParts, ...remainingArguments);

    return context;
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    let siblingParts;

    siblingParts = context.getSiblingParts();

    siblingParts = [ ///
      ...siblingParts
    ]

    const childNodes = [];

    context = new Class(context, state, childNodes, siblingParts, ...remainingArguments);

    return context;
  }
}