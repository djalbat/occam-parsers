"use strict";

import Context from "../context";

export default class RuleNamePartContext extends Context {
  constructor(context, state, childNodes, ruleNamePart) {
    super(context, state, childNodes);

    this.ruleNamePart = ruleNamePart;
  }

  getRuleNamePart() {
    return this.ruleNamePart;
  }

  isCallAhead() {
    let callAhead;

    callAhead = this.ruleNamePart.isCallAhead();

    if (!callAhead) {
      const context = this.getContext();

      callAhead = context.isCallAhead();
    }

    return callAhead;
  }

  static fromRuleNamePart(ruleNamePart, context) {
    const ruleNamePartContext = Context.fromNothing(RuleNamePartContext, ruleNamePart, context);

    return ruleNamePartContext;
  }
}
