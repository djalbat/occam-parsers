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

  parse(context, callback) {
    let nodes;

    const part = this.getPart();

    if (callback) {
      const parsed = callback();

      if (parsed) {
        nodes = [];
      } else {
        const partNodeOrNodes = part.parse(context, callback);

        nodes = (partNodeOrNodes !== null) ?
                   partNodeOrNodes :
                     null;
      }
    } else {
      const partNodeOrNodes = part.parse(context);

      nodes = (partNodeOrNodes !== null) ?
                 partNodeOrNodes :
                   [];
    }

    return nodes;
  }

  asString() {
    const operatorString = questionMark,  ///
          partString = this.part.asString(),
          string = `${partString}${operatorString}`;

    return string;
  }

  clone() { return super.clone(OptionalPartPart, this.part); }
}
