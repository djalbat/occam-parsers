"use strict";

import { arrayUtilities } from "necessary";

const { last } = arrayUtilities;

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

  getCallAheadPartsLength() {
    const callAheadPartsLength = this.callAheadParts.length;

    return callAheadPartsLength;
  }

  getCallAheadPart() {
    let callAheadPart = null;

    const callAheadPartsLength = this.getCallAheadPartsLength();

    if (callAheadPartsLength > 0) {
      const lastCallAheadPart = last(this.callAheadParts);

      callAheadPart = lastCallAheadPart;  ///
    }

    return callAheadPart;
  }

  isCallingAhead() {
    const callAheadPart = this.getCallAheadPart(),
          callingAhead = (callAheadPart !== null);

    return callingAhead;
  }

  callAhead() { return this.context.calledAhead(this.state, this.callAheadParts); }

  calledAhead(state, callAheadParts) { return this.context.calledAhead(state, callAheadParts); }

  addChildNode(childNode) {
    const callingAhead = this.isCallingAhead();

    callingAhead ?
      this.childNodes.unshift(childNode) :
        this.childNodes.push(childNode);
  }

  addChildNodes(childNodes) {
    const callingAhead = this.isCallingAhead();

    callingAhead ?
      this.childNodes.unshift(...childNodes) :
        this.childNodes.push(...childNodes);
  }

  store(part) { this.state.store(part, this.childNodes, this.precedence); }

  recover(part) {
    const callingAhead = this.isCallingAhead(),
          callAheadRecord = this.state.recover(part, callingAhead);

    return callAheadRecord;
  }

  overwriteChildNodes(...childNodes) {
    this.childNodes = childNodes;
  }

  adjustState(state) { this.state.adjustState(state); }

  commit(noPrecedence = false) {
    const state = this.state.clone(); ///

    this.context.setState(state);

    this.context.addChildNodes(this.childNodes);

    if (noPrecedence) {
      return;
    }

    this.context.setPrecedence(this.precedence);
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