"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { push } from "../../../utilities/array";
import { parseParts } from "../../../utilities/lookAhead";
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
          partsNodes = [],
          index = 0;

    parsed = parseParts(this.parts, partsNodes, index, state, callback);

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
