"use strict";

import PartContext from "../../context/part";

export default class RuleNamePartContext extends PartContext {
  static fromRuleNamePart(ruleNamePart, context) {
    const part = ruleNamePart,  ///
          continuationParts = continuationPartsFromRuleNamePart(ruleNamePart, context),
          ruleNamePartContext = PartContext.fromContinuationPartsAndPart(RuleNamePartContext, continuationParts, part, context);

    return ruleNamePartContext;
  }
}

function continuationPartsFromRuleNamePart(ruleNamePart, context) {
  let continuationParts;

  continuationParts = context.getContinuationParts();

  const continuation = ruleNamePart.isContinuation();

  if (continuation) {
    const nextPart = context.getNextPart();

    if (nextPart !== null) {
      const continuationPart = nextPart;  ///

      continuationParts = [  ///
        ...continuationParts,
        continuationPart
      ];
    }
  }

  return continuationParts;
}
