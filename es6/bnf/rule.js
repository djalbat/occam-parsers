'use strict';

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols;

var Parts = require('./parts');

class Rule {
  constructor(parts) {
    this.parts = parts;
  }
  
  parse(context, productions, noWhitespace) {
    var nodes = null,
        tooDeep = context.isTooDeep();

    if (!tooDeep) {
      nodes = [];

      var savedIndex = context.savedIndex(),
          parsed = this.parts.every(function(part) {
            var partNodes = part.parse(context, productions, noWhitespace),
                partParsed = (partNodes !== null);

            if (partParsed) {
              nodes = nodes.concat(partNodes);

              noWhitespace = false;
            }

            return partParsed;
          });

      if (!parsed) {
        tooDeep = context.isTooDeep();

        if (!tooDeep) {
          context.backtrack(savedIndex);
        }

        nodes = null;
      }
    }

    return nodes;
  }

  static fromSymbolSequence(symbolSequence, significantTokenTypes) {
    var noWhitespace = false,
        parts = symbolSequence.reduceSymbols(function(parts, symbol) {
          if (symbol === specialSymbols.NO_WHITESPACE) {
            noWhitespace = true;
          } else {
            var part = partFromSymbol(symbol, significantTokenTypes, noWhitespace);

            parts.push(part);

            noWhitespace = false;
          }

          return parts;
        }, []),
        rule = new Rule(parts);

    return rule;
  }
}

module.exports = Rule;

function partFromSymbol(symbol, significantTokenTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function(Part) {
    part = Part.fromSymbol(symbol, significantTokenTypes, noWhitespace);

    var parsed = (part !== null);

    return parsed;
  });

  return part;
}
