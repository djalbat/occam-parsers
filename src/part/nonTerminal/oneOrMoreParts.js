"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OneOrMorePartsPartType } from "../../partTypes";
import { repeatedly as linearRepeatedly } from "../../utilities/linear";
import { repeatedly as branchingRepeatedly } from "../../utilities/branching";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, state, forward, back) {
    const limit = Infinity,
          strict = true,
          branching = state.isBranching(),
          repeatedly = branching ?
                         branchingRepeatedly :
                           linearRepeatedly;

    return repeatedly(this.part, limit, strict, (part, frame, state, forward, back) => {
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
          oneOrMorePartsPart = new OneOrMorePartsPart(type, part);

    return oneOrMorePartsPart;
  }
}