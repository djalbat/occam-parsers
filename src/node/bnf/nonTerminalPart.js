"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

import { nodeFromChildNodesAndRuleName } from "../../utilities/node";
import { CONTINUATION_MODIFIER_RULE_NAME } from "../../ruleNames";

const { first } = arrayUtilities;

export default class NonTerminalPartBNFNode extends NonTerminalNode {
  generatePart(continuation) {
    const childNodes = this.getChildNodes();

    if (!continuation) {
      const ruleName = CONTINUATION_MODIFIER_RULE_NAME,
            continuationModifierBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

      continuation = (continuationModifierBNFNode !== null);
    }

    const firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(continuation);

    return part;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(NonTerminalPartBNFNode, ruleName, childNodes, opacity, precedence); }
}
