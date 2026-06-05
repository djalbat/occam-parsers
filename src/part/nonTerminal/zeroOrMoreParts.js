"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { guard } from "../../utilities/state";
import { ZeroOrMorePartsPartType } from "../../partTypes";

const { asterisk } = specialSymbols;

export default class ZeroOrMorePartsPart extends NonTerminalPart {
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

    parsed = parseZeroOrMorePartsPart(this.part, count, nodes, state, callback, callAhead);

    return parsed;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${asterisk}`;

    return string;
  }

  static fromPart(part) {
    const type = ZeroOrMorePartsPartType,
          callAhead = false,
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(type, callAhead, part);

    return zeroOrMorePartsPart;
  }
}

function parseZeroOrMorePartsPart(part, count, nodes, state, callback, callAhead) {
  let parsed;

  if (callAhead === null) {
    parsed = guard((nodes, state, callback, callAhead) => {
      let parsed;

      parsed = part.parse(nodes, state, callback, callAhead);

      return parsed;
    }, nodes, state, callback, callAhead);

    if (parsed) {
      count++;

      parseZeroOrMorePartsPart(part, count, nodes, state, callback, callAhead);
    }

    parsed = true;
  } else {
    parsed = (count === 0) ?
                callAhead() :
                 false;

    if (!parsed) {
      parsed = guard((nodes, state, callback, callAhead) => {
        let parsed;

        parsed = part.parse(nodes, state, callback, () => {
          let parsed;

          parsed = callAhead();

          if (!parsed) {
            count++;

            parsed = parseZeroOrMorePartsPart(part, count, nodes, state, callback, callAhead);
          }

          return parsed;
        });

        return parsed;
      }, nodes, state, callback, callAhead);
    }
  }

  return parsed;
}
