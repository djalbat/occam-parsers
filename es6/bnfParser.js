'use strict';

var Production = require('./production');

class BNFParser {
  static parse(lines, terminalSymbolsRegExpPattern, terminalTypes, mappings) {
    var productions;

    try {
      var terminalSymbolsRegExp = new RegExp(`^(?:${terminalSymbolsRegExpPattern})$`);

      productions = lines.map(function(line) {
        var production = Production.fromLine(line, terminalSymbolsRegExp, terminalTypes, mappings);

        return production;
      });
    } catch(exception) {
      productions = [];
    }

    return productions;
  }
}

module.exports = BNFParser;

