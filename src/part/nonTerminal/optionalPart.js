"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OptionalPartPartType } from "../../partTypes";

const { push } = arrayUtilities,
      { questionMark } = specialSymbols;

export default class OptionalPartPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(nodes, state, callback, precedence, ruleName) {
    let parsed;

    const part = this.getPart(),
          partNodes = [],
          savedIndex = state.getSavedIndex();

    parsed = parsePart(part, partNodes, state, callback, precedence, ruleName);

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
          optionalPartPart = new OptionalPartPart(type, part);

    return optionalPartPart;
  }
}

function parsePart(part, nodes, state, callback, precedence, ruleName) {
  let parsed;

  if (callback !== null) {
    parsed = callback(precedence, ruleName);

    if (!parsed) {
      parsed = part.parse(nodes, state, callback, precedence, ruleName);
    }
  } else {
    part.parse(nodes, state, callback, precedence, ruleName);

    parsed = true;
  }

  return parsed;
}
