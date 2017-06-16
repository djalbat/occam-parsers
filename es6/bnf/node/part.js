'use strict';

const nodeUtil = require('../../util/node'),
      arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    let part,
        childNodes = this.getChildNodes(),
        nodes = childNodes; ///
    
    const firstNode = arrayUtil.first(nodes),
          firstNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(firstNode);

    if (firstNodeNoWhitespaceNode) {
      noWhitespace = true;

      nodes = arrayUtil.discardFirst(nodes);
    }

    let  quantifiers = null;

    const lastNode = arrayUtil.last(nodes),
          lastNodeQuantifiersNode = nodeUtil.isNodeQuantifiersNode(lastNode);
    
    if (lastNodeQuantifiersNode) {
      const quantifiersNode = lastNode;  ///
      
      quantifiers = nodeUtil.quantifiersFromQuantifiersNode(quantifiersNode);

      nodes = arrayUtil.discardLast(nodes);
    }
    
    const nodesLength = nodes.length;
    
    if (nodesLength > 1) {
      const GroupOfPartsPart = Parts['GroupOfPartsPart'],
            groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes, Parts);
      
      part = groupOfPartsPart;  ///
    } else {
      const firstNode = arrayUtil.first(nodes),
            remainingNode = firstNode;  ///
      
      part = remainingNode.generatePart(Parts, noWhitespace);
    }
    
    if (quantifiers !== null) {
      const SequenceOfPartsPart = Parts['SequenceOfPartsPart'],
            sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifiers(part, quantifiers, Parts);
      
      part = sequenceOfPartsPart; ///
    }

    return part;
  }
  
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, PartNode); }
}

module.exports = PartNode;
