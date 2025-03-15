"use strict";

import PartChoice from "../../partChoice";
import NonTerminalNode from "../../node/nonTerminal";

import { nodeFromChildNodesAndRuleName } from "../../utilities/node";
import { partRuleName, precedenceRuleName } from "../../ruleNames";

export default class PartChoiceBNFNode extends NonTerminalNode {
  generatePartChoice(callAhead) {
    const childNodes = this.getChildNodes(),
          partBNFNode = nodeFromChildNodesAndRuleName(childNodes, partRuleName),
          precedenceBNFNode = nodeFromChildNodesAndRuleName(childNodes, precedenceRuleName);

    callAhead = false;  ///

    const part = partBNFNode.generatePart(callAhead),
          precedence = (precedenceBNFNode === null) ?
                          null :
                            precedenceBNFNode.getPrecedence(),
          definition = PartChoice.fromPartAndPrecedence(part, precedence);

    return definition;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(PartChoiceBNFNode, ruleName, childNodes, opacity); }
}
