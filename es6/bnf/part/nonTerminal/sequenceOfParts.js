"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { allButFirstAndLast } from "../../../utilities/array";
import { SequenceOfPartsPartType } from "../../partTypes";
import {isPartRuleNamePartWithLookAhead} from "../../../utilities/part";

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
    const savedIndex = context.getSavedIndex();

    if (callback) {
      let index = 0.

      const parts = this.parts,
            partsLength = parts.length;

      nodes = parseParts(nodes);

      function parseParts(nodes) {
        if (index === partsLength) {
          const parsed = callback();

          if (!parsed) {
            nodes = null;
          }
        } else {
          const part = parts[index++];

          nodes = parsePart(part, nodes);
        }

        return nodes;
      }

      function parsePart(part, nodes) {
        let partNodes = null;

        nodes = part.parse(nodes, context, () => {
          partNodes = [];

          partNodes = parseParts(partNodes);

          const parsed = (partNodes !== null);

          return parsed;
        });

        nodes = (partNodes !== null) ?
                  [ ...nodes, ...partNodes ] :
                    null;

        return nodes;
      }
    } else {
      let partNodes = nodes;  ///

      this.parts.every((part) => {
        partNodes = part.parse(partNodes, context, callback);

        if (partNodes !== null) {
          return true;
        }
      });

      nodes = (partNodes !== null) ?
                partNodes : ///
                  null;
    }

    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
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
