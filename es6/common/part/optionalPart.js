'use strict';

var SequenceOfPartsPart = require('./sequenceOfParts');

class OptionalPartPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    var nodes = [],
        productions = context.getProductions(),
        terminalPartOrProduction = this.terminalPartOrProduction(productions);
    
    if (terminalPartOrProduction !== null) {
      var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, noWhitespace),
          terminalPartOrProductionParsed = (terminalPartOrProductionNodes !== null);

      if (terminalPartOrProductionParsed) {
        nodes = terminalPartOrProductionNodes;
      }
    }

    return nodes;
  }
  
  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    var regExp = /([^*]+)\?$/,
        Class = OptionalPartPart,
        optionalPartPart = super.fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class);

    return optionalPartPart;
  }
}

module.exports = OptionalPartPart;
