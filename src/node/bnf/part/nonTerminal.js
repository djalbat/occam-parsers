"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../../node/nonTerminal";

import { callAheadModifierRuleName } from "../../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../../utilities/node";

const { first } = arrayUtilities;

export default class NonTerminalPartBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const childNodes = this.getChildNodes();

    if (!callAhead) {
      const callAheadModifierBNFNode = nodeFromChildNodesAndRuleName(childNodes, callAheadModifierRuleName);

      callAhead = (callAheadModifierBNFNode !== null);
    }

    const firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(callAhead);

    return part;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(NonTerminalPartBNFNode, ruleName, childNodes, opacity); }
}
