"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";
import TerminalSymbolPart from "../../part/terminal/terminalSymbol";

const { first, second } = arrayUtilities;

export default class TerminalSymbolBNFNode extends NonTerminalNode {
  regularExpression = /^"((?:\\.|[^"\\])*)"$/;

  generatePart(lookAhead) {
    const content = this.getContent(),
          terminalSymbolPart = TerminalSymbolPart.fromContent(content);

    return terminalSymbolPart;
  }

  getContent() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(this.regularExpression),
          secondMatch = second(matches),
          content = secondMatch.replace(/\\\\/g, "\\").replace(/\\"/g, "\"");

    return content;
  }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(TerminalSymbolBNFNode, ruleName, childNodes, precedence); }
}

