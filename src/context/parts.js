"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { callAheadContext } from "../utilities/context";

const { first } = arrayUtilities;

export default class PartsContext extends Context {
  constructor(context, state, childNodes, callAheadPart, parts, parseParts) {
    super(context, state, childNodes, callAheadPart);

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

  calledAhead(state, callAheadPart) {
    let parsed;

    const empty = this.isEmpty();

    if (!empty) {
      const context = this.getContext();

      callAheadContext((context) => {
        parsed = this.parseParts(this.parts, context);

        if (parsed) {
          context.commit(state);
        }
      }, state, callAheadPart, context);
    } else {
      parsed = super.calledAhead(state, callAheadPart);
    }

    return parsed;
  }

  static fromPartsAndParseParts(parts, parseParts, context) {
    const partsContext = Context.fromNothing(PartsContext, parts, parseParts, context);

    return partsContext;
  }
}
