'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      TerminalSymbolNode = require('../node/terminalSymbol'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

const { types } = lexers,
      { stringLiteralType } = types,
      { TerminalSymbolRuleName } = ruleNames;

class TerminalSymbolRule extends Rule {
  constructor() {
    const stringLiteralSignificantTokenType = stringLiteralType,  ///
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
