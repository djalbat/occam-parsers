"use strict";

import EpsilonPart from "../../part/terminal/epsilon";
import NonTerminalNode from "../../node/nonTerminal";

export default class EpsilonBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const epsilonPart = EpsilonPart.fromNothing();

    return epsilonPart;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(EpsilonBNFNode, ruleName, childNodes, ambiguous); }
}
