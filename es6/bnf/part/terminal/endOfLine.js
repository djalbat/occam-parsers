'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      EndOfLineNode = require('../../../common/node/terminal/endOfLine');

const { specialSymbols } = lexers,
      { END_OF_LINE } = specialSymbols;

class EndOfLinePart extends TerminalPart {
  parse(configuration) {
    let endOfLineNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
		      nonWhitespace = this.hasNonWhitespace(),
          nextSignificantToken = configuration.getNextSignificantToken(nonWhitespace),
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

  clone() { return super.clone(EndOfLinePart); }
}

module.exports = EndOfLinePart;
