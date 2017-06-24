'use strict';

const Rule = require('../rule'),
      TerminalSymbolNode = require('../node/terminalSymbol'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class TerminalSymbolRule extends Rule {
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

module.exports = TerminalSymbolRule;
