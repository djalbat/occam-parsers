"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../../node/nonTerminal";

import { lookAheadModifierRuleName } from "../../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../../utilities/node";

const { first } = arrayUtilities;

export default class NonTerminalPartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes();

    if (!lookAhead) {
      const lookAheadModifierBNFNode = nodeFromChildNodesAndRuleName(childNodes, lookAheadModifierRuleName);

      lookAhead = (lookAheadModifierBNFNode !== null);
    }

    const firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(lookAhead);

    return part;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(NonTerminalPartBNFNode, ruleName, childNodes, opacity); }
}
