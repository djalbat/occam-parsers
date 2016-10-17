'use strict';

var TerminalNode = require('../node/terminal');

class TerminalSymbolPart {
  constructor(symbol) {
    this.symbol = symbol;
  }

  parse(context, productions) {
    var nodes = null,
        nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
        token = nextNonWhitespaceToken; ///

    if (token !== undefined) {
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

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
    var terminalSymbolPart = null,
        matches = symbol.match(terminalSymbolsRegExp);

    if (matches !== null) {
      terminalSymbolPart = new TerminalSymbolPart(symbol);
    }

    return terminalSymbolPart;
  }
}

module.exports = TerminalSymbolPart;
