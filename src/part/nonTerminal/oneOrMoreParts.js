"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { parsePartContinually } from "../../utilities/part";
import { OneOrMorePartsPartType } from "../../partTypes";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(type, contiunation, part) {
    super(type, contiunation);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      const continuing = context.isContinuing();

      if (continuing) {
        const count = 0,
              strict = true;

        parsed = parsePartContinually(this.part, count, strict, context);
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
        parsed = context.commit();
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
          contiunation = false,
          oneOrMorePartsPart = new OneOrMorePartsPart(type, contiunation, part);

    return oneOrMorePartsPart;
  }
}
