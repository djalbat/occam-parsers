'use strict';

var TerminalNode = require('../node/terminal');

class TerminalSymbolPart {
  constructor(symbol, noWhitespace) {
    this.symbol = symbol;
    this.noWhitespace = noWhitespace;
  }

  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    var nodes = null,
        savedIndex = context.savedIndex(),
        nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
        significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      var content = significantToken.getContent(),
          parsed = (content === this.symbol);  ///

      if (parsed) {
        var type = significantToken.getType(),
            terminalNode = new TerminalNode(content, type);

        nodes = [terminalNode];
      }
    }

    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolPartsRegExp, significantTokenTypes, noWhitespace) {
    var terminalSymbolPart = null,
        matches = symbol.match(terminalSymbolPartsRegExp);

    if (matches !== null) {
      terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
    }

    return terminalSymbolPart;
  }
}

module.exports = TerminalSymbolPart;
