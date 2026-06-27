"use strict";

import PartContext from "../../context/part";
import Continuation from "../../continuation";

export default class RuleNamePartContext extends PartContext {
  constructor(context, index, continuations, final, part, continuation, continuedFrame) {
    super(context, index, continuations, final);

    this.continuation = continuation;
    this.continuedFrame = continuedFrame;
  }

  getContinuation() {
    return this.continuation;
  }

  getContinuedFrame() {
    return this.continuedFrame;
  }

  getContinuingContext() {
    const context = this.getContext(),
          continuingContext = context;  ///

    return continuingContext;
  }

  continued(frame, context) {
    const partFrame = frame; ///

    frame = this.compose(this.continuedFrame, partFrame);

    if (frame !== null) {
      const continuingContext = this.getContinuingContext();

      frame = continuingContext.continued(frame, context);
    }

    return frame;
  }

  static fromframeAndRuleNamePart(frame, ruleNamePart, context) {
    const part = ruleNamePart,  ///
          continuation = Continuation.fromRuleNamePart(ruleNamePart, context),
          coutinuedFrame = frame, ///
          ruleNamePartContext = PartContext.fromPart(RuleNamePartContext, part, continuation, coutinuedFrame, context);

    return ruleNamePartContext;
  }
}
