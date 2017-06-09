'use strict';

const lexers = require('occam-lexers');

const Parts = require('./parts'),
      ProductionNamePart = require('./part/productionName');

const { specialSymbols } = lexers;

class Rule {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }
  
  getPartsLength() {
    const partsLength = this.parts.length;
    
    return partsLength;
  }
  
  getAllButFirstParts() {
    const allButFirstParts = this.parts.slice(1);

    return allButFirstParts;
  }
  
  getFirstProductionNamePart() {
    let firstProductionNamePart = null;

    const firstPart = first(this.parts);

    if (firstPart instanceof ProductionNamePart) {
      firstProductionNamePart = firstPart; ///
    }
    
    return firstProductionNamePart;
  }
  
  isLeftRecursive(productionName) {
    let leftRecursive = false;
    
    const firstProductionNamePart = this.getFirstProductionNamePart();    
    
    if (firstProductionNamePart !== null) {
      leftRecursive = firstProductionNamePart.isLeftRecursive(productionName);
    }
    
    return leftRecursive;
  }

  isImplicitlyLeftRecursive(previousProductions) {
    const implicitlyLeftRecursivePreviousProduction = this.implicitlyLeftRecursivePreviousProduction(previousProductions),
          implicitlyLeftRecursive = (implicitlyLeftRecursivePreviousProduction !== null);
    
    return implicitlyLeftRecursive;
  }

  implicitlyLeftRecursivePreviousProduction(previousProductions) {
    let implicitlyLeftRecursivePreviousProduction = null;

    const firstProductionNamePart = this.getFirstProductionNamePart();

    if (firstProductionNamePart !== null) {
      const firstProductionNamePartProductionName = firstProductionNamePart.getProductionName(),
            firstProductionName = firstProductionNamePartProductionName;  ///

      previousProductions.some(function(previousProduction) {
        const previousProductionName = previousProduction.getName(),
              previousProductionImplicitlyLeftRecursive = (previousProductionName === firstProductionName);

        if (previousProductionImplicitlyLeftRecursive) {
          implicitlyLeftRecursivePreviousProduction = previousProduction;

          return true;
        }
      });
    }

    return implicitlyLeftRecursivePreviousProduction;
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
          rule = new Rule(parts);

    return rule;
  }
}

module.exports = Rule;

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
