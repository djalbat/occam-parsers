'use strict';

const lexers = require('occam-lexers');

const partTypes = require('../../partTypes'),
      SequenceOfPartsPart = require('./sequenceOfParts');

const { specialSymbols } = lexers,
      { asterisk } = specialSymbols,
      { ZeroOrMorePartsPartType } = partTypes;

class ZeroOrMorePartsPart extends SequenceOfPartsPart {
  constructor(part) {
    const type = ZeroOrMorePartsPartType; ///

    super(type, part);
  }

  parse(configuration, noWhitespace) {
    noWhitespace = false; ///
    
    let nodes = [];
    
    const part = this.getPart();

    for(;;) {
      const partNodeOrNodes = part.parse(configuration, noWhitespace),
            parsed = (partNodeOrNodes !== null);

      if (parsed) {
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

module.exports = ZeroOrMorePartsPart;
