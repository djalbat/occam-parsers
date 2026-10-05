"use strict";

import PartContext from "../../context/part";

import { isValid } from "../../utilities/frame";
import { continuationContext } from "../../utilities/context";

export default class ContinuationPartContext extends PartContext {
  constructor(context, state, continuations, final, part, count, limit, parsePartContinually) {
    super(context, state, continuations, final, part);

    this.count = count;
    this.limit = limit;
    this.parsePartContinually = parsePartContinually;
  }

  getCount() {
    return this.count;
  }

  getLimit() {
    return this.limit;
  }

  getParsePart() {
    return this.parsePartContinually;
  }

  continued(frame, context) {
    const part = this.getPart(),
          count = this.count + 1,
          limit = this.limit,
          strict = true,
          continuingContext = this.getContinuingContext();

    context = continuationContext(continuingContext, context);  ///

    frame = this.parsePartContinually(part, count, limit, strict, frame, context);

    const frameValid = isValid(frame);

    if (frameValid) {
      context.commit();
    }

    return frame;
  }

  static fromPartCountLimitAndParsePartContinually(part, count, limit, parsePartContinually, context) {
    const continuationPartContext = PartContext.fromPart(ContinuationPartContext, part, count, limit, parsePartContinually, context);

    return continuationPartContext;
  }
}
