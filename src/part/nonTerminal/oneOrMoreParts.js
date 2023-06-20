"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OneOrMorePartsPartType } from "../../partTypes";

const { push } = arrayUtilities,
      { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${plus}`;

    return string;
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

  static fromPart(part) {
    const type = OneOrMorePartsPartType,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, part);

    return oneOrMorePartsPart;
  }
}

function parsePart(part, nodes, state, callback, precedence, ruleName) {
  let parsed;

  if (callback !== null) {
    parsed = part.parse(nodes, state, (precedence, ruleName) => {
      let parsed = callback(precedence, ruleName);

      if (!parsed) {
        parsed = parsePart(part, nodes, state, callback, precedence, ruleName);
      }

      return parsed;
    }, precedence, ruleName);
  } else {
    parsed = part.parse(nodes, state, callback, precedence, ruleName);

    if (parsed) {
      parsePart(part, nodes, state, callback, precedence, ruleName)
    }
  }

  return parsed;
}
