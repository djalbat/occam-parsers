"use strict";

import arrayUtilities from "../../utilities/array";
import NonTerminalNode from "../../common/node/nonTerminal";
import SignificantTokenTypePart from "../part/terminal/significantTokenType";

const { first, second } = arrayUtilities;

class SignificantTokenTypeNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const significantTokenType = this.getSignificantTokenType(),
          significantTokenTypePart = new SignificantTokenTypePart(significantTokenType);

    return significantTokenTypePart;
  }

  getSignificantTokenType() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(SignificantTokenTypeNode.regularExpression),
          secondMatch = second(matches),
          significantTokenType = secondMatch; ///

    return significantTokenType;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(SignificantTokenTypeNode, ruleName, childNodes); }
}

module.exports = SignificantTokenTypeNode;

SignificantTokenTypeNode.regularExpression = /^\[([^\]]+)\]$/;
