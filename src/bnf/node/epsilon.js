"use strict";

import EpsilonPart from "../part/terminal/epsilon";
import NonTerminalNode from "../../common/node/nonTerminal";

export default class EpsilonNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const epsilonPart = new EpsilonPart();

    return epsilonPart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(EpsilonNode, ruleName, childNodes); }
}
