'use strict';

var Production = require('./bnfParser/production');

class BNFParser {
  static parse(lines, Parts, mappings) {
    var productions = lines.map(function(line) {
          var production = Production.fromLine(line, Parts, mappings);

          return production;
        });

    return productions;
  }
}

module.exports = BNFParser;

