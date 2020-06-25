"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { allButFirstAndLast } from "../../../utilities/array";
import { GroupOfPartsPartType } from "../../partTypes";

export default class GroupOfPartsPart extends NonTerminalPart {
  constructor(parts) {
    const type = GroupOfPartsPartType; ///

    super(type);

    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(context) {
    let nodes = [];

    const savedIndex = context.getSavedIndex(),
          parsed = this.parts.every((part) => {
            const partNodeOrNodes = part.parse(context);

            if (partNodeOrNodes !== null) {
              nodes = nodes.concat(partNodeOrNodes);

              return true;
            }
          });

    if (!parsed) {
      context.backtrack(savedIndex);

      nodes = null;
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

  clone() { return super.clone(GroupOfPartsPart, this.parts); }

  static fromNodes(nodes) {
    const allButFirstAndLastNodes = allButFirstAndLast(nodes);

    nodes = allButFirstAndLastNodes;  ///

    const lookAhead = false,
          parts = nodes.map((node) => {
            const part = node.generatePart(lookAhead);

            return part;
          }),
          groupOfPartsPart = new GroupOfPartsPart(parts);

    return groupOfPartsPart;
  }
}
