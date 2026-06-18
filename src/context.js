"use strict";

export default class Context {
  constructor(context, state, childNodes, precedence, callAheadParts) {
    this.context = context;
    this.state = state;
    this.childNodes = childNodes;
    this.precedence = precedence;
    this.callAheadParts = callAheadParts;
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

  getPrecedence() {
    return this.precedence;
  }

  getCallAheadParts() {
    return this.callAheadParts;
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

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  getRuleMap() { return this.context.getRuleMap(); }

  getNonTerminalNodeMap() { return this.context.getNonTerminalNodeMap(); }

  getDefaultNonTerminalNode() { return this.context.getDefaultNonTerminalNode(); }

  NonTerminalNodeFromRuleName(ruleName) { return this.context.NonTerminalNodeFromRuleName(ruleName); }

  getNextPart() { return this.context.getNextPart(); }

  findRule(ruleName) { return this.context.findRule(ruleName); }

  getTokens() { return this.state.getTokens(); }

  getNextToken() { return this.state.getNextToken(); }

  getNextSignificantToken() { return this.state.getNextSignificantToken(); }

  isNextTokenWhitespaceToken() { return this.state.isNextTokenWhitespaceToken(); }

  store(part) { this.state.store(part, this.childNodes, this.precedence); }

  recover(part) { return this.state.recover(part); }

  adjustState(state) { this.state.adjustState(state); }

  isContinuing() {
    const callAheadPartsLength = this.callAheadParts.length,
          contiuning = (callAheadPartsLength > 0);

    return contiuning;
  }

  addChildNode(childNode) {
    const contiuning = this.isContinuing();

    contiuning ?
      this.childNodes.unshift(childNode) :
        this.childNodes.push(childNode);
  }

  addChildNodes(childNodes) {
    const contiuning = this.isContinuing();

    contiuning ?
      this.childNodes.unshift(...childNodes) :
        this.childNodes.push(...childNodes);
  }

  calledAhead(state, callAheadParts) { return this.context.calledAhead(state, callAheadParts); }

  continue() {
    let parsed;

    const contiuning = this.isContinuing();

    parsed = contiuning ?
                this.context.calledAhead(this.state, this.callAheadParts) :
                    true;

    return parsed;
  }

  commit() {
    let parsed;

    const state = this.state.clone(); ///

    this.context.setState(state);

    this.context.addChildNodes(this.childNodes);

    this.context.setPrecedence(this.precedence);

    const contiuning = this.isContinuing();

    parsed = contiuning ?
                this.context.commit() :
                  true;

    return parsed;
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const childNodes = [],
          precedence = null,
          callAheadParts = context.getCallAheadParts();

    context = new Class(context, state, childNodes, precedence, callAheadParts, ...remainingArguments);

    return context;
  }

  static fromPrecedence(Class, precedence, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const childNodes = [],
          callAheadParts = context.getCallAheadParts();

    context = new Class(context, state, childNodes, precedence, callAheadParts, ...remainingArguments);

    return context;
  }

  static fromCallAheadParts(Class, callAheadParts, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const childNodes = [],
          precedence = null;

    context = new Class(context, state, childNodes, precedence, callAheadParts, ...remainingArguments);

    return context;
  }

  static fromStateAndCallAheadParts(Class, state, callAheadParts, ...remainingArguments) {
    let context = remainingArguments.pop();

    state = state.clone();  ///

    const childNodes = [],
          precedence = null;

    context = new Class(context, state, childNodes, precedence, callAheadParts, ...remainingArguments);

    return context;
  }
}