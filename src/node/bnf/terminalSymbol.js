"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";
import TerminalSymbolPart from "../../part/terminal/terminalSymbol";

import { ESCAPED_BACKSLASH, ESCAPED_DOUBLE_QUOTE } from "../../constants";

const { first, second } = arrayUtilities;

export default class TerminalSymbolBNFNode extends NonTerminalNode {
  regularExpression = /^"((?:\\.|[^"\\])*)"$/;

  generatePart(callAhead) {
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TerminalSymbolBNFNode, ruleName, childNodes, opacity, precedence); }
}

function sanitiseContent(content) {
  content = content
              .replace(/\\\\/g, ESCAPED_BACKSLASH)
              .replace(/\\"/g, ESCAPED_DOUBLE_QUOTE);

  return content;
}
