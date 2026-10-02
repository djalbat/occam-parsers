"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { partContext } from "../../utilities/context";
import { isValid, isInvalid } from "../../utilities/frame";
import { parsePartContinually } from "../../utilities/part";
import { OneOrMorePartsPartType } from "../../partTypes";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, continuation, part) {
    super(type, continuation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, context) {
    const part = this;  ///

    context = partContext(part, context);  ///

    const continuing = context.isContinuing();

    if (continuing) {
      const count = 0,
            strict = true;

      frame = parsePartContinually(this.part, count, strict, frame, context);
    } else {
      let partFrame;

      partFrame = emptyFrame; ///

      partFrame = this.part.parse(partFrame, context);

      let partFrameValid;

      partFrameValid = isValid(partFrame);

      if (partFrameValid) {
        while (true) {
          const savedFrame = partFrame; ///

          partFrame = this.part.parse(partFrame, context);

          const partframeInvalid = isInvalid(partFrame);

          if (partframeInvalid) {
            partFrame = savedFrame; ///

            break;
          }
        }
      }

      partFrameValid = isValid(partFrame);

      frame = (partFrameValid) ?
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
          string = `${partString}${plus}`;

    return string;
  }

  static fromPart(part) {
    const type = OneOrMorePartsPartType,
          continuation = false,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, continuation, part);

    return oneOrMorePartsPart;
  }
}