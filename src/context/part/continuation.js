"use strict";

import PartContext from "../../context/part";

import { continuationContext } from "../../utilities/context";

export default class ContinuationPartContext extends PartContext {
  constructor(context, state, committed, continuations, final, part, count, parsePart) {
    super(context, state, committed, continuations, final, part);

    this.count = count;
    this.parsePart = parsePart;
  }

  getCount() {
    return this.count;
  }

  getParsePart() {
    return this.parsePart;
  }

  continued(frame, context) {
    const part = this.getPart(),
          count = this.count + 1;

    continuationContext((context) => {
      frame = this.parsePart(part, count, frame, context);
    }, context);

    return frame;
  }

  static fromPartCountAndParsePart(part, count, parsePart, context) {
    const continuationPartContext = PartContext.fromPart(ContinuationPartContext, part, count, parsePart, context);

    return continuationPartContext;
  }
}
