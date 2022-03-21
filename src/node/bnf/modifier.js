"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ModifierBNFNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ModifierBNFNode, ruleName, childNodes); }
}
