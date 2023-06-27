"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalPart from "../../part/nonTerminal";

import { parseParts } from "../../utilities/lookAhead";
import { SequenceOfPartsPartType } from "../../partTypes";

const { push } = arrayUtilities;

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, parts) {
    super(type);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(nodes, state, callback) {
    let parsed;

    const savedIndex = state.getSavedIndex(),
          partsNodes = [];

    parsed = parseParts(this.parts, partsNodes, state, callback);

    if (parsed) {
      push(nodes, partsNodes);
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

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
          sequenceOfPartsPart = new SequenceOfPartsPart(type, parts);

    return sequenceOfPartsPart;
  }
}
