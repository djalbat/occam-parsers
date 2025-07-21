"use strict";

import EpsilonPart from "../../part/terminal/epsilon";
import NonTerminalNode from "../../node/nonTerminal";

export default class EpsilonBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const epsilonPart = EpsilonPart.fromNothing();

    return epsilonPart;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(EpsilonBNFNode, ruleName, childNodes, opacity, precedence); }
}
