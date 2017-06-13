'use strict';

const SequenceOfPartsPart = require('./sequenceOfParts'),
      ZeroOrMorePartsPart = require('./zeroOrMoreParts');

class OneOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    let nodes = null;
    
    const part = this.getPart();

    if (part !== null) {
      const partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = (partNodeOrNodes !== null);

      if (partParsed) {
        nodes = (partNodeOrNodes instanceof Array) ?
                  partNodeOrNodes :
                    [partNodeOrNodes];

        const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this), ///
              zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(context, noWhitespace);

        nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
      }
    }

    return nodes;
  }

  toString() {
    const operatorString = '+',
          string = super.toString(operatorString);

    return string;
  }
}

module.exports = OneOrMorePartsPart;
