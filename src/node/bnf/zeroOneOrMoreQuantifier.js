"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ZerorOrMoreQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ZerorOrMoreQuantifierBNFNode, ruleName, childNodes, opacity, precedence); }
}
