'use strict';

const arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class TerminalSymbolNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    const content = this.getContent(),
          TerminalSymbolPart = Parts['TerminalSymbolPart'],
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

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, TerminalSymbolNode); }
}

module.exports = TerminalSymbolNode;
