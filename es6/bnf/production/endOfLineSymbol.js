'use strict';

const Production = require('../production'),
      EndOfLineSymbolNode = require('../node/endOfLineSymbol'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

class EndOfLineSymbolProduction extends Production {
  constructor() {
    const endOfLineTerminalSymbolContent = '<END_OF_LINE>',
          endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
          name = 'endOfLineSymbol',
          definitions = [
            endOfLineTerminalSymbolDefinition
          ],
          Node = EndOfLineSymbolNode;

    super(name, definitions, Node)
  }
}

module.exports = EndOfLineSymbolProduction;
