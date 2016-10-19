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
        nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
        token = nextNonWhitespaceToken; ///

    if (token !== null) {
      var str = token.getString(),
          parsed = (str === this.symbol);  ///

      if (parsed) {
        var type = token.getType(),
            terminalNode = new TerminalNode(str, type);

        nodes = [terminalNode];

        context.advanceJustPastToken(token);
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolPartsRegExp, terminalTypes, noWhitespace) {
    var terminalSymbolPart = null,
        matches = symbol.match(terminalSymbolPartsRegExp);

    if (matches !== null) {
      terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
    }

    return terminalSymbolPart;
  }
}

module.exports = TerminalSymbolPart;
