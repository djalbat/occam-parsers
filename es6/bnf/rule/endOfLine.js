'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      EndOfLineNode = require('../node/endOfLine'),
      TerminalSymbolDefinition = require('../definition/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { END_OF_LINE } = specialSymbols,
      { EndOfLineRuleName } = ruleNames;

class EndOfLineRule extends Rule {
  constructor() {
    const endOfLineTerminalSymbolContent = END_OF_LINE,
          endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
          name = EndOfLineRuleName,
          definitions = [
            endOfLineTerminalSymbolDefinition
          ],
          Node = EndOfLineNode;

    super(name, definitions, Node)
  }
}

module.exports = EndOfLineRule;
