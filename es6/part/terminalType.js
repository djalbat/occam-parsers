'use strict';

var TerminalNode = require('../node/terminal');

class TerminalTypePart {
  constructor(type) {
    this.type = type;
  }

  parse(context, productions) {
    var nodes = null,
        nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
        token = nextNonWhitespaceToken; ///

    if (token !== undefined) {
      var str = token.getString(),
          type = token.getType(),
          parsed = (type === this.type);  ///

      if (parsed) {
        var terminalNode = new TerminalNode(str);

        nodes = [terminalNode];

        context.advanceJustPastToken(token);
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolssRegExp, terminalTypeParts) {
    var terminalTypePart = null,
        type = symbol,  ///
        found = terminalTypeParts.find(function(terminalTypePart) {
          var found = (type === terminalTypePart);

          return found;
        });

    if (found) {
      terminalTypePart = new TerminalTypePart(type);
    }

    return terminalTypePart;
  }
}

module.exports = TerminalTypePart;
