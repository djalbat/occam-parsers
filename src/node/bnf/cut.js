"use strict";

import CutPart from "../../part/terminal/cut";
import NonTerminalNode from "../../node/nonTerminal";

export default class CutBNFNode extends NonTerminalNode {
  isProducing() {
    const multiplicity = this.getMultiplicity(),
          produding = (multiplicity > 1);

    return produding;
  }

  generatePart() {
    const producing = this.isProducing(),
          cutPart = CutPart.fromProducing(producing);

    return cutPart;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(CutBNFNode, ruleName, childNodes, precedence, opacity); }
}
