"use strict";

import Context from "../context";

export default class RuleContext extends Context {
  constructor(context, state, committed, childNodes, precedence, continuationParts, rule) {
    super(context, state, committed, childNodes, precedence, continuationParts);

    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  static fromRule(rule, context) {
    const precedence = null,
          continuationParts = continuationPartsFromNothing(context),
          ruleContext = Context.fromContinuationParts(RuleContext, continuationParts, rule, precedence, context);

    return ruleContext;
  }
}

function continuationPartsFromNothing(context) {
  let continuationParts;

  continuationParts = context.getContinuationParts();

  const continuationPart = context.getContinuationPart();

  if (continuationPart !== null) {
    continuationParts = [ ///
      ...continuationParts,
      continuationPart
    ];
  }

  return continuationParts;
}