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

  parse(configuration) {
    let nodes = [];
    
    const part = this.getPart(),
          partNodeOrNodes = part.parse(configuration),
          parsed = (partNodeOrNodes !== null);

    if (parsed) {
      nodes = partNodeOrNodes;
    }

    return nodes;
  }

  clone() { return super.clone(OptionalPartPart, this.part); }

  asString() {
    const operatorString = questionMark,  ///
          partString = this.part.asString(),
          string = `${partString}${operatorString}`;

    return string;
  }
}
