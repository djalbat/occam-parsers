"use strict";

import PartContext from "../../context/part";

export default class RuleNamePartContext extends PartContext {
  constructor(context, state, committted, childNodes, precedence, continuationParts, continuedPart, part, continuationPart) {
    super(context, state, committted, childNodes, precedence, continuationParts, continuedPart);

    this.continuationPart = continuationPart;
  }

  getContinuationPart() {
    return this.continuationPart;
  }

  static fromRuleNamePart(ruleNamePart, context) {
    const part = ruleNamePart,  ///
          continuationPart = continuationPartFromRuleNamePart(ruleNamePart, context),
          ruleNamePartContext = PartContext.fromPart(RuleNamePartContext, part, continuationPart, context);

    return ruleNamePartContext;
  }
}

function continuationPartFromRuleNamePart(ruleNamePart, context) {
  let continuationPart = null;

  const continuation = ruleNamePart.isContinuation();

  if (continuation) {
    const nextPart = context.getNextPart();

    if (nextPart !== null) {
      continuationPart = nextPart;  ///
    }
  }

  return continuationPart;
}
