"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { push, unshift } from "../../../utilities/array";
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

    const part = this.getPart(),
          partsNodes = [];

    if (callback) {
      const parsed = callback();

      if (!parsed) {
        const partNodeOrNodes = part.parse(context, callback);

        if (partNodeOrNodes !== null) {
          unshift(partsNodes, partNodeOrNodes);
        }
      }
    } else {
      const partNodeOrNodes = part.parse(context);

      if (partNodeOrNodes !== null) {
        push(partsNodes, partNodeOrNodes);
      }
    }

    nodes = partsNodes; ///

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
