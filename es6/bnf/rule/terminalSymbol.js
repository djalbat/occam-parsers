'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      TerminalSymbolNode = require('../node/terminalSymbol'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

const { TerminalSymbolRuleName } = ruleNames;

class TerminalSymbolRule extends Rule {
  constructor() {
    const stringSignificantTokenType = 'string',
          stringSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringSignificantTokenType),
          name = TerminalSymbolRuleName,
          definitions = [
            stringSignificantTokenTypeDefinition
          ],
          Node = TerminalSymbolNode;

    super(name, definitions, Node)
  }
}

module.exports = TerminalSymbolRule;
