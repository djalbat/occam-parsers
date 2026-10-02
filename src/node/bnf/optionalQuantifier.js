"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class OptionalQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(OptionalQuantifierBNFNode, ruleName, childNodes, precedence, opacity); }
}
