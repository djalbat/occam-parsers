"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { last } = arrayUtilities;

export default class PartContext extends Context {
  constructor(context, state, committed, precedence, childNodes, continuations, final, part) {
    super(context, state, committed, precedence, childNodes, continuations);

    this.final = final;
    this.part = part;
  }

  isFinal() {
    return this.final;
  }

  getPart() {
    return this.part;
  }

  commit(frame) {
    const committed = this.isCommitted();

    if (!committed) {
      const final = this.isFinal(),
            continuing = this.isContinuing();

      if (final && !continuing) {
        const state = this.getState(),
              context = this.getContext(),
              precedence = this.getPrecedence();

        context.updateState(state);

        frame = context.update(frame, precedence);

        if (frame !== null) {
          frame = context.commit(frame);

          if (frame !== null) {
            this.store(this.part, frame);
          }
        }
      } else {
        frame = super.commit(frame);
      }

      const committed = true;

      this.setCommitted(committed);
    }

    return frame;
  }

  static fromPart(Class, part, ...remainingArguments) {
    const context = remainingArguments.pop(), ///
          final = finalFromPart(part, context),
          continuations = continuationsFromFinal(final, context),
          partContext = Context.fromContinuations(Class, continuations, final, part, ...remainingArguments, context);

    return partContext;
  }
}

function finalFromPart(part, context) {
  let final = false;

  const continuations = context.getContinuations(),
        continuationsLength = continuations.length;

  if (continuationsLength > 0) {
    const lastContinuation = last(continuations),
          finalPartMatches = lastContinuation.matchFinalPart(part);

    if (finalPartMatches) {
      final = true;
    }
  }

  return final;
}

function continuationsFromFinal(final, context) {
  let continuations = context.getContinuations();

  if (final) {
    continuations = [
      ...continuations
    ];

    continuations.pop();
  }

  return continuations;
}
