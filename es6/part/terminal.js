'use strict';

var TerminalNode = require('../node/terminal');

class TerminalPart {
  constructor(symbol) {
    this.symbol = symbol;
  }

  parse(context, productions) {
    var nodes = null,
        nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
        token = nextNonWhitespaceToken; ///

    if (token !== undefined) {
      var str = token.getString(),
          parsed = (str === this.symbol);

      if (parsed) {
        var terminalNode = new TerminalNode(str);

        nodes = [terminalNode];

        context.advanceJustPastToken(token);
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp) {
    var terminalPart = null,
        matches = symbol.match(terminalSymbolsRegExp);

    if (matches !== null) {
      terminalPart = new TerminalPart(symbol);
    }

    return terminalPart;
  }
}

module.exports = TerminalPart;
