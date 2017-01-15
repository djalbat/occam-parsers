'use strict';

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols,
    SignificantToken = lexers.SignificantToken;

var EndOfLineTerminalNode = require('../node/terminal/endOfLine');

class EndOfLinePart {
  constructor(noWhitespace) {
    this.noWhitespace = noWhitespace;
  }

  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    var nodes = null,
        savedIndex = context.savedIndex(),
        nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
        significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      var type = significantToken.getType(),
          found = (type === SignificantToken.types.endOfLine);

      if (found) {
        var terminalNode = new EndOfLineTerminalNode();

        nodes = [terminalNode];
      }
    }
    
    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
    var endOfLinePart = null,
        found = (symbol === specialSymbols.END_OF_LINE);

    if (found) {
      endOfLinePart = new EndOfLinePart(noWhitespace);
    }

    return endOfLinePart;
  }
}

module.exports = EndOfLinePart;
