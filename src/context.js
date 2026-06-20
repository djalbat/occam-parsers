"use strict";

export default class Context {
  constructor(context, state, committed, precedence, childNodes, continuations) {
    this.context = context;
    this.state = state;
    this.committed = committed;
    this.precedence = precedence;
    this.childNodes = childNodes;
    this.continuations = continuations;
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

  getPrecedence() {
    return this.precedence;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getContinuations() {
    return this.continuations;
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

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
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

  store(part) { this.state.store(part, this.precedence, this.childNodes); }

  recover(part) { return this.state.recover(part); }

  isContinuing() {
    const continuationsLength = this.continuations.length,
          continuing = (continuationsLength > 0);

    return continuing;
  }

  addChildNode(childNode) {
    const continuing = this.isContinuing();

    continuing ?
      this.childNodes.unshift(childNode) :
        this.childNodes.push(childNode);
  }

  addChildNodes(childNodes = null) {
    if (childNodes === null) {
      return;
    }

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
      parsed = this.context.update(this.state, this.precedence, this.childNodes);

      if (parsed) {
        const continuing = this.isContinuing();

        parsed = continuing ?
                   this.context.commit() :
                     true;
      }

      this.committed = true;
    }

    return parsed;
  }

  update(state, precedence, childNodes = null) {
    let parsed;

    state = state.clone();  //

    this.setState(state);

    this.setPrecedence(precedence);

    this.addChildNodes(childNodes);

    parsed = true;

    return parsed;
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const committed = false,
          precedence = null,
          childNodes = [],
          continuations = context.getContinuations();

    context = new Class(context, state, committed, precedence, childNodes, continuations, ...remainingArguments);

    return context;
  }

  static fromPrecedence(Class, precedence, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const committed = false,
          childNodes = [],
          continuations = context.getContinuations();

    context = new Class(context, state, committed, precedence, childNodes, continuations, ...remainingArguments);

    return context;
  }

  static fromContinuations(Class, continuations, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const committed = false,
          precedence = null,
          childNodes = [];

    context = new Class(context, state, committed, precedence, childNodes, continuations, ...remainingArguments);

    return context;
  }

  static fromStateAndContinuations(Class, state, continuations, ...remainingArguments) {
    let context = remainingArguments.pop();

    state = state.clone();  ///

    const committed = false,
          precedence = null,
          childNodes = [];

    context = new Class(context, state, committed, precedence, childNodes, continuations, ...remainingArguments);

    return context;
  }
}