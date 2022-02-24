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

  parse(nodes, state, callback) {
    let parsed;

    const savedIndex = state.getSavedIndex(),
          partsNodes = [];

    if (callback !== null) {
      const index = 0;

      const parseParts = (nodes, index) => {
        let parsed;

        const partsLength = this.parts.length;

        if (index === partsLength) {
          parsed = callback();
        } else {
          const part = this.parts[index];

          parsed = parsePart(part, nodes, index);
        }

        return parsed;
      }

      const parsePart = (part, nodes, index) => {
        let parsed;

        const partsNodes = [];

        parsed = part.parse(nodes, state, () => {
          index++;

          parseParts(partsNodes, index);
        });

        if (parsed) {
          push(nodes, partsNodes);
        }

        return parsed;
      }

      parsed = parseParts(partsNodes, index);
    } else {
      this.parts.every((part) => {
        const callback = null;

        parsed = part.parse(partsNodes, state, callback);

        if (parsed) {
          return true;
        }
      });
    }

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
