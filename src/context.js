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

  getNextToken() { return this.state.getNextToken(); }

  getNextSignificantToken() { return this.state.getNextSignificantToken(); }

  isNextTokenWhitespaceToken() { return this.state.isNextTokenWhitespaceToken(); }

  isCallAhead() {
    const callAheadPart = this.retrieveCallAheadPart(),
          callAhead = (callAheadPart !== null);

    return callAhead;
  }

  retrieveCallAheadPart() { return this.context.retrieveCallAheadPart(); }

  getNextPart() { return this.context.getNextPart(); }

  callAhead() {
    const callAheadPart = this.retrieveCallAheadPart(),
          parsed = this.context.calledAhead(this.state, callAheadPart);

    return parsed;
  }

  calledAhead(state, callAheadPart) { return this.context.calledAhead(state, callAheadPart); }

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

    state = state.clone();  ///

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