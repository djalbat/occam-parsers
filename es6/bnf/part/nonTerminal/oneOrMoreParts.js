'use strict';

const lexers = require('occam-lexers');

const partTypes = require('../../partTypes'),
      SequenceOfPartsPart = require('./sequenceOfParts'),
      ZeroOrMorePartsPart = require('./zeroOrMoreParts');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { plus } = specialSymbols,
      { OneOrMorePartsPartType } = partTypes;

class OneOrMorePartsPart extends SequenceOfPartsPart {
  constructor(part) {
    const type = OneOrMorePartsPartType; ///

    super(type, part);
  }
  
  parse(configuration, noWhitespace) {
    noWhitespace = false; ///

    let nodes = null;
    
    const part = this.getPart(),
          partNodeOrNodes = part.parse(configuration, noWhitespace),
          parsed = (partNodeOrNodes !== null);

    if (parsed) {
      nodes = (partNodeOrNodes instanceof Array) ?
                partNodeOrNodes :
                  [partNodeOrNodes];

      const oneOrMorePartsPart = this,  ///
            zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(oneOrMorePartsPart),
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(configuration, noWhitespace);

      nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
    }

    return nodes;
  }

  asString() {
    const operatorString = plus,  ///
          string = super.asString(operatorString);

    return string;
  }
}

module.exports = OneOrMorePartsPart;
