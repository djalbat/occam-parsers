"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { ZeroOrMorePartsPartType } from "../../partTypes";


const { asterisk } = specialSymbols;

export default class ZeroOrMorePartsPart extends NonTerminalPart {
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

    parsed = parseZeroOrMorePartsPart(this.part, nodes, state, callback, callAhead);

    if (!parsed) {
      const start = nodesLength;  ///

      nodes.splice(start);

      state.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${asterisk}`;

    return string;
  }

  static fromPart(part) {
    const type = ZeroOrMorePartsPartType,
          lookAhead = false,
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(type, lookAhead, part);

    return zeroOrMorePartsPart;
  }
}

export function parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead) {
  let parsed;

  if (callAhead === null) {
    parsed = part.parse(nodes, state, callback, callAhead);

    if (parsed) {
      parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
    }

    parsed = true;
  } else {
    parsed = callAhead();

    if (!parsed) {
      parsed = part.parse(nodes, state, callback, () => {
        let parsed;

        parsed = parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);

        return parsed;
      });
    }
  }

  return parsed;
}
