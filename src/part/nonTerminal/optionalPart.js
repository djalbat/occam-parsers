"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OptionalPartPartType } from "../../partTypes";
import { repeatedly as linearRepeatedly } from "../../utilities/linear";
import { repeatedly as branchingRepeatedly } from "../../utilities/branching";

const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, state, forward, back) {
    const limit = 1,
          strict = false,
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
          string = `${partString}${questionMark}`;

    return string;
  }

  static fromPart(part) {
    const type = OptionalPartPartType,
          optionalPartPart = new OptionalPartPart(type, part);

    return optionalPartPart;
  }
}