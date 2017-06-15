'use strict';

const nodeUtil = require('../../util/node'),
      arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    let part,
        childNodes = this.getChildNodes();
    
    let firstChildNode = arrayUtil.first(childNodes);
    
    const firstChildNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(firstChildNode);

    if (firstChildNodeNoWhitespaceNode) {
      childNodes = arrayUtil.discardFirst(childNodes);
  
      noWhitespace = true;
    }
    
    const lastChildNode = arrayUtil.last(childNodes);

    firstChildNode = arrayUtil.first(childNodes);
    
    const childNodesLength = childNodes.length;

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
  const firstChildNode = arrayUtil.first(childNodes),
        secondChildNode = arrayUtil.second(childNodes),
        node = firstChildNode,  ///
        quantifiersNode = secondChildNode, ///
        SequenceOfPartsPart = Parts['SequenceOfPartsPart'],
        sequenceOfPartsPart = SequenceOfPartsPart.fromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace),
        part = sequenceOfPartsPart; ///

  return part;
}

