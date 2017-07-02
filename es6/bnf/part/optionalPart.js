'use strict';

const lexers = require('occam-lexers');

const SequenceOfPartsPart = require('./sequenceOfParts');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { questionMark } = specialSymbols;

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
    const operatorString = questionMark,  ///
          string = super.toString(operatorString);

    return string;
  }
}

module.exports = OptionalPartPart;
