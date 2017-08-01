'use strict';

const lexers = require('occam-lexers');

const TerminalNode = require('../../common/node/terminal');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { wildcard } = specialSymbols;

class WildcardPart {
  constructor(noWhitespace) {
    this.noWhitespace = noWhitespace;
  }
  
  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let terminalNode = null;
    
    const savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      terminalNode = TerminalNode.fromSignificantToken(significantToken);
    }
    
    if (terminalNode === null) {
      context.backtrack(savedIndex);
    }

    return terminalNode;
  }

  toString() {
    const string = wildcard;  ///

    return string;
  }
}

module.exports = WildcardPart;
