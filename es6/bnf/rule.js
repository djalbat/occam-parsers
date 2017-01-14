'use strict';

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols;

var Parts = require('./parts'),
    FatalErrorNode = require('./node/fatalError');

class Rule {
  constructor(parts) {
    this.parts = parts;
  }
  
  parse(context, productions, noWhitespace) {
    var nodes = [],
        savedIndex = context.savedIndex(),
        parsed = this.parts.every(function(part) {
          var partNodes = part.parse(context, productions, noWhitespace),
              parsed = (partNodes !== null);

          if (parsed) {
            if (partNodes !== undefined) {
              var firstPartNode = first(partNodes);

              if (firstPartNode instanceof FatalErrorNode) {
                var fatalErrorNode = firstPartNode;

                nodes = [fatalErrorNode];

                parsed = false;
              } else {
                nodes = nodes.concat(partNodes);
              }
            }

            noWhitespace = false;
          }

          return parsed;
        });

    if (!parsed) {
      var firstNode = first(nodes);

      if (firstNode instanceof FatalErrorNode) {

      } else {
        nodes = null;

        context.backtrack(savedIndex);
      }
    }

    return nodes;
  }

  static fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, significantTokenTypes) {
    var noWhitespace = false,
        parts = symbolSequence.reduceSymbols(function(parts, symbol) {
          if (symbol === specialSymbols.NO_WHITESPACE) {
            noWhitespace = true;
          } else {
            var part = partFromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace);

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

function partFromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function(Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace);

    var parsed = (part !== null);

    return parsed;
  });

  return part;
}

function first(array) { return array[0]; }
