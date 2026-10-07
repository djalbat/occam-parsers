"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OneOrMorePartsPartType } from "../../partTypes";
import { repeatedly as linearRepeatedly } from "../../utilities/linear";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, branching, part) {
    super(type, branching);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, state, forward, back) {
    const limit = Infinity,
          strict = true;

    return linearRepeatedly(this.part, limit, strict, (part, frame, state, forward, back) => {
      return part.parse(frame, state, forward, back);
    }, frame, state, forward, back);
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${plus}`;

    return string;
  }

  static fromPart(part) {
    const type = OneOrMorePartsPartType,
          branching = false,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, branching, part);

    return oneOrMorePartsPart;
  }
}