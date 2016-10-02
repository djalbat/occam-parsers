'use strict';

var TerminalNode = require('../node/terminal');

class RegularExpressionPart {
  constructor(regExp) {
    this.regExp = regExp;
  }

  parse(context, productions) {
    var nodes = null,
        nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
        token = nextNonWhitespaceToken; ///

    if (token !== undefined) {
      var str = token.getString(),
          matches = str.match(this.regExp);

      if (matches !== null) {
        var firstMatch = first(matches),
            parsed = (firstMatch === str);

        if (parsed) {
          var terminalNode = new TerminalNode(str);

          nodes = [terminalNode];

          context.advanceJustPastToken(token);
        }
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, specialSymbolsRegExp) {
    var regularExpressionPart = null,
        regularExpressionRegExp = /\/([^/]+)\//,
        matches = symbol.match(regularExpressionRegExp);

    if (matches !== null) {
      var secondMatch = second(matches),
          pattern = secondMatch,  ///
          regExp = new RegExp(pattern);

      regularExpressionPart = new RegularExpressionPart(regExp);
    }

    return regularExpressionPart;
  }
}

module.exports = RegularExpressionPart;

function first(array) { return array[0]; }
function second(array) { return array[1]; }
