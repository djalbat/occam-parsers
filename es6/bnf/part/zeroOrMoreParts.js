'use strict';

const SequenceOfPartsPart = require('./sequenceOfParts');

class ZeroOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    let nodes = [];
    
    const part = this.getPart();

    if (part !== null) {
      for(;;) {
        const partNodeOrNodes = part.parse(context, noWhitespace),
              partParsed = (partNodeOrNodes !== null);

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);
        } else {
          break;
        }
      }
    }

    return nodes;
  }

  toString() {
    const operatorString = '*',
          string = super.toString(operatorString);

    return string;
  }

  static fromOneOrMorePartsPart(oneOrMorePartsPart) {
    const part = oneOrMorePartsPart.getPart(),
          noWhitespace = oneOrMorePartsPart.getNoWhitespace(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part, noWhitespace);

    return zeroOrMorePartsPart;
  }
}

module.exports = ZeroOrMorePartsPart;
