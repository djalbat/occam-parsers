'use strict';

const SequenceOfPartsPart = require('./sequenceOfParts'),
      ZeroOrMorePartsPart = require('./zeroOrMoreParts');

class OneOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = false; ///

    let nodes = null;
    
    const part = this.getPart(),
          partNodeOrNodes = part.parse(context, noWhitespace),
          partParsed = (partNodeOrNodes !== null);

    if (partParsed) {
      nodes = (partNodeOrNodes instanceof Array) ?
                partNodeOrNodes :
                  [partNodeOrNodes];

      const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this), ///
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(context, noWhitespace);

      nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
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
