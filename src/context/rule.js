"use strict";

import Context from "../context";

export default class RuleContext extends Context {
  constructor(context, state, committed, childNodes, precedence, continuations, rule) {
    super(context, state, committed, childNodes, precedence, continuations);

    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  static fromRule(rule, context) {
    const precedence = null,
          continuations = continuationsFromNothing(context),
          ruleContext = Context.fromContinuations(RuleContext, continuations, rule, precedence, context);

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