"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
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

  parse(context) {
    let frame;

    const part = this;  ///

    partContext((context) => {
      const continuing = context.isContinuing();

      if (continuing) {
        const count = 0,
              strict = true;

        frame = parsePartContinually(this.part, count, strict, context);
      } else {
        frame = this.part.parse(context);

        if (frame !== null) {
          while (true) {
            const partFrame = this.part.parse(context);

            if (partFrame === null) {
              break;
            }

            frame = frame.merge(partFrame); ///
          }
        }
      }

      if (frame !== null) {
        frame = context.commit(frame);
      }
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
