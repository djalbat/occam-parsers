'use strict';

const arrayUtil = require('../../util/array'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class TerminalSymbolNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const content = this.getContent(),
          terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

    return terminalSymbolPart;
  }

  getContent() {
    const regExp = /^"([^"]+)"$/,
          childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(regExp),
          secondMatch = arrayUtil.second(matches),
          content = secondMatch; ///

    return content;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, TerminalSymbolNode); }
}

module.exports = TerminalSymbolNode;
