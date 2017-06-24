'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName'),
      GroupOfPartsPart = require('../part/groupOfParts'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      TerminalSymbolPart = require('../part/terminalSymbol');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { verticalBar, openBracket, closeBracket } = specialSymbols;

class ChoiceOfPartsDefinition extends Definition {
  constructor() {
    const partRuleName = 'part',
          verticalBarTerminalSymbolContent = verticalBar,
          openBracketTerminalSymbolContent = openBracket,
          closeBracketTerminalSymbolContent = closeBracket,
          partRuleNamePart = new RuleNamePart(partRuleName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
          verticalBarTerminalSymbolThenPartRuleNameParts = [
            verticalBarTerminalSymbolPart,
            partRuleNamePart
          ],
          groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenPartRuleNameParts),
          oneOrMoreGroupOfPartsPart = new OneOrMorePartsPart(groupOfPartsPart),
          parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMoreGroupOfPartsPart,
            closeBracketTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = ChoiceOfPartsDefinition;
