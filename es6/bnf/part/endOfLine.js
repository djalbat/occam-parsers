'use strict';

const lexers = require('occam-lexers');

const TerminalNode = require('../../common/node/terminal');

const { BNFLexer, EndOfLineToken } = lexers,
      { specialSymbols } = BNFLexer,
      { END_OF_LINE } = specialSymbols;

class EndOfLinePart {
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
      const type = significantToken.getType(),
            found = (type === EndOfLineToken.type);

      if (found) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }
    
    if (terminalNode === null) {
      context.backtrack(savedIndex);
    }

    return terminalNode;
  }

  toString() {
    const string = END_OF_LINE; ///

    return string;
  }
}

module.exports = EndOfLinePart;
