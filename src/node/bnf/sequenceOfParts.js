"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import SequenceOfPartsPart from "../../part/nonTerminal/sequenceOfParts";

import { partRuleName } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class SequenceOfPartsBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          partBNFNodes = nodesFromChildNodesAndRuleName(childNodes, partRuleName);

    lookAhead = false;  ///

    const parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart(lookAhead);

            return part;
          }),
          sequenceOfPartsPart = SequenceOfPartsPart.fromParts(parts),
          part = sequenceOfPartsPart; ///

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(SequenceOfPartsBNFNode, ruleName, childNodes); }
}
