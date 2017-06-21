'use strict';

const EndOfLinePart = require('../part/endOfLine'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class EndOfLineSymbolNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    const EndOfLinePart = Parts['EndOfLinePart'],
          endOfLinePart = new EndOfLinePart(noWhitespace);

    return endOfLinePart;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, EndOfLineSymbolNode); }
}

module.exports = EndOfLineSymbolNode;
