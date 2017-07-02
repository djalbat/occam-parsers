'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      TerminalSymbolPart = require('../part/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { openBracket, closeBracket } = specialSymbols;

class GroupOfPartsDefinition extends Definition {
  constructor() {
    const partRuleName = 'part',
          openBracketTerminalSymbolContent = openBracket,
          closeBracketTerminalSymbolContent = closeBracket,
          partRuleNamePart = new RuleNamePart(partRuleName),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
          oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
          parts = [
            openBracketTerminalSymbolPart,
            oneOrMorePartRuleNamePartsPart,
            closeBracketTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = GroupOfPartsDefinition;
