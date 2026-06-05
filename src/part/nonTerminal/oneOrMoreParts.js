"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { guard } from "../../utilities/state";
import { OneOrMorePartsPartType } from "../../partTypes";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, callAhead, part) {
    super(type, callAhead);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const count = 0;

    parsed = parseOneOrMorePartsPart(this.part, count, nodes, state, callback, callAhead);

    return parsed;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${plus}`;

    return string;
  }

  static fromPart(part) {
    const type = OneOrMorePartsPartType,
          callAhead = false,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, callAhead, part);

    return oneOrMorePartsPart;
  }
}

function parseOneOrMorePartsPart(part, count, nodes, state, callback, callAhead) {
  let parsed;

  if (callAhead === null) {
    parsed = guard((nodes, state, callback, callAhead) => {
      let parsed;

      parsed = part.parse(nodes, state, callback, callAhead);

      return parsed;
    }, nodes, state, callback, callAhead);

    if (parsed) {
      count++;

      parseOneOrMorePartsPart(part, count, nodes, state, callback, callAhead);
    }

    if (!parsed) {
      if (count > 0) {
        parsed = true;
      }
    }
  } else {
    parsed = guard((nodes, state, callback, callAhead) => {
      let parsed;

      parsed = part.parse(nodes, state, callback, () => {
        let parsed;

        parsed = callAhead();

        if (!parsed) {
          count++;

          parsed = parseOneOrMorePartsPart(part, count, nodes, state, callback, callAhead);
        }

        return parsed;
      });

      return parsed;
    }, nodes, state, callback, callAhead);
  }

  return parsed;
}
