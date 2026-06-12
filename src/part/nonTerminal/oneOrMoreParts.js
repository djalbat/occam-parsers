"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { parsePart } from "../../utilities/part";
import { partContext } from "../../utilities/context";
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

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      const callingAhead = context.isCallingAhead();

      if (callingAhead) {
        const count = 0,
              strict = true;

        parsed = parsePart(this.part, count, strict, context);
      } else {
        parsed = this.part.parse(context);

        if (parsed) {
          while (parsed) {
            parsed = this.part.parse(context);
          }

          parsed = true;
        }
      }

      if (parsed) {
        context.commit();
      }
    }, part, context);

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
