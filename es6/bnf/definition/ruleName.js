'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      OptionalPartPart = require('../part/nonTerminal/optionalPart'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol'),
      SignificantTokenTypePart = require('../part/terminal/significantTokenType');

const { BNFLexer, types } = lexers,
      { nameType } = types,
      { specialSymbols } = BNFLexer,
      { exclamationMark } = specialSymbols,
      { RightRecursivePartRuleName } = ruleNames;

class RuleNameDefinition extends Definition {
  constructor() {
    let noWhitespace;

    noWhitespace = false;

    const nameSignificantTokenType = nameType,  ///
          nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType, noWhitespace);

    noWhitespace = true;

    const exclamationMarkTerminalSymbolContent = exclamationMark, ///
          exclamationMarkTerminalSymbolPart = new TerminalSymbolPart(exclamationMarkTerminalSymbolContent, noWhitespace);

    const lookAhead = false,
          rightRecursivePartRuleName = RightRecursivePartRuleName,
          exclamationMarkTerminalSymbolPartOptionalPart = new OptionalPartPart(exclamationMarkTerminalSymbolPart),
          rightRecursivePartRuleNameRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, lookAhead, noWhitespace),
          parts = [
            nameSignificantTokenTypePart,
            exclamationMarkTerminalSymbolPartOptionalPart,
            rightRecursivePartRuleNameRuleNamePart
          ];

    super(parts)
  }
}

module.exports = RuleNameDefinition;
