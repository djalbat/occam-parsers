"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

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

    parsed = parseOptionalPart(this.part, partNodes, state, callback, callAhead);

    if (parsed) {
      push(nodes, partNodes);
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

  if (callAhead !== null) {
    parsed = callAhead();

    if (!parsed) {
      parsed = part.parse(nodes, state, callback, callAhead);










    }
  } else {
    parsed = part.parse(nodes, state, callback, callAhead);





    parsed = true;
  }

  return parsed;
}
