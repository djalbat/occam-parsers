"use strict";

const arrayUtilities = require("../../utilities/array"),
      NonTerminalNode = require("../../common/node/nonTerminal"),
      TerminalSymbolPart = require("../part/terminal/terminalSymbol");

const { first, second } = arrayUtilities;

class TerminalSymbolNode extends NonTerminalNode {
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
          matches = terminalNodeContent.match(TerminalSymbolNode.regularExpression),
          secondMatch = second(matches),
          content = secondMatch.replace(/\\"/g,""); ///

    return content;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(TerminalSymbolNode, ruleName, childNodes); }
}

module.exports = TerminalSymbolNode;

TerminalSymbolNode.regularExpression = /^"((?:\\.|[^"])*)"$/;
