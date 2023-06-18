"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import SequenceOfPartsPart from "../../part/nonTerminal/sequenceOfParts";

import { partRuleName } from "../../ruleNames";

export default class SequenceOfPartsBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          partBNFNodes = childNodes.filter((childNode) => {
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();

            if (childNodeNonTerminalNode) {
              const nonTerminalNode = childNode,  ///
                ruleName = nonTerminalNode.getRuleName(),
                ruleNamePartRuleName = (ruleName === partRuleName);

              if (ruleNamePartRuleName) {
                return true;
              }
            }
          });

    lookAhead = false;  ///

    const parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart(lookAhead);

            return part;
          }),
          sequenceOfPartsPart = new SequenceOfPartsPart(parts),
          part = sequenceOfPartsPart; ///

    return part;
  }

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(SequenceOfPartsBNFNode, ruleName, precedence, childNodes); }
}
