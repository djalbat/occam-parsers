"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { isValid } from "../utilities/frame";
import { continuationContext } from "../utilities/context";

const { first } = arrayUtilities;

export default class PartsContext extends Context {
  constructor(context, state, continuations, parts, parsePartsContinually) {
    super(context, state, continuations);

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

  continued(frame, context) {
    const empty = this.isEmpty();

    if (!empty) {
      const continuingContext = this.getContinuingContext();

      context = continuationContext(continuingContext, context);  ///

      frame = this.parsePartsContinually(this.parts, frame, context);

      const frameValid = isValid(frame);

      if (frameValid) {
        context.commit();
      }
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
