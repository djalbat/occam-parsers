'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      TerminalNode = require('../../../common/node/terminal');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { wildcard } = specialSymbols;

class WildcardPart extends TerminalPart {
  parse(configuration, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let terminalNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
					nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      terminalNode = TerminalNode.fromSignificantToken(significantToken);
    }
    
    if (terminalNode === null) {
      configuration.backtrack(savedIndex);
    }

    return terminalNode;
  }

  asString() {
    const string = wildcard;  ///

    return string;
  }
}

module.exports = WildcardPart;
