'use strict';

var TerminalNode = require('../node/terminal');

class RegularExpressionPart {
  constructor(regExp, noWhitespace) {
    this.regExp = regExp;
    this.noWhitespace = noWhitespace;
  }

  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    var nodes = null,
        nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
        token = nextNonWhitespaceToken; ///

    if (token !== null) {
      var str = token.getString(),
          matches = str.match(this.regExp);

      if (matches !== null) {
        var firstMatch = first(matches),
            parsed = (firstMatch === str);

        if (parsed) {
          var type = RegularExpressionPart.type,
              terminalNode = new TerminalNode(str, type);

          nodes = [terminalNode];

          context.advanceJustPastToken(token);
        }
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
    var regularExpressionPart = null,
        regularExpressionPartRegExp = /\/([^/]+)\//,
        matches = symbol.match(regularExpressionPartRegExp);

    if (matches !== null) {
      var secondMatch = second(matches),
          pattern = secondMatch,  ///
          regExp = new RegExp(pattern);

      regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);
    }

    return regularExpressionPart;
  }
}

RegularExpressionPart.type = 'regexp'; ///

module.exports = RegularExpressionPart;

function first(array) { return array[0]; }
function second(array) { return array[1]; }
