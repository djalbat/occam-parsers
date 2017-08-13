'use strict';

const lexers = require('occam-lexers');

const SequenceOfPartsPart = require('./sequenceOfParts'),
      ZeroOrMorePartsPart = require('./zeroOrMoreParts');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { plus } = specialSymbols;

class OneOrMorePartsPart extends SequenceOfPartsPart {
  parse(configuration, noWhitespace) {
    noWhitespace = false; ///

    let nodes = null;
    
    const part = this.getPart(),
          partNodeOrNodes = part.parse(configuration, noWhitespace),
          partParsed = (partNodeOrNodes !== null);

    if (partParsed) {
      nodes = (partNodeOrNodes instanceof Array) ?
                partNodeOrNodes :
                  [partNodeOrNodes];

      const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this), ///
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(configuration, noWhitespace);

      nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
    }

    return nodes;
  }

  toString() {
    const operatorString = plus,  ///
          string = super.toString(operatorString);

    return string;
  }
}

module.exports = OneOrMorePartsPart;
