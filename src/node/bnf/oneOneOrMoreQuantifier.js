"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class OneOrMoreQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(OneOrMoreQuantifierBNFNode, ruleName, childNodes, precedence, opacity); }
}
