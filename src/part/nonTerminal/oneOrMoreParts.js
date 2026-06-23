"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { parsePartContinually } from "../../utilities/part";
import { OneOrMorePartsPartType } from "../../partTypes";
import {emptyFrame} from "../../frame";

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

    partContext((context) => {
      let partFrame;

      const continuing = context.isContinuing();

      if (continuing) {
        const count = 0,
              strict = true;

        partFrame = parsePartContinually(this.part, count, strict, frame, context);
      } else {
        partFrame = emptyFrame; ///

        partFrame = this.part.parse(partFrame, context);

        if (partFrame !== null) {
          while (true) {
            const savedFrame = partFrame; ///

            partFrame = this.part.parse(partFrame, context);

            if (partFrame === null) {
              partFrame = savedFrame; ///

              break;
            }
          }
        }
      }

      frame = context.commit(frame, partFrame);
    }, part, context);

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
