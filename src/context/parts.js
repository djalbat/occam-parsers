"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { callAheadContext } from "../utilities/context";

const { first } = arrayUtilities;

export default class PartsContext extends Context {
  constructor(context, state, childNodes, precedence, callAheadParts, parts, parsePartsContiunally) {
    super(context, state, childNodes, precedence, callAheadParts);

    this.parts = parts;
    this.parsePartsContiunally = parsePartsContiunally;
  }

  getParts() {
    return this.parts;
  }

  getParsePartsContiunally() {
    return this.parsePartsContiunally;
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
        parsed = this.parsePartsContiunally(this.parts, context);

        if (parsed) {
          context.commit(state);
        }
      }, state, callAheadParts, context);
    } else {
      parsed = super.calledAhead(state, callAheadParts);
    }

    return parsed;
  }

  static fromPartsAndParsePartsContinually(parts, parsePartsContiunally, context) {
    const partsContext = Context.fromNothing(PartsContext, parts, parsePartsContiunally, context);

    return partsContext;
  }
}
