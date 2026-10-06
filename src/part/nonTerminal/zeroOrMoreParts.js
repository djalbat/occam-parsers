"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { ZeroOrMorePartsPartType } from "../../partTypes";
import { parsePartContinually, parsePartRepeatedly } from "../../utilities/part";

const { asterisk } = specialSymbols;

export default class ZeroOrMorePartsPart extends NonTerminalPart {
  constructor(type, continuation, part) {
    super(type, continuation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, state, forward, back) {
    const limit = Infinity,
          strict = false,
          continuing = false, ///
          parsePart = continuing ?
                        parsePartContinually :
                          parsePartRepeatedly;

    return parsePart(this.part, limit, strict, frame, state, forward, back);
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