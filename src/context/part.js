"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { last } = arrayUtilities;

export default class PartContext extends Context {
  constructor(context, state, committed, childNodes, precedence, continuationParts, continuedPart, part) {
    super(context, state, committed, childNodes, precedence, continuationParts);

    this.continuedPart = continuedPart;
    this.part = part;
  }

  getCcntinuedPart() {
    return this.continuedPart;
  }

  getPart() {
    return this.part;
  }

  hasContinued() {
    const continued = (this.part === this.continuedPart);

    return continued;
  }

  commit() {
    let parsed;

    const committed = this.isCommitted();

    if (committed) {
      parsed = true;
    } else {
      const continued = this.hasContinued(),
            continuing = this.isContinuing();

      if (continued && !continuing) {
        const state = this.getState(),
              context = this.getContext(),
              precedence = this.getPrecedence();

        context.setState(state);

        context.setPrecedence(precedence);

        parsed = context.commit();

        if (parsed) {
          this.store(this.part);
        }
      } else {
        parsed = super.commit();
      }

      const committed = true;

      this.setCommitted(committed);
    }

    return parsed;
  }

  static fromPart(Class, part, ...remainingArguments) {
    const context = remainingArguments.pop(); ///

    let continuationParts = context.getContinuationParts();

    const continuedPart = continuedPartFromPartAndContinuationParts(part, continuationParts);

    continuationParts = continuationPartsFromContinuedPartAndContinuationParts(continuedPart, continuationParts);

    const partContext = Context.fromContinuationParts(Class, continuationParts, continuedPart, part, ...remainingArguments, context);

    return partContext;
  }

  static fromContinuationPartsAndPart(Class, continuationParts, part, ...remainingArguments) {
    const context = remainingArguments.pop(); ///

    const continuedPart = continuedPartFromPartAndContinuationParts(part, continuationParts);

    continuationParts = continuationPartsFromContinuedPartAndContinuationParts(continuedPart, continuationParts);

    const partContext = Context.fromContinuationParts(Class, continuationParts, continuedPart, part, ...remainingArguments, context);

    return partContext;
  }
}

function continuedPartFromPartAndContinuationParts(part, continuationParts) {
  let continuedPart = null;

  const continuationPartsLength = continuationParts.length;

  if (continuationPartsLength > 0) {
    const lastContinuationPart = last(continuationParts);

    if (lastContinuationPart === part) {
      continuedPart = lastContinuationPart;  ///
    }
  }

  return continuedPart;
}

function continuationPartsFromContinuedPartAndContinuationParts(continuedPart, continuationParts) {
  const continuationPartsLength = continuationParts.length;

  if (continuationPartsLength > 0) {
    const lastContinuationPart = last(continuationParts);

    if (lastContinuationPart === continuedPart) {
      continuationParts = [
        ...continuationParts
      ];

      continuationParts.pop();
    }
  }

  return continuationParts;
}
