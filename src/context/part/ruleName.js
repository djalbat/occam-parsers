"use strict";

import PartContext from "../../context/part";
import Continuation from "../../continuation";

import { isValid } from "../../utilities/frame";

export default class RuleNamePartContext extends PartContext {
  constructor(context, state, continuations, final, part, continuation, continuedFrame) {
    super(context, state, continuations, final, part);

    this.continuation = continuation;
    this.continuedFrame = continuedFrame;
  }

  getContinuation() {
    return this.continuation;
  }

  getContinuedFrame() {
    return this.continuedFrame;
  }

  isContinuing() {
    const continuing = (this.continuation === null) ?
                         super.isContinuing() :
                           true;

    return continuing;
  }

  continued(frame, context) {
    const partFrame = frame; ///

    frame = this.compose(this.continuedFrame, partFrame);

    const frameValid = isValid(frame);

    if (frameValid) {
      const continuingContext = this.getContinuingContext();

      frame = continuingContext.continued(frame, context);
    }

    return frame;
  }

  static fromframeAndRuleNamePart(frame, ruleNamePart, context) {
    const part = ruleNamePart,  ///
          continuation = Continuation.fromRuleNamePart(ruleNamePart, context),
          continuedFrame = frame, ///
          ruleNamePartContext = PartContext.fromPart(RuleNamePartContext, part, continuation, continuedFrame, context);

    return ruleNamePartContext;
  }
}
