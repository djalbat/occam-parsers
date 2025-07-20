"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

import { CALL_AHEAD_MODIFIER_RULE_NAME } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../utilities/node";

const { first } = arrayUtilities;

export default class NonTerminalPartBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const childNodes = this.getChildNodes();

    if (!callAhead) {
      const ruleName = CALL_AHEAD_MODIFIER_RULE_NAME,
            callAheadModifierBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

      callAhead = (callAheadModifierBNFNode !== null);
    }

    const firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(callAhead);

    return part;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(NonTerminalPartBNFNode, ruleName, childNodes, opacity); }
}
