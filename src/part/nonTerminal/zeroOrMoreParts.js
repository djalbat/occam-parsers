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

    const { ruleName } = nodes;

    Object.assign(partNodes, {
      ruleName
    });

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

  parsed = callback();

  if (parsed) {
    if (callAhead !== null) {
      parsed = callAhead();
    }
  }

  if (!parsed) {
    const nodes = partNodes;  ///

    parsed = part.parse(nodes, state, () => {
      let parsed;

      parsed = parseZeroOrMorePartsPart(part, partNodes, state, callback, callAhead);

      return parsed;
    }, callAhead);
  }

  return parsed;
}
