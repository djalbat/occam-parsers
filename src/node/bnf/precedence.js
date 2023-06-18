"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class PrecedenceBNFNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(PrecedenceBNFNode, ruleName, childNodes); }
}
