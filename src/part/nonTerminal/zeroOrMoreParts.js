"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import NonTerminalPart from "../../part/nonTerminal";

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

  parse(context) {
    let frame;

    const part = this;  ///

    partContext((context) => {
      const continuing = context.isContinuing();

      if (continuing) {
        const count = 0,
              strict = false;

        frame = parsePartContinually(this.part, count, strict, context);
      } else {
        frame = Frame.fromNothing();

        while (true) {
          const partFrame = this.part.parse(context);

          if (partFrame === null) {
            break;
          }

          frame = frame.merge(partFrame); ///
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
