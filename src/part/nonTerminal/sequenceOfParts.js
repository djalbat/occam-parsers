"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { parseParts } from "../../utilities/parse";
import { SequenceOfPartsPartType } from "../../partTypes";

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

    const savedIndex = state.getSavedIndex(),
          nodesLength = nodes.length;

    callback = (callAhead === null) ?
                  null :
                    () => {  ///
                      let parsed;

                      parsed = callAhead();

                      return parsed;
                    };

    parsed = parseParts(this.parts, nodes, state, callback, callAhead);

    if (!parsed) {
      const start = nodesLength;  ///

      nodes.splice(start);

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
