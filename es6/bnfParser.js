'use strict';

var Production = require('./bnfParser/production');

class BNFParser {
  static parse(grammar, specialSymbols, Parts, mappings) {
    var lines = linesFromGrammar(grammar),
        productions = lines.map(function(line) {
          var production = Production.fromLine(line, specialSymbols, Parts, mappings);

          return production;
        });

    return productions;
  }
}

module.exports = BNFParser;

function linesFromGrammar(grammar) {
  var lines = grammar.split('\n').reduce(function(lines, line) {
    var blank = (line.search(/^[ \t]*$/) === 0);

    if (!blank) {
      var matches = line.match(/^[ \t]+(\|.*)$/),
          continuing = (matches !== null);

      if (continuing) {
        var previousLine = lines.pop(),
            firstMatch = first(matches),
            continuingExpression = ' ' + firstMatch;

        previousLine = previousLine + continuingExpression;

        line = previousLine;
      }

      lines.push(line);
    }

    return lines;
  }, []);

  return lines;
}

function first(array) { return array[0]; }
