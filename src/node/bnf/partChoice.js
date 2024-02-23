"use strict";

import PartChoice from "../../partChoice";
import NonTerminalNode from "../../node/nonTerminal";

import { nodeFromChildNodesAndRuleName } from "../../utilities/node";
import { partRuleName, precedenceRuleName } from "../../ruleNames";

export default class PartChoiceBNFNode extends NonTerminalNode {
  generatePartChoice(lookAhead) {
    const childNodes = this.getChildNodes(),
          partBNFNode = nodeFromChildNodesAndRuleName(childNodes, partRuleName),
          precedenceBNFNode = nodeFromChildNodesAndRuleName(childNodes, precedenceRuleName);

    lookAhead = false;  ///

    const part = partBNFNode.generatePart(lookAhead),
          precedence = (precedenceBNFNode === null) ?
                          null :
                            precedenceBNFNode.getPrecedence(),
          definition = PartChoice.fromPartAndPrecedence(part, precedence);

    return definition;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(PartChoiceBNFNode, ruleName, childNodes, ambiguous); }
}
