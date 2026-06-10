"use strict";

import Context from "../context";

export default class RuleNamePartContext extends Context {
  constructor(context, state, childNodes, ruleNamePart, callAheadPart) {
    super(context, state, childNodes);

    this.ruleNamePart = ruleNamePart;
    this.callAheadPart = callAheadPart;
  }

  getRuleNamePart() {
    return this.ruleNamePart;
  }

  getCallAheadPart() {
    return this.callAheadPart;
  }

  retrieveCallAheadPart() {
    const callAheadPart = (this.callAheadPart !== null) ?
                             this.callAheadPart :
                               super.retrieveCallAheadPart();

    return callAheadPart;
  }

  static fromRuleNamePart(ruleNamePart, context) {
    const callAheadPart = callAheadPartFromRuleNamePart(ruleNamePart, context),
          ruleNamePartContext = Context.fromNothing(RuleNamePartContext, ruleNamePart, callAheadPart, context);

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
