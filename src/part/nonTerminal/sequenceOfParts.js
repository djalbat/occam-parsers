"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { SequenceOfPartsPartType } from "../../partTypes";
import { sequenceOfPartsPartContext } from "../../utilities/context";
import { parseParts, parsePartsContinually } from "../../utilities/parts";

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, contiunation, parts) {
    super(type, contiunation);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(context) {
    let parsed;

    const sequenceOfPartsPart = this;  ///

    sequenceOfPartsPartContext((context) => {
      const contiuning = context.isContinuing();

      parsed = contiuning ?
                  parsePartsContinually(this.parts, context) :
                    parseParts(this.parts, context);

      if (parsed) {
        parsed = context.commit();
      }
    }, sequenceOfPartsPart, context);

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
          contiunation = false,
          sequenceOfPartsPart = new SequenceOfPartsPart(type, contiunation, parts);

    return sequenceOfPartsPart;
  }
}
