"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { partContext } from "../../utilities/context";
import { isValid, isInvalid } from "../../utilities/frame";
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

    context = partContext(part, context); ///

    const continuing = context.isContinuing();

    if (continuing) {
      const savedFrame = frame; ///

      frame = this.part.parse(frame, context);

      const frameInvalid = isInvalid(frame);

      if (frameInvalid) {
        frame = savedFrame; ///

        frame = context.continue(frame);
      }
    } else {
      let partFrame;

      partFrame = emptyFrame; ///

      partFrame = this.part.parse(partFrame, context);

      const partFrameInvalid = isInvalid(partFrame);

      if (partFrameInvalid) {
        partFrame = emptyFrame; ///
      }

      const partFrameValid = isValid(partFrame);

      frame = partFrameValid ?
                context.compose(frame, partFrame) :
                  null;
    }

    const frameValid = isValid(frame);

    if (frameValid) {
      context.commit();
    }

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