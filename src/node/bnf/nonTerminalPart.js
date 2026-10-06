"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

import { BRANCHING_MODIFIER_RULE_NAME } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../utilities/node";

const { first } = arrayUtilities;

export default class NonTerminalPartBNFNode extends NonTerminalNode {
  generatePart(branching) {
    const childNodes = this.getChildNodes();

    if (!branching) {
      const ruleName = BRANCHING_MODIFIER_RULE_NAME,
            branchingModifierBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

      branching = (branchingModifierBNFNode !== null);
    }

    const firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(branching);

    return part;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(NonTerminalPartBNFNode, ruleName, childNodes, precedence, opacity); }
}
