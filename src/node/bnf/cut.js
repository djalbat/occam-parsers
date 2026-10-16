"use strict";

import CutPart from "../../part/terminal/cut";
import NonTerminalNode from "../../node/nonTerminal";

export default class CutBNFNode extends NonTerminalNode {
  generatePart() {
    const cutPart = CutPart.fromNothing();

    return cutPart;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(CutBNFNode, ruleName, childNodes, precedence, opacity); }
}
