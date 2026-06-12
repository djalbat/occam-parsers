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
    let callingAhead;

    const callAheadPartsLength = this.getCallAheadPartsLength();

    if (false) {
      ///
    } else if (callAheadPartsLength > 1) {
      callingAhead = true;
    } else if (callAheadPartsLength === 0) {
      callingAhead = false;
    } else {
      const callAhead = this.ruleNamePart.isCallAhead();

      callingAhead = !callAhead;
    }

    return callingAhead;
  }

  callAhead() {
    debugger
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
    const callAheadParts = callAheadPartsFromRuleNamePart(ruleNamePart, context),
          ruleNamePartContext = Context.fromCallAheadParts(RuleNamePartContext, callAheadParts, ruleNamePart, context);

    return ruleNamePartContext;
  }
}

function callAheadPartsFromRuleNamePart(ruleNamePart, context) {
  let callAheadParts;

  callAheadParts = context.getCallAheadParts();

  const callAhead = ruleNamePart.isCallAhead();

  if (callAhead) {
    const nextPart = context.getNextPart();

    if (nextPart !== null) {
      const callAheadPart = nextPart;  ///

      callAheadParts = [  ///
        ...callAheadParts,
        callAheadPart
      ]
    }
  }

  return callAheadParts;
}
