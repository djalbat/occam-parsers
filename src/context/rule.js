"use strict";

import Context from "../context";

export default class RuleContext extends Context {
  constructor(context, index, continuations, rule) {
    super(context, index, continuations);

    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  updatePrecedence(precedence) {
    ///
  }

  compose(frame, definitionFrame = null) {
    if (definitionFrame !== null) {
      frame = frame.merge(definitionFrame);
    }

    return frame;
  }

  getContinuingContext() {
    const context = this.getContext(),
          continuingContext = context;  ///

    return continuingContext;
  }

  static fromRule(rule, context) {
    const continuations = continuationsFromNothing(context),
          ruleContext = Context.fromContinuations(RuleContext, continuations, rule, context);

    return ruleContext;
  }
}

function continuationsFromNothing(context) {
  let continuations;

  continuations = context.getContinuations();

  const continuation = context.getContinuation();

  if (continuation !== null) {
    continuations = [ ///
      ...continuations,
      continuation
    ];
  }

  return continuations;
}