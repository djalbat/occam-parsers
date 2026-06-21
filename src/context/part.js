"use strict";

import { arrayUtilities } from "necessary";

import Frame from "../frame";
import Context from "../context";

const { last } = arrayUtilities;

export default class PartContext extends Context {
  constructor(context, state, continuations, final, part) {
    super(context, state, continuations);

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
    const final = this.isFinal(),
          continuing = this.isContinuing();

    if (final && !continuing) {
      const state = this.getState(),
            context = this.getContext();

      context.updateState(state);

      frame = Frame.fromNothing();

      frame = context.commit(frame);

      if (frame !== null) {
        this.store(this.part, frame);
      }
    } else {
      frame = super.commit(frame);
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
