"use strict";

import Context from "../context";

export default class RuleContext extends Context {
  constructor(context, state, continuations, rule) {
    super(context, state, continuations);

    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  commit(frame, definitionFrame) {
    frame = this.create(frame, definitionFrame);

    if (frame !== null) {
      const state = this.getState(),
            context = this.getContext();

      context.updateState(state);
    }

    return frame;
  }

  create(frame, definitionFrame) {
    frame = (definitionFrame !== null) ?
              frame.merge(definitionFrame) :
                null;

    return frame;
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