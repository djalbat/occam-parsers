"use strict";

const lexers = require("occam-lexers");

const partTypes = require("../../partTypes"),
      SequenceOfPartsPart = require("./sequenceOfParts"),
      ZeroOrMorePartsPart = require("./zeroOrMoreParts");

const { specialSymbols } = lexers,
      { plus } = specialSymbols,
      { OneOrMorePartsPartType } = partTypes;

class OneOrMorePartsPart extends SequenceOfPartsPart {
  constructor(part) {
    const type = OneOrMorePartsPartType; ///

    super(type, part);
  }
  
  parse(configuration) {
    let nodes = null;
    
    const part = this.getPart(),
          partNodeOrNodes = part.parse(configuration),
          parsed = (partNodeOrNodes !== null);

    if (parsed) {
      nodes = (partNodeOrNodes instanceof Array) ?
                partNodeOrNodes :
                  [partNodeOrNodes];

      const oneOrMorePartsPart = this,  ///
            zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(oneOrMorePartsPart),
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(configuration);

      nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
    }

    return nodes;
  }

  clone() { return super.clone(OneOrMorePartsPart); }

  asString() {
    const operatorString = plus,  ///
          string = super.asString(operatorString);

    return string;
  }
}

module.exports = OneOrMorePartsPart;
