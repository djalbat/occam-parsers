'use strict';

const lexers = require('occam-lexers');

const SequenceOfPartsPart = require('./sequenceOfParts');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { asterisk } = specialSymbols;

const type = 'ZeroOrMoreParts';

class ZeroOrMorePartsPart extends SequenceOfPartsPart {
  constructor(part) {
    super(type, part);
  }

  parse(configuration, noWhitespace) {
    noWhitespace = false; ///
    
    let nodes = [];
    
    const part = this.getPart();

    for(;;) {
      const partNodeOrNodes = part.parse(configuration, noWhitespace),
            partParsed = (partNodeOrNodes !== null);

      if (partParsed) {
        nodes = nodes.concat(partNodeOrNodes);
      } else {
        break;
      }
    }

    return nodes;
  }

  asString() {
    const operatorString = asterisk,  ///
          string = super.asString(operatorString);

    return string;
  }

  static fromOneOrMorePartsPart(oneOrMorePartsPart) {
    const part = oneOrMorePartsPart.getPart(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

    return zeroOrMorePartsPart;
  }
}

Object.assign(ZeroOrMorePartsPart, {
  type: type
});

module.exports = ZeroOrMorePartsPart;
