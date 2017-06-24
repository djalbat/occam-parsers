'use strict';

const bnfUtil = require('../../util/bnf'),
      arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    let part = null;

    const childNodes = this.getChildNodes(),
          nodes = childNodes, ///
          quantifiers = quantifiersFromNodes(nodes);

    noWhitespace = noWhitespaceFromNodes(nodes, noWhitespace);

    const nodesLength = nodes.length;
    
    if (nodesLength === 1) {
      const firstNode = arrayUtil.first(nodes),
            node = firstNode;  ///

      part = partFromNode(node, Parts, noWhitespace);
    } else {
      part = partFromNodes(nodes, Parts);
    }
    
    part = partFromPartAndQuantifiers(part, quantifiers, Parts);

    return part;
  }
  
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, PartNode); }
}

module.exports = PartNode;

function noWhitespaceFromNodes(nodes, noWhitespace) {
  const firstNode = arrayUtil.first(nodes),
        firstNodeNoWhitespaceNode = bnfUtil.isNodeNoWhitespaceNode(firstNode);

  if (firstNodeNoWhitespaceNode) {
    noWhitespace = true;

    const begin = 0,
          deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return noWhitespace;
}

function quantifiersFromNodes(nodes) {
  let  quantifiers = [];

  const lastNode = arrayUtil.last(nodes),
        lastNodeQuantifiersNode = bnfUtil.isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    const quantifiersNode = lastNode;  ///

    quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode);

    const begin = -1,
          deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return quantifiers;
}

function partFromNode(node, Parts, noWhitespace) {
  const part = node.generatePart(Parts, noWhitespace);

  return part;
}

function partFromNodes(nodes, Parts) {
  let part = null;

  if (part === null) {
    const ChoiceOfPartsPart = Parts['ChoiceOfPartsPart'],
        choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes, Parts);

    if (choiceOfPartsPart !== null) {
      part = choiceOfPartsPart; ///
    }
  }

  if (part === null) {
    const GroupOfPartsPart = Parts['GroupOfPartsPart'],
        groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes, Parts);

    if (groupOfPartsPart !== null) {
      part = groupOfPartsPart;  ///
    }
  }

  return part;
}

function partFromPartAndQuantifiers(part, quantifiers, Parts) {
  const quantifiersLength = quantifiers.length;

  if (quantifiersLength > 0) {
    const quantifier = quantifiers.shift(),
          sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier, Parts);

    part = sequenceOfPartsPart; ///

    part = partFromPartAndQuantifiers(part, quantifiers, Parts);
  }

  return part;
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
