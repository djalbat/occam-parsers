'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      TerminalSymbolNode = require('../node/terminalSymbol'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

const { TerminalSymbolRuleName } = ruleNames;

class TerminalSymbolRule extends Rule {
  constructor() {
    const stringLiteralSignificantTokenType = 'stringLiteral',
          stringLiteralSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringLiteralSignificantTokenType),
          name = TerminalSymbolRuleName,
          definitions = [
            stringLiteralSignificantTokenTypeDefinition
          ],
          Node = TerminalSymbolNode;

    super(name, definitions, Node)
  }
}

module.exports = TerminalSymbolRule;
