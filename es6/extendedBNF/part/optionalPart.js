'use strict';

const SequenceOfPartsPart = require('./sequenceOfParts');

class OptionalPartPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = false; ///

    let nodes = [];
    
    const part = this.getPart(),
          partNodeOrNodes = part.parse(context, noWhitespace),
          partParsed = (partNodeOrNodes !== null);

    if (partParsed) {
      nodes = partNodeOrNodes;
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
