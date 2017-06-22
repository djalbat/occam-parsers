'use strict';

const Production = require('../production'),
      WildcardNode = require('../node/wildcard'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

class WildcardProduction extends Production {
  constructor() {
    const wildcardTerminalSymbolContent = '.',
          wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
          name = 'wildcard',
          definitions = [
            wildcardTerminalSymbolDefinition
          ],
          Node = WildcardNode;

    super(name, definitions, Node)
  }
}

module.exports = WildcardProduction;
