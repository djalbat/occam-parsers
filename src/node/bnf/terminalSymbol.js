"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import TerminalSymbolPart from "../../part/terminal/terminalSymbol";

import { first, second } from "../../utilities/array";

export default class TerminalSymbolBNFNode extends NonTerminalNode {
  regularExpression = /^"((?:\\.|[^"\\])*)"$/;

  generatePart(lookAhead) {
    const content = this.getContent(),
          terminalSymbolPart = new TerminalSymbolPart(content);

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

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(TerminalSymbolBNFNode, ruleName, childNodes); }
}

