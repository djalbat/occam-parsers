"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { continuationContext } from "../utilities/context";

const { first } = arrayUtilities;

export default class PartsContext extends Context {
  constructor(context, state, childNodes, precedence, contiunationParts, parts, parsePartsContiunally) {
    super(context, state, childNodes, precedence, contiunationParts);

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

  continued(state, contiunationParts) {
    let parsed;

    const empty = this.isEmpty();

    if (!empty) {
      const context = this.getContext();

      continuationContext((context) => {
        parsed = this.parsePartsContiunally(this.parts, context);

        if (parsed) {
          context.commit(state);
        }
      }, state, contiunationParts, context);
    } else {
      parsed = super.continued(state, contiunationParts);
    }

    return parsed;
  }

  static fromPartsAndParsePartsContinually(parts, parsePartsContiunally, context) {
    const partsContext = Context.fromNothing(PartsContext, parts, parsePartsContiunally, context);

    return partsContext;
  }
}
