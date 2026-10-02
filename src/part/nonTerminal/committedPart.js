"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { CommittedPartPartType } from "../../partTypes";
import { committedPartPartContext } from "../../utilities/context";

const { backtick } = specialSymbols;

export default class CommittedPartPart extends NonTerminalPart {
  constructor(type, continuation, part, consuming) {
    super(type, continuation);

    this.part = part;
    this.consuming = consuming;
  }

  getPart() {
    return this.part;
  }

  isConsuming() {
    return this.consuming;
  }

  isNonConsuming() {
    const nonConsuming = !this.consuming;

    return nonConsuming;
  }

  isNonProducing() {
    const nonConsuming = this.isNonConsuming(),
          nonProducing = nonConsuming;  ///

    return nonProducing;
  }

  parse(frame, context) {
    const savedFrame = frame; ///

    context = committedPartPartContext(savedFrame, this.consuming, context);

    const continuing = context.isContinuing();

    if (continuing) {
      frame = this.part.parse(frame, context);

      if (frame !== null) {
        frame = context.continue(frame);
      } else {
        // const nonConsuming = this.isNonConsuming();
        //
        // if (nonConsuming) {
        //   frame = savedFrame; ///
        //
        //   frame = context.continue(savedFrame);
        // }
      }
    } else {
      const partFrame = this.part.parse(emptyFrame, context);

      if (partFrame === null) {
        // const nonConsuming = this.isNonConsuming();
        //
        // frame = nonConsuming ?
        //           savedFrame :
        //             null;

        frame = null;
      }
    }

    // if ((frame !== null) && (frame !== savedFrame)) {
    //   context.commit();
    // }

    if (frame !== null) {
      context.commit();
    }

    return frame;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${backtick}${partString}`;

    return string;
  }

  static fromPartAndConsuming(part, consuming) {
    const type = CommittedPartPartType,
          continuation = false,
          committedPartPart = new CommittedPartPart(type, continuation, part, consuming);

    return committedPartPart;
  }
}
