'use strict';

var TerminalNode = require('../node/terminal');

class TerminalTypePart {
  constructor(type, noWhitespace) {
    this.type = type;
    this.noWhitespace = noWhitespace;
  }

  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///
    
    var nodes = null,
        token = context.getNextToken(noWhitespace);

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

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypeParts, noWhitespace) {
    var terminalTypePart = null,
        type = symbol,  ///
        foundType = terminalTypeParts.find(function(terminalTypePart) {
          var found = (type === terminalTypePart);

          return found;
        }),
        found = (foundType !== undefined);

    if (found) {
      terminalTypePart = new TerminalTypePart(type, noWhitespace);
    }

    return terminalTypePart;
  }
}

module.exports = TerminalTypePart;
