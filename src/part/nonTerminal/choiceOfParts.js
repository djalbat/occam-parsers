"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { ChoiceOfPartsPartType } from "../../partTypes";

import { partRuleName } from "../../ruleNames";

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

  static fromBNFNodes(bnfNodes) {
    const partBNFNodes = bnfNodes.filter((bnfNode) => {
            const bnfNodeNonTerminalNode = bnfNode.isNonTerminalNode();

            if (bnfNodeNonTerminalNode) {
              const nonTerminalNode = bnfNode,  ///
                    ruleName = nonTerminalNode.getRuleName(),
                    ruleNamePartRuleName = (ruleName === partRuleName);

              if (ruleNamePartRuleName) {
                return true;
              }
            }
          }),
          lookAhead = false,
          parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart(lookAhead);

            return part;
          }),
          choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    return choiceOfPartsPart;
  }
}
