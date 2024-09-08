"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";
import TerminalSymbolPart from "../../part/terminal/terminalSymbol";

import { ESCAPED_BACKSLASH, ESCAPED_DOUBLE_QUOTE } from "../../constants";

const { first, second } = arrayUtilities;

export default class TerminalSymbolBNFNode extends NonTerminalNode {
  regularExpression = /^"((?:\\.|[^"\\])*)"$/;

  generatePart(lookAhead) {
    const content = this.getContent(),
          terminalSymbolPart = TerminalSymbolPart.fromContent(content);

    return terminalSymbolPart;
  }

  getContent() {
    let content;
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(this.regularExpression),
          secondMatch = second(matches);

    content = secondMatch;  ///

    content = sanitiseContent(content);

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(TerminalSymbolBNFNode, ruleName, childNodes, opacity); }
}

function sanitiseContent(content) {
  content = content
              .replace(/\\\\/g, ESCAPED_BACKSLASH)
              .replace(/\\"/g, ESCAPED_DOUBLE_QUOTE);

  return content;
}
