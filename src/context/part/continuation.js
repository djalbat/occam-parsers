"use strict";

import PartContext from "../../context/part";

import { continuationContext } from "../../utilities/context";

export default class ContinuationPartContext extends PartContext {
  constructor(context, state, precedence, continuations, final, part, count, parsePartContinually) {
    super(context, state, precedence, continuations, final, part);

    this.count = count;
    this.parsePartContinually = parsePartContinually;
  }

  getCount() {
    return this.count;
  }

  getParsePart() {
    return this.parsePartContinually;
  }

  getContinuingContext() {
    const context = this.getContext(),
          continuingContext = context;  ///

    return continuingContext;
  }

  continued(frame, context) {
    const part = this.getPart(),
          count = this.count + 1,
          strict = true,
          continuingContext = this.getContinuingContext();

    continuationContext((context) => {
      frame = this.parsePartContinually(part, count, strict, frame, context);

      if (frame !== null) {
        context.commit(frame);
      }
    }, continuingContext, context);

    return frame;
  }

  static fromPartCountAndParsePartContinually(part, count, parsePartContinually, context) {
    const continuationPartContext = PartContext.fromPart(ContinuationPartContext, part, count, parsePartContinually, context);

    return continuationPartContext;
  }
}
