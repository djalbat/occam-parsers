'use strict';

const SequenceOfPartsPart = require('./sequenceOfParts');

class OptionalPartPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    let nodes = [];
    
    const part = this.getPart();
    
    if (part !== null) {
      const partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = (partNodeOrNodes !== null);

      if (partParsed) {
        nodes = partNodeOrNodes;
      }
    }

    return nodes;
  }

  toString() {
    const operatorString = '?',
          string = super.toString(operatorString);

    return string;
  }
}

module.exports = OptionalPartPart;
