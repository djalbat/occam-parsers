"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { push } from "../../utilities/array";
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

    const part = this.getPart(),
          partNodes = [],
          savedIndex = state.getSavedIndex();

    parsed = parsePart(part, partNodes, state, callback);

    if (parsed) {
      push(nodes, partNodes);
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const operatorString = questionMark,  ///
          partString = this.part.asString(),
          string = `${partString}${operatorString}`;

    return string;
  }

  clone() {
    const part = this.part.clone(),
          optionalPartPart = new OptionalPartPart(part);

    return optionalPartPart;
  }
}

function parsePart(part, nodes, state, callback) {
  let parsed;

  if (callback !== null) {
    parsed = callback();

    if (!parsed) {
      parsed = part.parse(nodes, state, callback);
    }
  } else {
    part.parse(nodes, state, callback);

    parsed = true;
  }

  return parsed;
}
