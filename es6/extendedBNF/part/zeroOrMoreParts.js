'use strict';

const lexers = require('occam-lexers');

const SequenceOfPartsPart = require('./sequenceOfParts');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { asterisk } = specialSymbols;

class ZeroOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = false; ///
    
    let nodes = [];
    
    const part = this.getPart();

    for(;;) {
      const partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = (partNodeOrNodes !== null);

      if (partParsed) {
        nodes = nodes.concat(partNodeOrNodes);
      } else {
        break;
      }
    }

    return nodes;
  }

  toString() {
    const operatorString = asterisk,  ///
          string = super.toString(operatorString);

    return string;
  }

  static fromOneOrMorePartsPart(oneOrMorePartsPart) {
    const part = oneOrMorePartsPart.getPart(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

    return zeroOrMorePartsPart;
  }
}

module.exports = ZeroOrMorePartsPart;
