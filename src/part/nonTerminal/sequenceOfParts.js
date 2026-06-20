"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { SequenceOfPartsPartType } from "../../partTypes";
import { sequenceOfPartsPartContext } from "../../utilities/context";
import { parseParts, parsePartsContinually } from "../../utilities/parts";

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, continuation, parts) {
    super(type, continuation);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(context) {
    let frame;

    const sequenceOfPartsPart = this;  ///

    sequenceOfPartsPartContext((context) => {
      const continuing = context.isContinuing();

      if (continuing) {
        frame = parsePartsContinually(this.parts, context);
      } else {
        frame = parseParts(this.parts, context);

        if (frame !== null) {
          frame = context.commit(frame);
        }
      }
    }, sequenceOfPartsPart, context);

    return frame;
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
          continuation = false,
          sequenceOfPartsPart = new SequenceOfPartsPart(type, continuation, parts);

    return sequenceOfPartsPart;
  }
}
