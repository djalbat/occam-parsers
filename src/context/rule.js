"use strict";

import Context from "../context";

export default class RuleContext extends Context {
  constructor(context, state, childNodes, precedence, continuationParts, rule) {
    super(context, state, childNodes, precedence, continuationParts);

    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  static fromRule(rule, context) {
    const precedence = null,
          ruleContext = Context.fromNothing(RuleContext, rule, precedence, context);

    return ruleContext;
  }
}
