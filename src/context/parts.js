"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { continuationContext } from "../utilities/context";

const { first } = arrayUtilities;

export default class PartsContext extends Context {
  constructor(context, index, continuations, parts, parsePartsContinually) {
    super(context, index, continuations);

    this.parts = parts;
    this.parsePartsContinually = parsePartsContinually;
  }

  getParts() {
    return this.parts;
  }

  getParsePartsContinually() {
    return this.parsePartsContinually;
  }

  isEmpty() {
    const partsLength = this.parts.length,
          empty = (partsLength === 0);

    return empty;
  }

  getNextPart() {
    let nextPart = null;

    const empty = this.isEmpty();

    if (!empty) {
      const firstPart = first(this.parts);

      nextPart = firstPart; ///
    }

    return nextPart;
  }

  getContinuingContext() {
    const context = this.getContext(),
          continuingContext = context;  ///

    return continuingContext;
  }

  continued(frame, context) {
    const empty = this.isEmpty();

    if (!empty) {
      const continuingContext = this.getContinuingContext();

      continuationContext((context) => {
        frame = this.parsePartsContinually(this.parts, frame, context);

        if (frame !== null) {
          context.commit();
        }
      }, continuingContext, context);
    } else {
      frame = super.continued(frame, context);
    }

    return frame;
  }

  static fromPartsAndParsePartsContinually(parts, parsePartsContinually, context) {
    const partsContext = Context.fromNothing(PartsContext, parts, parsePartsContinually, context);

    return partsContext;
  }
}
