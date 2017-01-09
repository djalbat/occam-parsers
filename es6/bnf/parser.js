'use strict';

var Production = require('./production');

class BNFParser {
  static parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings) {
    var productions;

    try {
      var terminalSymbolsRegExp = new RegExp(`^(?:${terminalSymbolsRegExpPattern})$`);

      productions = lines.map(function(line) {
        var production = Production.fromLine(line, terminalSymbolsRegExp, significantTokenTypes, mappings);

        return production;
      });
    } catch(exception) {
      productions = [];
    }

    return productions;
  }
}

module.exports = BNFParser;

