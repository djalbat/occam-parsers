"use strict";

import PartContext from "../../context/part";

export default class RuleNamePartContext extends PartContext {
  static fromRuleNamePart(ruleNamePart, context) {
    const part = ruleNamePart,  ///
          contiunationParts = contiunationPartsFromRuleNamePart(ruleNamePart, context),
          ruleNamePartContext = PartContext.fromContinuationPartsAndPart(RuleNamePartContext, contiunationParts, part, context);

    return ruleNamePartContext;
  }
}

function contiunationPartsFromRuleNamePart(ruleNamePart, context) {
  let contiunationParts;

  contiunationParts = context.getContinuationParts();

  const contiunation = ruleNamePart.isContiunation();

  if (contiunation) {
    const nextPart = context.getNextPart();

    if (nextPart !== null) {
      const contiunationPart = nextPart;  ///

      contiunationParts = [  ///
        ...contiunationParts,
        contiunationPart
      ];
    }
  }

  return contiunationParts;
}
