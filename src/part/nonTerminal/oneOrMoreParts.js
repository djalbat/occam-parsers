"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OneOrMorePartsPartType } from "../../partTypes";

const { push } = arrayUtilities,
      { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, lookAhead, part) {
    super(type, lookAhead);

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

  static fromPart(part) {
    const type = OneOrMorePartsPartType,
          lookAhead = false,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, lookAhead, part);

    return oneOrMorePartsPart;
  }
}

function parsePart(part, nodes, state, callback) {
  let parsed;

  if (callback === null) {
    parsed = part.parse(nodes, state, callback);

    if (parsed) {
      parsePart(part, nodes, state, callback)
    }
  } else {
    parsed = part.parse(nodes, state, () => {
      let parsed = callback();

      if (!parsed) {
        parsed = parsePart(part, nodes, state, callback);
      }

      return parsed;
    });
  }

  return parsed;
}
