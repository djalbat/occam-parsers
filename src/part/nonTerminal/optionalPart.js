"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { partContext } from "../../utilities/context";
import { OptionalPartPartType } from "../../partTypes";

const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, continuation, part) {
    super(type, continuation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, context) {
    const part = this;  ///

    partContext((context) => {
      const continuing = context.isContinuing();

      if (continuing) {
        const savedFrame = frame; ///

        frame = this.part.parse(frame, context);

        if (frame === null) {
          frame = savedFrame; ///

          frame = context.continue(frame);
        }
      } else {
        let partFrame;

        partFrame = this.part.parse(emptyFrame, context);

        if (partFrame === null) {
          partFrame = emptyFrame;
        }

        frame = context.compose(frame, partFrame);
      }

      if (frame !== null) {
        context.commit();
      }
    }, part, context);

    return frame;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${questionMark}`;

    return string;
  }

  static fromPart(part) {
    const type = OptionalPartPartType,
          continuation = false,
          optionalPartPart = new OptionalPartPart(type, continuation, part);

    return optionalPartPart;
  }
}
