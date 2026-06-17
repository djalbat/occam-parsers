"use strict";

import PartContext from "../../context/part";

export default class RuleNamePartContext extends PartContext {
  static fromRuleNamePart(ruleNamePart, context) {
    const part = ruleNamePart,  ///
          callAheadParts = callAheadPartsFromRuleNamePart(ruleNamePart, context),
          ruleNamePartContext = PartContext.fromCallAheadPartsAndPart(RuleNamePartContext, callAheadParts, part, context);

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
      ];
    }
  }

  return callAheadParts;
}
