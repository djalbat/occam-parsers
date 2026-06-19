"use strict";

export default class Context {
  constructor(context, state, committed, childNodes, precedence, continuationParts) {
    this.context = context;
    this.state = state;
    this.committed = committed;
    this.childNodes = childNodes;
    this.precedence = precedence;
    this.continuationParts = continuationParts;
  }

  getContext() {
    return this.context;
  }

  getState() {
    return this.state;
  }

  isCommitted() {
    return this.committed;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getPrecedence() {
    return this.precedence;
  }

  getContinuationParts() {
    return this.continuationParts;
  }

  setContext(context) {
    this.context = context;
  }

  setState(state) {
    this.state = state;
  }

  setCommitted(committed) {
    this.committed = committed;
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

  isContinuing() {
    const continuationPartsLength = this.continuationParts.length,
          continuing = (continuationPartsLength > 0);

    return continuing;
  }

  addChildNode(childNode) {
    const continuing = this.isContinuing();

    continuing ?
      this.childNodes.unshift(childNode) :
        this.childNodes.push(childNode);
  }

  addChildNodes(childNodes) {
    const continuing = this.isContinuing();

    continuing ?
      this.childNodes.unshift(...childNodes) :
        this.childNodes.push(...childNodes);
  }

  continued(context) { return this.context.continued(context); }

  continue() {
    let parsed;

    const continuing = this.isContinuing();

    if (continuing) {
      const context = this; ///

      parsed = this.context.continued(context);
    } else {
      parsed = true;
    }

    return parsed;
  }

  commit() {
    let parsed;

    if (this.committed) {
      parsed = true;
    } else {
      const state = this.state.clone(); ///

      this.context.setState(state);

      this.context.addChildNodes(this.childNodes);

      this.context.setPrecedence(this.precedence);

      const continuing = this.isContinuing();

      parsed = continuing ?
                  this.context.commit() :
                    true;

      this.committed = true;
    }

    return parsed;
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const committed = false,
          childNodes = [],
          precedence = null,
          continuationParts = context.getContinuationParts();

    context = new Class(context, state, committed, childNodes, precedence, continuationParts, ...remainingArguments);

    return context;
  }

  static fromPrecedence(Class, precedence, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const committed = false,
          childNodes = [],
          continuationParts = context.getContinuationParts();

    context = new Class(context, state, committed, childNodes, precedence, continuationParts, ...remainingArguments);

    return context;
  }

  static fromContinuationParts(Class, continuationParts, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const committed = false,
          childNodes = [],
          precedence = null;

    context = new Class(context, state, committed, childNodes, precedence, continuationParts, ...remainingArguments);

    return context;
  }
}