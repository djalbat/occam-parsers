"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { continuationContext } from "../utilities/context";

const { first } = arrayUtilities;

export default class PartsContext extends Context {
  constructor(context, state, childNodes, precedence, continuationParts, parts, parsePartsContinually) {
    super(context, state, childNodes, precedence, continuationParts);

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

  continued(context) {
    let parsed;

    const empty = this.isEmpty();

    if (!empty) {
      continuationContext((context) => {
        parsed = this.parsePartsContinually(this.parts, context);
      }, context);
    } else {
      parsed = super.continued(context);
    }

    return parsed;
  }

  static fromPartsAndParsePartsContinually(parts, parsePartsContinually, context) {
    const partsContext = Context.fromNothing(PartsContext, parts, parsePartsContinually, context);

    return partsContext;
  }
}
