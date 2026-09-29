"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { OptionalPartPartType } from "../../partTypes";
import { emptyFrame, nullifiedFrame } from "../../frame";

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

        const frameAborted = frame.isAborted(),
              frameNullified = frame.isNullified();

        if (false) {
          ///
        } else if (frameAborted) {
          frame = nullifiedFrame;
        } else if (frameNullified) {
          frame = savedFrame; ///

          frame = context.continue(frame);
        }
      } else {
        let partFrame;

        partFrame = emptyFrame; ///

        partFrame = this.part.parse(partFrame, context);

        const partFrameInvalid = partFrame.isInvalid();

        if (partFrameInvalid) {
          partFrame = emptyFrame; ///
        }

        const partFrameValid = partFrame.isValid();

        frame = partFrameValid ?
                  context.compose(frame, partFrame) :
                    nullifiedFrame;
      }

      const frameValid = frame.isValid();

      if (frameValid) {
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