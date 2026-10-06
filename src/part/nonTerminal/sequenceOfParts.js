"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { SequenceOfPartsPartType } from "../../partTypes";
import { parsePartsContinually, parsePartsRepeatedly } from "../../utilities/parts";

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, continuation, parts) {
    super(type, continuation);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(frame, state, forward, back) {
    const continuing = false,
          parseParts = continuing ?
                        parsePartsContinually :
                           parsePartsRepeatedly;

    return parseParts(this.parts, emptyFrame, state, (definitionFrame, state, back) => {
      debugger

      frame = this.compose(frame, definitionFrame);

      return forward(frame, state, back);
    }, back);
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
