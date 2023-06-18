"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalPart from "../../part/nonTerminal";

import { parseParts } from "../../utilities/lookAhead";
import { SequenceOfPartsPartType } from "../../partTypes";

import { partRuleName } from "../../ruleNames";

const { push } = arrayUtilities;

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
          sequenceOfPartsPart = new SequenceOfPartsPart(parts);

    return sequenceOfPartsPart;
  }
}
