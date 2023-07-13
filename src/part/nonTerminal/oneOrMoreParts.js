"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { OneOrMorePartsPartType } from "../../partTypes";
import { parseZeroOrMorePartsPart } from "./zeroOrMoreParts";

const { plus } = specialSymbols;

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

    const savedIndex = state.getSavedIndex(),
          nodesLength = nodes.length;

    parsed = parseOneOrMorePartsPart(this.part, nodes, state, callback, callAhead);

    if (!parsed) {
      const start = nodesLength;  ///

      nodes.splice(start);

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

export function parseOneOrMorePartsPart(part, nodes, state, callback, callAhead) {
  let parsed;

  if (callAhead === null) {
    parsed = part.parse(nodes, state, callback, callAhead);

    if (parsed) {
      parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
    }


  } else {



      parsed = part.parse(nodes, state, callback, () => {
        let parsed;

        parsed = callAhead();

        if (!parsed) {
          parsed = parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
        }

        return parsed;
      });

  }

  return parsed;
}
