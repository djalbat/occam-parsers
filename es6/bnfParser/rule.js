'use strict';

var util = require('../util'),
    CommonParts = require('./commonParts');

class Rule {
  constructor(parts) {
    this.parts = parts;
  }
  
  parse(input, context, productions) {
    var parsed = this.parts.every(function(part) {
      var parsed = part.parse(input, context, productions);
      
      return parsed;
    });
    
    return parsed;
  }

  static fromSequenceOfSymbols(sequenceOfSymbols, Parts) {
    var AllParts = spliceParts(CommonParts, Parts),
        parts = sequenceOfSymbols.mapSymbols(function(symbol) {
          var part = partFromAllParts(AllParts, symbol);
          
          return part;
        }),
        rule = new Rule(parts);

    return rule;
  }
}

module.exports = Rule;

function partFromAllParts(AllParts, symbol) {
  var part = null;

  AllParts.some(function(Part) {
    part = Part.fromSymbol(symbol);

    var parsed = (part !== null);

    return parsed;
  });

  return part;
}

function spliceParts(CommonParts, Parts) {
  var AllParts = CommonParts.slice(),
      CommonPartsLength = CommonParts.length,
      start = CommonPartsLength, ///
      deleteCount = 0;

  util.spliceArray(AllParts, start, deleteCount, Parts);

  return AllParts;
}
