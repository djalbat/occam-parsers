'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      TerminalSymbolNode = require('../node/terminalSymbol'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class TerminalSymbolRule extends Rule {
  constructor() {
    const stringSignificantTokenType = 'string',
          stringSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringSignificantTokenType),
          name = ruleNames.TerminalSymbolRule,
          definitions = [
            stringSignificantTokenTypeDefinition
          ],
          Node = TerminalSymbolNode;

    super(name, definitions, Node)
  }
}

module.exports = TerminalSymbolRule;
