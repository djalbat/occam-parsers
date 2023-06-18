"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class PrecedenceBNFNode extends NonTerminalNode {
  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(PrecedenceBNFNode, ruleName, precedence, childNodes); }
}
