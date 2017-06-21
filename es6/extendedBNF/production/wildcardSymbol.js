'use strict';

const Production = require('../production'),
      WildcardSymbolNode = require('../node/wildcardSymbol'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

class WildcardSymbolProduction extends Production {
  constructor() {
    const wildcardTerminalSymbolContent = '.',
          wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
          name = 'wildcardSymbol',
          definitions = [
            wildcardTerminalSymbolDefinition
          ],
          Node = WildcardSymbolNode;

    super(name, definitions, Node)
  }
}

module.exports = WildcardSymbolProduction;
