'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      TerminalNode = require('../../../common/node/terminal');

const { BNFLexer, EndOfLineToken } = lexers,
      { specialSymbols } = BNFLexer,
      { END_OF_LINE } = specialSymbols;

class EndOfLinePart extends TerminalPart {
  parse(configuration, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let terminalNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
          nextNonWhitespaceSignificantToken = configuration.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      const type = significantToken.getType(),
            found = (type === EndOfLineToken.type);

      if (found) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }
    
    if (terminalNode === null) {
      configuration.backtrack(savedIndex);
    }

    return terminalNode;
  }

  asString() {
    const string = END_OF_LINE; ///

    return string;
  }
}

module.exports = EndOfLinePart;
