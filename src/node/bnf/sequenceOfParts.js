"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import SequenceOfPartsPart from "../../part/nonTerminal/sequenceOfParts";

import { PART_RULE_NAME } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class SequenceOfPartsBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const ruleName = PART_RULE_NAME,
          childNodes = this.getChildNodes(),
          partBNFNodes = nodesFromChildNodesAndRuleName(childNodes, ruleName);

    callAhead = false;  ///

    const parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart(callAhead);

            return part;
          }),
          sequenceOfPartsPart = SequenceOfPartsPart.fromParts(parts),
          part = sequenceOfPartsPart; ///

    return part;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(SequenceOfPartsBNFNode, ruleName, childNodes, opacity); }
}
