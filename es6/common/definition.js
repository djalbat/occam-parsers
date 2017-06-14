'use strict';

const lexers = require('occam-lexers');

const Parts = require('./parts'),
      ProductionNamePart = require('./part/productionName');

const { specialSymbols } = lexers;

class Definition {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }
  
  getFirstPart() {
    const firstPart = first(this.parts);

    return firstPart;
  }

  getPartsLength() {
    const partsLength = this.parts.length;

    return partsLength;
  }

  getAllButFirstParts() {
    const allButFirstParts = this.parts.slice(1);

    return allButFirstParts;
  }
  
  isFirstPartProductionNamePart() {
    const firstPart = this.getFirstPart(),
          firstPartProductionNamePart = (firstPart instanceof ProductionNamePart);
    
    return firstPartProductionNamePart;
  }
  
  parse(context, noWhitespace) {
    let nodes = [];
    
    const savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function(part) {
            const partNodeOrNodes = part.parse(context, noWhitespace),
                  partParsed = (partNodeOrNodes !== null);
  
            if (partParsed) {
              nodes = nodes.concat(partNodeOrNodes);
  
              noWhitespace = false;
            }
  
            return partParsed;
          });

    if (!everyPartParsed) {
      context.backtrack(savedIndex);

      nodes = null;
    }

    return nodes;
  }

  toString() {
    const partsString = this.parts.reduce(function(partsString, part) {
          const partString = part.toString();

          if (partsString === null) {
            partsString = partString;
          } else {
            partsString = `${partsString} ${partString}`;
          }

          return partsString;
        }, null),
        string = partsString; ///

    return string;
  }

  static fromSymbolSequence(symbolSequence, significantTokenTypes) {
    let noWhitespace = false;
    
    const parts = symbolSequence.reduceSymbols(function(parts, symbol) {
            if (symbol === specialSymbols.NO_WHITESPACE) {
              noWhitespace = true;
            } else {
              const part = partFromSymbol(symbol, significantTokenTypes, noWhitespace);
  
              parts.push(part);
  
              noWhitespace = false;
            }
  
            return parts;
          }, []),
          definition = new Definition(parts);

    return definition;
  }
}

module.exports = Definition;

function partFromSymbol(symbol, significantTokenTypes, noWhitespace) {
  let part = undefined; ///

  Parts.some(function(Part) {
    part = Part.fromSymbol(symbol, significantTokenTypes, noWhitespace);

    const parsed = (part !== null);

    return parsed;
  });

  return part;
}

function first(array) { return array[0]; }
