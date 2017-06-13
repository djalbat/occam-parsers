'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

class EndOfLineSymbolProduction extends Production {
  constructor() {
    const endOfLineTerminalSymbolContent = '<END_OF_LINE>',
          endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
          name = 'endOfLineSymbol',
          definitions = [
            endOfLineTerminalSymbolDefinition
          ],
          Node = NonTerminalNode;

    super(name, definitions, Node)
  }
}

module.exports = EndOfLineSymbolProduction;
