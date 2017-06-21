'use strict';

const Production = require('../production'),
      TerminalSymbolNode = require('../node/terminalSymbol'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class TerminalSymbolProduction extends Production {
  constructor() {
    const stringSignificantTokenType = 'string',
          stringSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringSignificantTokenType),
          name = 'terminalSymbol',
          definitions = [
            stringSignificantTokenTypeDefinition
          ],
          Node = TerminalSymbolNode;

    super(name, definitions, Node)
  }
}

module.exports = TerminalSymbolProduction;
