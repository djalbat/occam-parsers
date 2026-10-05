"use strict";

import { isValid } from "./utilities/frame";

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

  getRuleMap() { return this.context.getRuleMap(); }

  isIsolated() {  return this.context.isIsolated(); }

  getNonTerminalNodeMap() { return this.context.getNonTerminalNodeMap(); }

  getDefaultNonTerminalNode() { return this.context.getDefaultNonTerminalNode(); }

  NonTerminalNodeFromRuleName(ruleName) { return this.context.NonTerminalNodeFromRuleName(ruleName); }

  findRule(ruleName) { return this.context.findRule(ruleName); }

  getNextPart() { return this.context.getNextPart(); }

  getTokens() { return this.state.getTokens(); }

  getNextToken() { return this.state.getNextToken(); }

  getNextSignificantToken() { return this.state.getNextSignificantToken(); }

  isNextTokenWhitespaceToken() { return this.state.isNextTokenWhitespaceToken(); }

  store(part, frame) { this.state.store(part, frame); }

  recover(part) { return this.state.recover(part); }

  getContinuingContext() {
    const continuingContext = this.context; ///

    return continuingContext;
  }

  getCuttingContext() {
    const continuatingContext = this.getContinuingContext(),
          cuttingContext = continuatingContext.getCuttingContext();

    return cuttingContext;
  }

  getContinuation() {
    const continuation = null;

    return continuation;
  }

  isContinuing() {
    const continuationsLength = this.continuations.length,
          continuing = (continuationsLength > 0);

    return continuing;
  }

  continued(frame, context) {
    frame = this.compose(frame);

    const frameValid = isValid(frame);

    if (frameValid) {
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

  updateState(state) {
    this.state = state.clone();  ///
  }

  compose(frame) {
    return frame;
  }

  commit(context) {
    if (context === undefined) {
      context = this.context;
    }

    context.updateState(this.state);
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
