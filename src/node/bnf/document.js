"use strict";

import NonTerminalNode from"../../node/nonTerminal";

import { RULE_RULE_NAME } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class DocumentBNFNode extends NonTerminalNode {
  generateRules(Rule) {
    const ruleName = RULE_RULE_NAME,
          childNodes = this.getChildNodes(),
          ruleBNFNodes = nodesFromChildNodesAndRuleName(childNodes, ruleName),
          rules = ruleBNFNodes.map((ruleBNFNode) => {
            const rule = ruleBNFNode.generateRule(Rule);
            
            return rule;
          });
    
    return rules;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DocumentBNFNode, ruleName, childNodes, opacity, precedence); }
}
