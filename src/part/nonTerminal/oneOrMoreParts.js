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

  parse(nodes, state, callback, precedence) {
    let parsed;

    const part = this.getPart(),
          partNodes = [],
          savedIndex = state.getSavedIndex();

    parsed = parsePart(part, partNodes, state, callback, precedence);

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

function parsePart(part, nodes, state, callback, precedence) {
  let parsed;

  if (callback !== null) {
    parsed = part.parse(nodes, state, (precedence) => {
      let parsed = callback(precedence);

      if (!parsed) {
        parsed = parsePart(part, nodes, state, callback, precedence);
      }

      return parsed;
    }, precedence);
  } else {
    parsed = part.parse(nodes, state, callback, precedence);

    if (parsed) {
      parsePart(part, nodes, state, callback, precedence)
    }
  }

  return parsed;
}
