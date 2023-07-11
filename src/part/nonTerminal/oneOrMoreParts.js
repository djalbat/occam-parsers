"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OneOrMorePartsPartType } from "../../partTypes";
import { parseZeroOrMorePartsPart } from "../../part/nonTerminal/zeroOrMoreParts";

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

    let { ruleName } = nodes;

    ruleName = `${ruleName} (partNodes)`;

    Object.assign(partNodes, {
      ruleName
    });

    parsed = parseOneOrMorePartsPart(this.part, partNodes, state, callback, callAhead);

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

export function parseOneOrMorePartsPart(part, partNodes, state, callback, callAhead) {
  let parsed;

  const nodes = partNodes;  ///

  if (callAhead !== null) {



      parsed = part.parse(nodes, state, callback, () => {
        let parsed;

        parsed = callAhead();

        if (!parsed) {
          parsed = parseOneOrMorePartsPart(part, nodes, state, callback, callAhead);
        }

        return parsed;
      });

  } else {
    parsed = part.parse(nodes, state, callback, callAhead);

    if (parsed) {
      parseOneOrMorePartsPart(part, nodes, state, callback, callAhead);
    }


  }

  return parsed;
}
