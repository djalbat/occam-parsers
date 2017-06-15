'use strict';

const arrayUtil = require('../../util/array');

class SequenceOfPartsPart {
  constructor(part) {
    this.part = part;
  }

  getPart() {
    return this.part;
  }
  
  toString(operatorString) {
    const partString = this.part.toString(),
          string = `${partString}${operatorString}`;

    return string;
  }

  static fromPartAndQuantifier(part, quantifier, Parts) {
    let sequenceOfPartsPart;
  
    switch (quantifier) {
      case '?':
        const OptionalPartPart = Parts['OptionalPartPart'],
              optionalPartPart = new OptionalPartPart(part);
  
        sequenceOfPartsPart = optionalPartPart;
        break;
  
      case '*':
        const ZeroOrMorePartsPart = Parts['ZeroOrMorePartsPart'],
              zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
  
        sequenceOfPartsPart = zeroOrMorePartsPart;
        break;
  
      case '+':
        const OneOrMorePartsPart = Parts['OneOrMorePartsPart'],
              oneOrMorePartsPart = new OneOrMorePartsPart(part);
  
        sequenceOfPartsPart = oneOrMorePartsPart;
        break;
    }
  
    return sequenceOfPartsPart;
  }

  static fromPartAndQuantifiers(part, quantifiers, Parts) {
    const quantifier = quantifiers.shift(),
          quantifiersLength = quantifiers.length;

    let sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifier(part, quantifier, Parts);

    if (quantifiersLength > 0) {
      part = sequenceOfPartsPart; ///

      sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifiers(part, quantifiers, Parts);
    }

    return sequenceOfPartsPart;
  }

  static fromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace) {
    const part = node.generatePart(Parts, noWhitespace),
          quantifiers = quantifiersFromQuantifiersNode(quantifiersNode),
          sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifiers(part, quantifiers, Parts);

    return sequenceOfPartsPart;
  }
}

module.exports = SequenceOfPartsPart;

function quantifiersFromQuantifiersNode(quantifiersNode, quantifiers = []) {
  const quantifier = quantifierFromQuantifiersNode(quantifiersNode);

  quantifiers.push(quantifier);

  const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
        quantifiersNodeChildNodesLength =  quantifiersNodeChildNodes.length;

  if (quantifiersNodeChildNodesLength === 2) {
    const secondQuantifiersNodeChildNode = arrayUtil.second(quantifiersNodeChildNodes);

    quantifiersNode = secondQuantifiersNodeChildNode; ///

    quantifiers = quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
  }

  return quantifiers;
}

function quantifierFromQuantifiersNode(quantifiersNode) {
  const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
        firstQuantifiersNodeChildNode = arrayUtil.first(quantifiersNodeChildNodes),
        firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
        quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
