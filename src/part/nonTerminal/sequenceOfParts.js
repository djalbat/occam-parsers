"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalPart from "../../part/nonTerminal";

import { parseParts } from "../../utilities/parse";
import { popPartNodes } from "../../utilities/nodes";
import { SequenceOfPartsPartType } from "../../partTypes";

const { push } = arrayUtilities;

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, lookAhead, parts) {
    super(type, lookAhead);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const partNodes = [],
          savedIndex = state.getSavedIndex();

    if (callAhead === null) {
      callback = null;  ///

      parsed = parseParts(this.parts, partNodes, state, callback, callAhead);

      if (parsed) {
        push(nodes, partNodes);
      }
    } else {
      callback = () => {  ///
        let parsed;

        push(nodes, partNodes);

        parsed = callAhead();

        if (!parsed) {
          popPartNodes(nodes, partNodes);
        }

        return parsed;
      };

      parsed = parseParts(this.parts, partNodes, state, callback, callAhead);
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
          lookAhead = false,
          sequenceOfPartsPart = new SequenceOfPartsPart(type, lookAhead, parts);

    return sequenceOfPartsPart;
  }
}
