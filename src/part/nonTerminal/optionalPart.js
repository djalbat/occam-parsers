"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { popPartNodes } from "../../utilities/nodes";
import { OptionalPartPartType } from "../../partTypes";

const { push } = arrayUtilities,
      { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, lookAhead, part) {
    super(type, lookAhead);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const partNodes = [],
          savedIndex = state.getSavedIndex();

    if (callAhead === null) {
      parsed = parseOptionalPart(this.part, partNodes, state, callback, callAhead);

      if (parsed) {
        push(nodes, partNodes);
      }
    } else {
      callback = () => {  ///
        let parsed;

        push(nodes, partNodes);

        parsed = callAhead();

        if (!parsed) {
          popPartNodes(nodes, partNodes);
        }

        return parsed;
      };

      parsed = parseOptionalPart(this.part, partNodes, state, callback, callAhead);
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${questionMark}`;

    return string;
  }

  static fromPart(part) {
    const type = OptionalPartPartType,
          lookAhead = false,
          optionalPartPart = new OptionalPartPart(type, lookAhead, part);

    return optionalPartPart;
  }
}

export function parseOptionalPart(part, partNodes, state, callback, callAhead) {
  let parsed;

  const nodes = partNodes;  ///

  if (callAhead === null) {
    parsed = part.parse(nodes, state, callback, callAhead);





    parsed = true;
  } else {
    parsed = callAhead();

    if (!parsed) {
      parsed = part.parse(nodes, state, callback, callAhead);










    }
  }

  return parsed;
}
