"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class OptionalQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(OptionalQuantifierBNFNode, ruleName, childNodes, opacity, precedence); }
}
