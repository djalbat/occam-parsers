"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OptionalPartPartType } from "../../partTypes";
import { repeatedly as linearRepeatedly } from "../../utilities/linear";

const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, branching, part) {
    super(type, branching);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, state, forward, back) {
    const limit = 1,
          strict = false;

    return linearRepeatedly(this.part, limit, strict, (part, frame, state, forward, back) => {
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
          branching = false,
          optionalPartPart = new OptionalPartPart(type, branching, part);

    return optionalPartPart;
  }
}