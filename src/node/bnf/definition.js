"use strict";

import Definition from "../../definition";
import NonTerminalNode from "../../node/nonTerminal";

import { PART_RULE_NAME, PRECEDENCE_RULE_NAME } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName, nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class DefinitionBNFNode extends NonTerminalNode {
  generateDefinition() {
    let ruleName;

    const childNodes = this.getChildNodes();

    ruleName = PART_RULE_NAME;

    const partBNFNodes = nodesFromChildNodesAndRuleName(childNodes, ruleName);

    ruleName = PRECEDENCE_RULE_NAME;

    const precedenceBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName),
          callAhead = false,  ///
          parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart(callAhead);
  
            return part;
          }),
          precedence = (precedenceBNFNode === null) ?
                          null :
                            precedenceBNFNode.getPrecedence(),
          definition = Definition.fromPartsAndPrecedence(parts, precedence);

    return definition;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(DefinitionBNFNode, ruleName, childNodes, opacity); }
}
