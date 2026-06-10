"use strict";

import Context from "../context";

export default class RuleNamePartContext extends Context {
  constructor(context, state, childNodes, callAheadPart, ruleNamePart) {
    super(context, state, childNodes, callAheadPart);

    this.ruleNamePart = ruleNamePart;
  }

  getRuleNamePart() {
    return this.ruleNamePart;
  }

  static fromRuleNamePart(ruleNamePart, context) {
    const callAheadPart = callAheadPartFromRuleNamePart(ruleNamePart, context),
          ruleNamePartContext = Context.fromCallAheadPart(RuleNamePartContext, callAheadPart, ruleNamePart, context);

    return ruleNamePartContext;
  }
}

function callAheadPartFromRuleNamePart(ruleNamePart, context) {
  let callAheadPart = null

  const callAhead = ruleNamePart.isCallAhead();

  if (callAhead) {
    const partsContext = context, ///
          nextPart = partsContext.getNextPart();

    if (nextPart !== null) {
      callAheadPart = nextPart;  ///
    }
  }

  return callAheadPart;
}
