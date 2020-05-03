"use strict";

import arrayUtilities from "../../../utilities/array";
import NonTerminalPart from "../../part/nonTerminal";

import { ChoiceOfPartsPartType } from "../../partTypes";

const { even, allButFirstAndLast } = arrayUtilities;

class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(parts) {
    const type = ChoiceOfPartsPartType; ///

    super(type);
    
    this.parts = parts;
  }
  
  getParts() {
    return this.parts;
  }

  parse(configuration) {
    let nodes = null;
    
    this.parts.some(function(part) {
      const partNodeOrNodes = part.parse(configuration);

      if (partNodeOrNodes !== null) {
        nodes = partNodeOrNodes;  ///

        return true;
      }
    });
    
    return nodes;
  }

  asString() {
    const partsString = this.parts.reduce(function(partsString, part) {
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
          parts = nodes.map(function(node) {
            const part = node.generatePart(lookAhead);

            return part;
          }),
          choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    return choiceOfPartsPart;
  }
}

module.exports = ChoiceOfPartsPart;
