'use strict';

const EndOfLinePart = require('../part/endOfLine'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class EndOfLineNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const endOfLinePart = new EndOfLinePart(noWhitespace);

    return endOfLinePart;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, EndOfLineNode); }
}

module.exports = EndOfLineNode;
