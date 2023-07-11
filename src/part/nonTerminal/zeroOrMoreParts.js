"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { ZeroOrMorePartsPartType } from "../../partTypes";

const { push } = arrayUtilities,
      { asterisk } = specialSymbols;

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

    const partNodes = [],
          savedIndex = state.getSavedIndex();

    parsed = parseZeroOrMorePartsPart(this.part, partNodes, state, callback, callAhead);

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

export function parseZeroOrMorePartsPart(part, partNodes, state, callback, callAhead) {
  let parsed;

  const nodes = partNodes;  ///

  if (callAhead !== null) {
    parsed = callAhead();

    if (!parsed) {
      parsed = part.parse(nodes, state, callback, () => {
        let parsed;




          parsed = parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);


        return parsed;
      });
    }
  } else {
    parsed = part.parse(nodes, state, callback, callAhead);

    if (parsed) {
      parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
    }

    parsed = true;
  }

  return parsed;
}
