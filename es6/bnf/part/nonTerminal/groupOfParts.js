"use strict";

import arrayUtilities from "../../../utilities/array";
import NonTerminalPart from "../../part/nonTerminal";

import { GroupOfPartsPartType } from "../../partTypes";

const { allButFirstAndLast } = arrayUtilities;

class GroupOfPartsPart extends NonTerminalPart {
  constructor(parts) {
    const type = GroupOfPartsPartType; ///

    super(type);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(configuration) {
    let nodes = [];

    const savedIndex = configuration.getSavedIndex(),
          parsed = this.parts.every(function(part) {
            const partNodeOrNodes = part.parse(configuration);

            if (partNodeOrNodes !== null) {
              nodes = nodes.concat(partNodeOrNodes);

              return true;
            }
          });

    if (!parsed) {
      configuration.backtrack(savedIndex);

      nodes = null;
    }

    return nodes;
  }

  asString() {
    const partsString = this.parts.reduce(function(partsString, part) {
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

  clone() { return super.clone(GroupOfPartsPart, this.parts); }

  static fromNodes(nodes) {
    const allButFirstAndLastNodes = allButFirstAndLast(nodes);

    nodes = allButFirstAndLastNodes;  ///

    const lookAhead = false,
          parts = nodes.map(function(node) {
            const part = node.generatePart(lookAhead);

            return part;
          }),
          groupOfPartsPart = new GroupOfPartsPart(parts);

    return groupOfPartsPart;
  }
}

module.exports = GroupOfPartsPart;
