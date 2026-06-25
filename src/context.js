"use strict";

export default class Context {
  constructor(context, state, precedence, continuations) {
    this.context = context;
    this.state = state;
    this.precedence = precedence;
    this.continuations = continuations;
  }

  getContext() {
    return this.context;
  }

  getState() {
    return this.state;
  }

  getPrecedence() {
    return this.precedence;
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

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  setContinuations(continuations) {
    this.continuations = continuations;
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

  updateState(state) {
    state = state.clone();  ///

    this.state = state;
  }

  updatePrecedence(precedence) {
    if (precedence === null) {
      return;
    }

    this.precedence = precedence;
  }

  store(part, frame) { this.state.store(part, frame); }

  recover(part, frame) {
    const partFrame = this.state.recover(part);

    frame = (partFrame !== null) ?
              frame.merge(partFrame) :
                null;

    return frame;
  }

  isContinuing() {
    const continuationsLength = this.continuations.length,
          continuing = (continuationsLength > 0);

    return continuing;
  }

  continued(frame, context) {
    frame = this.compose(frame);

    if (frame !== null) {
      frame = this.context.continued(frame, context);
    }

    return frame;
  }

  continue(frame) {
    const continuing = this.isContinuing();

    if (continuing) {
      const context = this; ///

      frame = this.context.continued(frame, context);
    }

    return frame;
  }

  compose(frame) {
    return frame;
  }

  commit() {
    this.context.updateState(this.state);

    this.context.updatePrecedence(this.precedence);
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const precedence = null,
          continuations = context.getContinuations();

    context = new Class(context, state, precedence, continuations, ...remainingArguments);

    return context;
  }

  static fromPrecedence(Class, precedence, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const continuations = context.getContinuations();

    context = new Class(context, state, precedence, continuations, ...remainingArguments);

    return context;
  }

  static fromContinuations(Class, continuations, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const precedence = null;

    context = new Class(context, state, precedence, continuations, ...remainingArguments);

    return context;
  }
}