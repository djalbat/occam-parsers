"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

import { nodeFromChildNodesAndRuleName } from "../../utilities/node";
import { CONTIUNATION_MODIFIER_RULE_NAME } from "../../ruleNames";

const { first } = arrayUtilities;

export default class NonTerminalPartBNFNode extends NonTerminalNode {
  generatePart(contiunation) {
    const childNodes = this.getChildNodes();

    if (!contiunation) {
      const ruleName = CONTIUNATION_MODIFIER_RULE_NAME,
            continuationModifierBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

      contiunation = (continuationModifierBNFNode !== null);
    }

    const firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(contiunation);

    return part;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(NonTerminalPartBNFNode, ruleName, childNodes, opacity, precedence); }
}
