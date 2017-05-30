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
}

module.exports = OptionalPartPart;
