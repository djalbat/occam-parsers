"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OptionalPartPartType } from "../../partTypes";


const { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, callAhead, part) {
    super(type, callAhead);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const savedIndex = state.getSavedIndex(),
          nodesLength = nodes.length;

    parsed = parseOptionalPart(this.part, nodes, state, callback, callAhead);

    if (!parsed) {
      const start = nodesLength;  ///

      nodes.splice(start);

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
          callAhead = false,
          optionalPartPart = new OptionalPartPart(type, callAhead, part);

    return optionalPartPart;
  }
}

export function parseOptionalPart(part, nodes, state, callback, callAhead) {
  let parsed;

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
