'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      EndOfLineNode = require('../../../common/node/terminal/endOfLine');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { END_OF_LINE } = specialSymbols;

class EndOfLinePart extends TerminalPart {
  parse(configuration, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let endOfLineNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
          significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

      if (significantTokenEndOfLineToken) {
        endOfLineNode = EndOfLineNode.fromSignificantToken(significantToken);
      }
    }
    
    if (endOfLineNode === null) {
      configuration.backtrack(savedIndex);
    }

    return endOfLineNode;
  }

  asString() {
    const string = END_OF_LINE; ///

    return string;
  }
}

module.exports = EndOfLinePart;
