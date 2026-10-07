"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import BranchingPartsPart from "../../part/nonTerminal/branchingParts";

import { PART_RULE_NAME } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class BranchingPartsBNFNode extends NonTerminalNode {
  generatePart() {
    const ruleName = PART_RULE_NAME,
          childNodes = this.getChildNodes(),
          partBNFNodes = nodesFromChildNodesAndRuleName(childNodes, ruleName),
          parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart();

            return part;
          }),
          branchingPartsPart = BranchingPartsPart.fromParts(parts),
          part = branchingPartsPart; ///

    return part;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(BranchingPartsBNFNode, ruleName, childNodes, precedence, opacity); }
}
