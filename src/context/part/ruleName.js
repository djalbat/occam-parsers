"use strict";

import PartContext from "../../context/part";
import Continuation from "../../continuation";

export default class RuleNamePartContext extends PartContext {
  constructor(context, state, committed, precedence, childNodes, continuations, final, part, continuation) {
    super(context, state, committed, precedence, childNodes, continuations, final);

    this.continuation = continuation;
  }

  getContinuation() {
    return this.continuation;
  }

  isInitial() {
    const initial = (this.continuation !== null);

    return initial;
  }

  static fromRuleNamePart(ruleNamePart, context) {
    const part = ruleNamePart,  ///
          continuation = Continuation.fromRuleNamePart(ruleNamePart, context),
          ruleNamePartContext = PartContext.fromPart(RuleNamePartContext, part, continuation, context);

    return ruleNamePartContext;
  }
}
