"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import SequenceOfPartsPart from "../../part/nonTerminal/sequenceOfParts";

import { PART_RULE_NAME } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class SequenceOfPartsBNFNode extends NonTerminalNode {
  generatePart(branching) {
    const ruleName = PART_RULE_NAME,
          childNodes = this.getChildNodes(),
          partBNFNodes = nodesFromChildNodesAndRuleName(childNodes, ruleName);

    branching = false;  ///

    const parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart(branching);

            return part;
          }),
          sequenceOfPartsPart = SequenceOfPartsPart.fromParts(parts),
          part = sequenceOfPartsPart; ///

    return part;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(SequenceOfPartsBNFNode, ruleName, childNodes, precedence, opacity); }
}
