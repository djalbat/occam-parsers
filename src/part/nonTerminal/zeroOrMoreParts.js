"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { ZeroOrMorePartsPartType } from "../../partTypes";
import { repeatedly as linearRepeatedly } from "../../utilities/linear";

const { asterisk } = specialSymbols;

export default class ZeroOrMorePartsPart extends NonTerminalPart {
  constructor(type, branching, part) {
    super(type, branching);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, state, forward, back) {
    const limit = Infinity,
          strict = false;

    return linearRepeatedly(this.part, limit, strict, (part, frame, state, forward, back) => {
      return part.parse(frame, state, forward, back);
    }, frame, state, forward, back);
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${asterisk}`;

    return string;
  }

  static fromPart(part) {
    const type = ZeroOrMorePartsPartType,
          branching = false,
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(type, branching, part);

    return zeroOrMorePartsPart;
  }
}