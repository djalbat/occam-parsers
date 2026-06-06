"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { partContext } from "../../utilities/context";
import { SequenceOfPartsPartType } from "../../partTypes";

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, callAhead, parts) {
    super(type, callAhead);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(context) {
    let parsed;

    const part = this;  ///

    partContext((context) => {
      parsed = this.parts.every((part) => {
        parsed = part.parse(context);

        if (parsed) {
          return true;
        }
      })

      if (parsed) {
        context.commit();
      }
    }, part, context)

    return parsed;
  }

  asString() {
    const partsString = this.parts.reduce((partsString, part) => {
            const partString = part.asString();

            if (partsString === null) {
              partsString = partString;
            } else {
              partsString = `${partsString} ${partString}`;
            }

            return partsString;
          }, null),
          string = `( ${partsString} )`;

    return string;
  }

  static fromParts(parts) {
    const type = SequenceOfPartsPartType,
          callAhead = false,
          sequenceOfPartsPart = new SequenceOfPartsPart(type, callAhead, parts);

    return sequenceOfPartsPart;
  }
}
