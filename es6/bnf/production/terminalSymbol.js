'use strict';

const Production = require('../production'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class TerminalSymbolProduction extends Production {
  constructor() {
    const stringSignificantTokenType = 'string',
          stringSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringSignificantTokenType),
          name = 'terminalSymbol',
          definitions = [
            stringSignificantTokenTypeDefinition
          ],
          Node = NonTerminalNode;

    super(name, definitions, Node)
  }
}

module.exports = TerminalSymbolProduction;
