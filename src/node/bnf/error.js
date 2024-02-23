"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ErrorBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(ErrorBNFNode, ruleName, childNodes, ambiguous); }
}
