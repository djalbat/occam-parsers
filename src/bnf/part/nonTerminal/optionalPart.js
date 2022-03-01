"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OptionalPartPartType } from "../../partTypes";

const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(part) {
    const type = OptionalPartPartType; ///

    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(nodes, state, callback) {
    let parsed;

    const part = this.getPart();

    parsePart(part, nodes, state, callback);

    parsed = true;

    return parsed;
  }

  asString() {
    const operatorString = questionMark,  ///
          partString = this.part.asString(),
          string = `${partString}${operatorString}`;

    return string;
  }

  clone() { return super.clone(OptionalPartPart, this.part); }
}

function parsePart(part, nodes, state, callback) {
  if (callback !== null) {
    const parsed = callback();

    if (!parsed) {
      part.parse(nodes, state, callback);
    }
  } else {
    part.parse(nodes, state, callback);
  }
}
