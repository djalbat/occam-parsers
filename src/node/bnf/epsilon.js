"use strict";

import EpsilonPart from "../../part/terminal/epsilon";
import NonTerminalNode from "../../node/nonTerminal";

export default class EpsilonBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const epsilonPart = EpsilonPart.fromNothing();

    return epsilonPart;
  }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(EpsilonBNFNode, ruleName, childNodes, precedence); }
}
