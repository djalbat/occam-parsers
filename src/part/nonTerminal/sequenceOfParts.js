"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { every as linearEvery  } from "../../utilities/linear";
import { SequenceOfPartsPartType } from "../../partTypes";

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, branching, parts) {
    super(type, branching);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(frame, state, forward, back) {
    return linearEvery(this.parts, (part, frame, state, forward, back) => {
      return part.parse(frame, state, forward, back);
    }, emptyFrame, state, (partsFrame, state, back) => {
      frame = this.compose(frame, partsFrame);

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
          branching = false,
          sequenceOfPartsPart = new SequenceOfPartsPart(type, branching, parts);

    return sequenceOfPartsPart;
  }
}
