"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class QuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(QuantifierBNFNode, ruleName, childNodes); }
}
