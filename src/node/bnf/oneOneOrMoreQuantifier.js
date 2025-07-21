"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class OneOrMoreQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(OneOrMoreQuantifierBNFNode, ruleName, childNodes, opacity, precedence); }
}
