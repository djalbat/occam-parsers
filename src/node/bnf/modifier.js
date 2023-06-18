"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ModifierBNFNode extends NonTerminalNode {
  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(ModifierBNFNode, ruleName, precedence, childNodes); }
}
