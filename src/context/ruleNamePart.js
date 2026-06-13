"use strict";

import Context from "../context";

export default class RuleNamePartContext extends Context {
  constructor(context, state, childNodes, callAheadParts, ruleNamePart) {
    super(context, state, childNodes, callAheadParts);

    this.ruleNamePart = ruleNamePart;
  }

  getRuleNamePart() {
    return this.ruleNamePart;
  }

  isCallingAhead() {
    ///
  }

  callAhead() {
    ///
  }

  commit(ruleNamePart) {
    const callAheadPart = this.getCallAheadPart();

    if (this.ruleNamePart === callAheadPart) {
      this.store(this.ruleNamePart);

      return;
    }

    super.commit();
  }

  static fromRuleNamePart(ruleNamePart, context) {
    const callAheadPart = callAheadPartFromRuleNamePart(ruleNamePart, context),
          callAheadParts = callAheadPartsFromCallAheadPart(callAheadPart, context),
          ruleNamePartContext = Context.fromCallAheadParts(RuleNamePartContext, callAheadParts, ruleNamePart, context);

    return ruleNamePartContext;
  }
}

function callAheadPartFromRuleNamePart(ruleNamePart, context) {
  let callAheadPart = null;

  const callAhead = ruleNamePart.isCallAhead();

  if (callAhead) {
    const nextPart = context.getNextPart();

    if (nextPart !== null) {
      callAheadPart = nextPart;  ///
    }
  }

  return callAheadPart;
}

function callAheadPartsFromCallAheadPart(callAheadPart, context) {
  let callAheadParts;

  callAheadParts = context.getCallAheadParts();

  if (callAheadPart !== null) {
    callAheadParts = [  ///
      ...callAheadParts,
      callAheadPart
    ];
  }

  return callAheadParts;
}
