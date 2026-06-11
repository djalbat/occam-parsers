"use strict";

export default class Context {
  constructor(context, state, childNodes, callAheadPart) {
    this.context = context;
    this.state = state;
    this.childNodes = childNodes;
    this.callAheadPart = callAheadPart;
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

  getCallAheadPart() {
    return this.callAheadPart;
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

  isCallAhead() {
    const callAhead = (this.callAheadPart !== null);

    return callAhead;
  }

  getRuleMap() { return this.context.getRuleMap(); }

  getNonTerminalNodeMap() { return this.context.getNonTerminalNodeMap(); }

  getDefaultNonTerminalNode() { return this.context.getDefaultNonTerminalNode(); }

  NonTerminalNodeFromRuleName(ruleName) { return this.context.NonTerminalNodeFromRuleName(ruleName); }

  getNextPart() { return this.context.getNextPart(); }

  findRule(ruleName) { return this.context.findRule(ruleName); }

  getNextToken() { return this.state.getNextToken(); }

  getNextSignificantToken() { return this.state.getNextSignificantToken(); }

  isNextTokenWhitespaceToken() { return this.state.isNextTokenWhitespaceToken(); }

  calledAhead(state, callAheadPart) { return this.context.calledAhead(state, callAheadPart); }

  callAhead() { return this.context.calledAhead(this.state, this.callAheadPart); }

  addChildNode(childNode) {
    const callAhead = this.isCallAhead();

    callAhead ?
      this.childNodes.unshift(childNode) :
        this.childNodes.push(childNode);
  }

  addChildNodes(childNodes) {
    const callAhead = this.isCallAhead();

    callAhead ?
      this.childNodes.unshift(...childNodes) :
        this.childNodes.push(...childNodes);
  }

  store(part) { this.state.store(part, this.childNodes); }

  recover(part) { return this.state.recover(part); }

  overwriteChildNodes(...childNodes) {
    this.childNodes = childNodes;
  }

  adjustState(state) { this.state.adjustState(state); }

  apply(result) {
    const { state, childNodes } = result;

    this.state = state;

    this.childNodes = childNodes;
  }

  commit() {
    const state = this.state.clone(); ///

    this.context.setState(state);

    this.context.addChildNodes(this.childNodes);
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const childNodes = [],
          callAheadPart = context.getCallAheadPart();

    context = new Class(context, state, childNodes, callAheadPart, ...remainingArguments);

    return context;
  }

  static fromCallAheadPart(Class, callAheadPart, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const childNodes = [];

    context = new Class(context, state, childNodes, callAheadPart, ...remainingArguments);

    return context;
  }

  static fromStateAndCallAheadPart(Class, state, callAheadPart, ...remainingArguments) {
    let context = remainingArguments.pop();

    state = state.clone();  ///

    const childNodes = [];

    context = new Class(context, state, childNodes, callAheadPart, ...remainingArguments);

    return context;
  }
}