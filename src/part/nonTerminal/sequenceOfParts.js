"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { isValid } from "../../utilities/frame";
import { SequenceOfPartsPartType } from "../../partTypes";
import { sequenceOfPartsPartContext } from "../../utilities/context";
import { parsePartsContinually, parsePartsRepeatedly } from "../../utilities/parts";

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, continuation, parts) {
    super(type, continuation);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(frame, context) {
    const sequenceOfPartsPart = this;  ///

    context = sequenceOfPartsPartContext(sequenceOfPartsPart, context); ///

    const continuing = context.isContinuing();

    frame = continuing ?
              parsePartsContinually(this.parts, frame, context) :
                parsePartsRepeatedly(this.parts, frame, context);

    const frameValid = isValid(frame);

    if (frameValid) {
      context.commit();
    }

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
