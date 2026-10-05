"use strict";

import Context from "../context";

import { isValid } from "../utilities/frame";

export default class RuleContext extends Context {
  constructor(context, state, continuations, rule) {
    super(context, state, continuations);

    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  getCuttingContext() {
    const cuttingContext = this;  ///

    return cuttingContext;
  }

  compose(frame, definitionFrame = null) {
    const definitionFrameValid = isValid(definitionFrame);

    if (definitionFrameValid) {
      frame = frame.merge(definitionFrame);
    }

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