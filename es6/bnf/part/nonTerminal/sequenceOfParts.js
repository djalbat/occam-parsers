"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { push } from "../../../utilities/array";
import { allButFirstAndLast } from "../../../utilities/array";
import { SequenceOfPartsPartType } from "../../partTypes";

export default class SequenceOfPartsPart extends NonTerminalPart {
  constructor(parts) {
    const type = SequenceOfPartsPartType; ///

    super(type);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(nodes, context, callback) {
    let parsed;

    const savedIndex = context.getSavedIndex();

    const partsNodes = [];

    if (callback) {
      let index = 0.

      const parts = this.parts,
            partsLength = parts.length;

      parsed = parseParts();

      function parseParts() {
        let parsed;

        if (index === partsLength) {
          parsed = callback();
        } else {
          const part = parts[index++];

          parsed = parsePart(part);
        }

        return parsed;
      }

      function parsePart(part) {
        const parsed = part.parse(partsNodes, context, () => parseParts());

        return parsed;
      }
    } else {
      this.parts.every((part) => {
        parsed = part.parse(partsNodes, context, callback);

        if (parsed) {
          return true;
        }
      });

    }

    if (parsed) {
      push(nodes, partsNodes);
    }

    if (!parsed) {
      context.backtrack(savedIndex);
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

  clone() { return super.clone(SequenceOfPartsPart, this.parts); }

  static fromNodes(nodes) {
    const allButFirstAndLastNodes = allButFirstAndLast(nodes);

    nodes = allButFirstAndLastNodes;  ///

    const lookAhead = false,
          parts = nodes.map((node) => {
            const part = node.generatePart(lookAhead);

            return part;
          }),
          sequenceOfPartsPart = new SequenceOfPartsPart(parts);

    return sequenceOfPartsPart;
  }
}
