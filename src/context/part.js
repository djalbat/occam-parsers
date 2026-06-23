"use strict";

import { arrayUtilities } from "necessary";

import { emptyFrame } from "../frame";

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

  commit(frame, partFrame) {
    if (partFrame !== null) {
      const final = this.isFinal(),
            state = this.getState(),
            context = this.getContext(),
            continuing = this.isContinuing();

      if (final && !continuing) {
        frame = context.commit(emptyFrame);

        if (frame !== null) {
          context.updateState(state);

          this.store(this.part, partFrame);
        }
      } else {
        frame = this.create(frame, partFrame);

        if (frame !== null) {
          context.updateState(state);

          if (continuing) {
            frame = context.commit(frame);
          }
        }
      }
    } else {
      frame = null;
    }

    return frame;
  }

  create(frame, partFrame) {
    frame = (partFrame !== null) ?
              frame.merge(partFrame) :
                frame;

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
