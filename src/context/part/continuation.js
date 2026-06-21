"use strict";

import PartContext from "../../context/part";

import { continuationContext } from "../../utilities/context";

export default class ContinuationPartContext extends PartContext {
  constructor(context, state, continuations, final, part, count, parsePart) {
    super(context, state, continuations, final, part);

    this.count = count;
    this.parsePart = parsePart;
  }

  getCount() {
    return this.count;
  }

  getParsePart() {
    return this.parsePart;
  }

  getContinuingContext() {
    const context = this.getContext(),
          continuingContext = context;  ///

    return continuingContext;
  }

  continued(context) {
    let success;

    const part = this.getPart(),
          count = this.count + 1,
          continuingContext = this.getContinuingContext();

    continuationContext((context) => {
      const frame = this.parsePart(part, count, context);

      success = (frame !== null);
    }, continuingContext, context);

    return success;
  }

  static fromPartCountAndParsePart(part, count, parsePart, context) {
    const continuationPartContext = PartContext.fromPart(ContinuationPartContext, part, count, parsePart, context);

    return continuationPartContext;
  }
}
