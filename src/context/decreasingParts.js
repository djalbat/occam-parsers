"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { callAheadContext } from "../utilities/context";

const { first } = arrayUtilities;

export default class DecreasingPartsContext extends Context {
  constructor(context, state, childNodes, callAheadParts, parts, parseParts) {
    super(context, state, childNodes, callAheadParts);

    this.parts = parts;
    this.parseParts = parseParts;
  }

  getParts() {
    return this.parts;
  }

  getParseParts() {
    return this.parseParts;
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

  calledAhead(state, callAheadParts) {
    let parsed;

    const empty = this.isEmpty();

    if (!empty) {
      const context = this.getContext();

      callAheadContext((context) => {
        parsed = this.parseParts(this.parts, context);

        if (parsed) {
          context.commit(state);
        }
      }, state, callAheadParts, context);
    } else {
      parsed = super.calledAhead(state, callAheadParts);
    }

    return parsed;
  }

  static fromPartsAndParseParts(parts, parseParts, context) {
    const decreasingPartsContext = Context.fromNothing(DecreasingPartsContext, parts, parseParts, context);

    return decreasingPartsContext;
  }
}
