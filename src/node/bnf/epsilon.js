"use strict";

import EpsilonPart from "../../part/terminal/epsilon";
import NonTerminalNode from "../../node/nonTerminal";

export default class EpsilonBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const epsilonPart = EpsilonPart.fromNothing();

    return epsilonPart;
  }

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(EpsilonBNFNode, ruleName, precedence, childNodes); }
}
