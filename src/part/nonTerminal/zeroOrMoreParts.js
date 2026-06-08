"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
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

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      const callAhead = context.isCallAhead();

      if (callAhead) {
        debugger
      } else {
        parsed = true

        while (parsed) {
          parsed = this.part.parse(context);
        }

        parsed = true;
      }

      if (parsed) {
        context.commit();
      }
    }, part, context);

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
