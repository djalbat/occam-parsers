"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { ChoiceOfPartsPartType } from "../../partTypes";
import { even, allButFirstAndLast } from "../../utilities/array";

export default class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(parts) {
    const type = ChoiceOfPartsPartType; ///

    super(type);
    
    this.parts = parts;
  }
  
  getParts() {
    return this.parts;
  }

  parse(nodes, state, callback) {
    let parsed;

    this.parts.some((part) => {
      parsed = part.parse(nodes, state, callback);

      if (parsed) {
        return true;
      }
    });

    return parsed;
  }

  asString() {
    const partsString = this.parts.reduce((partsString, part) => {
            const partString = part.asString();
    
            if (partsString === null) {
              partsString = partString;
            } else {
              partsString = `${partsString} | ${partString}`;
            }
    
            return partsString;
          }, null),
          string = `( ${partsString} )`;
    
    return string;
  }

  clone() { return super.clone(ChoiceOfPartsPart, this.parts); }

  static fromNodes(nodes) {
    const allButFirstAndLastNodes = allButFirstAndLast(nodes);

    nodes = allButFirstAndLastNodes;  ///
    
    const evenNodes = even(nodes);

    nodes = evenNodes;  ///

    const lookAhead = false,
          parts = nodes.map((node) => {
            const part = node.generatePart(lookAhead);

            return part;
          }),
          choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    return choiceOfPartsPart;
  }
}
