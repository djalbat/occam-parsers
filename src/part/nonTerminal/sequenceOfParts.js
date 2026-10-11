"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { emptyFrame } from "../../frame";
import { every as linearEvery  } from "../../utilities/linear";
import { every as branchingEvery  } from "../../utilities/branching";
import { SequenceOfPartsPartType } from "../../partTypes";

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, parts) {
    super(type);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  isConsuming(ruleMap, visitedRules = []) {
    const consuming = this.parts.some((part) => {
      const consuming = part.isConsuming(ruleMap, visitedRules);

      if (consuming) {
        return true;
      }
    });

    return consuming;
  }

  parse(frame, state, forward, back) {
    const savedFrame = frame, ///
          branching = state.isBranching(),
          every = branching ?
                    branchingEvery :
                      linearEvery;

    return every(this.parts, (part, frame, state, forward, back) => {
      return part.parse(frame, state, forward, back);
    }, emptyFrame, state, (frame, state, back) => {
      frame = this.compose(savedFrame, frame);

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
          sequenceOfPartsPart = new SequenceOfPartsPart(type, parts);

    return sequenceOfPartsPart;
  }
}
