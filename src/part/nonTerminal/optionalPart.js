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
      let partFrame;

      const continuing = context.isContinuing();

      if (continuing) {
        partFrame = this.part.parse(frame, context);

        if (partFrame === null) {
          partFrame = context.continue(frame);
        }
      } else {
        partFrame = this.part.parse(emptyFrame, context);

        if (partFrame === null) {
          partFrame = emptyFrame; ///
        }
      }

      frame = context.commit(frame, partFrame);
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
