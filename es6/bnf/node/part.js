'use strict';

const nodeUtil = require('../../util/node'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    let part;

    const childNodes = this.getChildNodes();

    if (!noWhitespace) {
      const firstChildNode = first(childNodes),
            firstChildNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(firstChildNode);

      if (firstChildNodeNoWhitespaceNode) {
        const start = 0,
              deleteCount = 1;

        childNodes.splice(start, deleteCount);

        noWhitespace = true;
      }
    }

    const firstChildNode = first(childNodes),
          childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const childNode = firstChildNode; ///

      part = partFromChildNode(childNode, Parts, noWhitespace)
    } else {
      part = partFromChildNodes(childNodes, Parts, noWhitespace)
    }
    
    return part;
  }
  
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, PartNode); }
}

module.exports = PartNode;

function partFromChildNode(childNode, Parts, noWhitespace) {
  const part = childNode.generatePart(Parts, noWhitespace);

  return part;
}

function partFromChildNodes(childNodes, Parts, noWhitespace) {
  const firstChildNode = first(childNodes),
        secondChildNode = second(childNodes),
        node = firstChildNode,  ///
        quantifiersNode = secondChildNode, ///
        sequenceOfPartsPart = sequenceOfPartsPartFromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace),
        part = sequenceOfPartsPart; ///

  return part;
}

function sequenceOfPartsPartFromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace) {
  const part = node.generatePart(Parts, noWhitespace),
        quantifiers = nodeUtil.quantifiersFromQuantifiersNode(quantifiersNode),
        sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifiers(part, quantifiers, Parts);

  return sequenceOfPartsPart;
}

function sequenceOfPartsPartFromPartAndQuantifiers(part, quantifiers, Parts) {
  const quantifier = quantifiers.shift(),
        quantifiersLength = quantifiers.length;

  let sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier, Parts);

  if (quantifiersLength > 0) {
    part = sequenceOfPartsPart; ///

    sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifiers(part, quantifiers, Parts);
  }

  return sequenceOfPartsPart;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier, Parts) {
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

function first(array) { return array[0]; }
function second(array) { return array[1]; }
