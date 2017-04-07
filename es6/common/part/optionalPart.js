'use strict';

const SequenceOfPartsPart = require('./sequenceOfParts');

class OptionalPartPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    let nodes = [];
    
    const productions = context.getProductions(),
          terminalPartOrProduction = this.terminalPartOrProduction(productions);
    
    if (terminalPartOrProduction !== null) {
      const terminalPartOrProductionNodeOrNodes = terminalPartOrProduction.parse(context, noWhitespace),
          terminalPartOrProductionParsed = (terminalPartOrProductionNodeOrNodes !== null);

      if (terminalPartOrProductionParsed) {
        nodes = terminalPartOrProductionNodeOrNodes;
      }
    }

    return nodes;
  }
  
  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    const regExp = /([^*]+)\?$/,
          Class = OptionalPartPart,
          optionalPartPart = super.fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class);

    return optionalPartPart;
  }
}

module.exports = OptionalPartPart;