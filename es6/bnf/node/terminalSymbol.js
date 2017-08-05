'use strict';

const necessary = require('necessary');

const TerminalSymbolPart = require('../part/terminalSymbol'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { array } = necessary,
      { first, second } = array;

class TerminalSymbolNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const content = this.getContent(),
          terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

    return terminalSymbolPart;
  }

  getContent() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(TerminalSymbolNode.regularExpression),
          secondMatch = second(matches),
          content = secondMatch.replace(/\\"/g,'"'); ///

    return content;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(TerminalSymbolNode, nodes, ruleName); }
}

module.exports = TerminalSymbolNode;

TerminalSymbolNode.regularExpression = /^"((?:\\.|[^"])*)"$/;
