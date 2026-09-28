"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { parsePartContinually } from "../../utilities/part";
import { ZeroOrMorePartsPartType } from "../../partTypes";
import { emptyFrame, nullifiedFrame } from "../../frame";

const { asterisk } = specialSymbols;

export default class ZeroOrMorePartsPart extends NonTerminalPart {
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
        const count = 0,
              strict = false;

        frame = parsePartContinually(this.part, count, strict, frame, context);
      } else {
        let partFrame;

        partFrame = emptyFrame; ///

        while (true) {
          const savedFrame = partFrame; ///

          partFrame = this.part.parse(partFrame, context);

          const partFrameInvalid = partFrame.isInvalid();

          if (partFrameInvalid) {
            partFrame = savedFrame; ///

            break;
          }
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
          string = `${partString}${asterisk}`;

    return string;
  }

  static fromPart(part) {
    const type = ZeroOrMorePartsPartType,
          continuation = false,
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(type, continuation, part);

    return zeroOrMorePartsPart;
  }
}
