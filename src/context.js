"use strict";

export default class Context {
  constructor(context, state, committed, continuations) {
    this.context = context;
    this.state = state;
    this.committed = committed;
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

  store(part, frame) { this.state.store(part, frame); }

  recover(part) { return this.state.recover(part); }

  isContinuing() {
    const continuationsLength = this.continuations.length,
          continuing = (continuationsLength > 0);

    return continuing;
  }

  continued(frame, context) { return this.context.continued(frame, context); }

  continue(frame) {
    const continuing = this.isContinuing();

    if (continuing) {
      const context = this; ///

      frame = this.context.continued(frame, context);
    }

    return frame;
  }

  commit(frame) {
    if (!this.committed) {
      this.context.updateState(this.state);

      const continuing = this.isContinuing();

      if (continuing) {
        frame = this.context.commit(frame);
      }

      this.committed = true;
    }

    return frame;
  }

  updateState(state) {
    this.state = state.clone();  ///
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const committed = false,
          continuations = context.getContinuations();

    context = new Class(context, state, committed, continuations, ...remainingArguments);

    return context;
  }

  static fromContinuations(Class, continuations, ...remainingArguments) {
    let context = remainingArguments.pop();

    let state;

    state = context.getState();

    state = state.clone();  ///

    const committed = false;

    context = new Class(context, state, committed, continuations, ...remainingArguments);

    return context;
  }
}