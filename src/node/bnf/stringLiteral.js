"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";
import StringLiteralPart from "../../part/terminal/stringLiteral";

import { ESCAPED_BACKSLASH, ESCAPED_DOUBLE_QUOTE } from "../../constants";

const { first, second } = arrayUtilities;

export default class StringLiteralBNFNode extends NonTerminalNode {
  regularExpression = /^"((?:\\.|[^"\\])*)"$/;

  generatePart(continuation) {
    const content = this.getContent(),
          stringLiteralPart = StringLiteralPart.fromContent(content);

    return stringLiteralPart;
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

  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(StringLiteralBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}

function sanitiseContent(content) {
  content = content
              .replace(/\\\\/g, ESCAPED_BACKSLASH)
              .replace(/\\"/g, ESCAPED_DOUBLE_QUOTE);

  return content;
}
