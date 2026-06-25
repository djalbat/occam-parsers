"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { partContext } from "../../utilities/context";
import { parsePartContinually } from "../../utilities/part";
import { ZeroOrMorePartsPartType } from "../../partTypes";

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
      let partFrame;

      const continuing = context.isContinuing();

      if (continuing) {
        const count = 0,
              strict = false;

        partFrame = parsePartContinually(this.part, count, strict, frame, context);
      } else {
        partFrame = emptyFrame; ///

        while (true) {
          const savedFrame = partFrame; ///

          partFrame = this.part.parse(partFrame, context);

          if (partFrame === null) {
            partFrame = savedFrame; ///

            break;
          }
        }
      }

      frame = (partFrame !== null) ?
                context.compose(frame, partFrame) :
                  null;

      if (frame !== null) {
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
