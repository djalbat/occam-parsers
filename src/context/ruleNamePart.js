"use strict";

import Context from "../context";

export default class RuleNamePartContext extends Context {
  constructor(context, offset, index, childNodes, ruleNamePart) {
    super(context, offset, index, childNodes);

    this.ruleNamePart = ruleNamePart;
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

  calledAhead(...remainingArguments) {
    const context = this.getContext(),
          parsed = context.calledAhead(...remainingArguments);

    return parsed;
  }

  static fromRuleNamePart(ruleNamePart, context) {
    const ruleNamePartContext = Context.fromNothing(RuleNamePartContext, ruleNamePart, context);

    return ruleNamePartContext;
  }
}
