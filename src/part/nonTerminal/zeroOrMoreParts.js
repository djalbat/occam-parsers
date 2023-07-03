"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { ZeroOrMorePartsPartType } from "../../partTypes";

const { push } = arrayUtilities,
      { asterisk } = specialSymbols;

export default class ZeroOrMorePartsPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${asterisk}`;

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
    const type = ZeroOrMorePartsPartType,
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(type, part);

    return zeroOrMorePartsPart;
  }
}

function parsePart(part, nodes, state, callback) {
  let parsed;

  if (callback === null) {
    parsed = part.parse(nodes, state, callback);

    if (parsed) {
      parsePart(part, nodes, state, callback);
    }

    parsed = true;
  } else {
    parsed = callback();

    if (!parsed) {
      parsed = part.parse(nodes, state, () => {
        const parsed = parsePart(part, nodes, state, callback);

        return parsed;
      });
    }
  }

  return parsed;
}
