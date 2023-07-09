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

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const partNodes = [],
          savedIndex = state.getSavedIndex();

    const { ruleName } = nodes;

    Object.assign(partNodes, {
      ruleName
    });

    parsed = parsePart(this.part, partNodes, state, callback, callAhead);

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
          string = `${partString}${plus}`;

    return string;
  }

  static fromPart(part) {
    const type = OneOrMorePartsPartType,
          lookAhead = false,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, lookAhead, part);

    return oneOrMorePartsPart;
  }
}

function parsePart(part, partNodes, state, callback, callAhead) {
  let parsed;










    const nodes = partNodes;  ///

    parsed = part.parse(nodes, state, () => {
      let parsed;

      parsed = callback();

      if (parsed) {
        if (callAhead !== null) {
          parsed = callAhead();
        }
      }

      if (!parsed) {
        parsed = parsePart(part, nodes, state, callback, callAhead);
      }

      return parsed;
    }, callAhead);






  return parsed;
}
