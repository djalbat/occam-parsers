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

  parse(nodes, context, callback) {
    const part = this.getPart();

    if (callback) {
      const parsed = callback();

      if (!parsed) {
        let partNodes = [];

        partNodes = part.parse(partNodes, context, callback);

        const parsed = (partNodes !== null);

        if (parsed) {
          nodes = [ ...partNodes, ...nodes ];
        }
      }
    } else {
      const partNodes = part.parse(nodes, context);

      if (partNodes !== null) {
        nodes = partNodes;  ///
      }
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
