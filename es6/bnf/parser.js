'use strict';

var Production = require('./production');

class BNFParser {
  static parse(lines, significantTokenTypes, mappings) {
    var productions;

    try {
      productions = lines.map(function(line) {
        var production = Production.fromLine(line, significantTokenTypes, mappings);

        return production;
      });
    } catch(exception) {
      productions = [];
    }

    return productions;
  }
}

module.exports = BNFParser;

