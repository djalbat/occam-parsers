"use strict";

export default class Context {
  constructor(context, state, continuations) {
    this.context = context;
    this.state = state;
    this.continuations = continuations;
  }

  getContext() {
    return this.context;
  }

  getState() {
    return this.state;
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

  store(part, frame) { this.state.store(part, frame); }

  recover(part) { return this.state.recover(part); }

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
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const continuations = context.getContinuations();

    context = new Class(context, state, continuations, ...remainingArguments);

    return context;
  }

  static fromContinuations(Class, continuations, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    context = new Class(context, state, continuations, ...remainingArguments);

    return context;
  }
}