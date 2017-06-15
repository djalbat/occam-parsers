'use strict';

const nodeUtil = require('../../util/node'),
      arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    let part,
        childNodes = this.getChildNodes(),
        quantifiers = null,
        firstChildNode = arrayUtil.first(childNodes);
    
    const firstChildNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(firstChildNode);

    if (firstChildNodeNoWhitespaceNode) {
      noWhitespace = true;

      childNodes = arrayUtil.discardFirst(childNodes);
      
      firstChildNode = arrayUtil.first(childNodes);
    }
    
    const lastChildNode = arrayUtil.last(childNodes),
          lastChildNodeQuantifiersNode = nodeUtil.isNodeQuantifiersNode(lastChildNode);

    if (lastChildNodeQuantifiersNode) {
      const quantifiersNode = lastChildNode;  ///
      
      quantifiers = nodeUtil.quantifiersFromQuantifiersNode(quantifiersNode);
      
      arrayUtil.discardLast(childNodes);
    }
    
    const remainingChildNode = firstChildNode; ///

    part = remainingChildNode.generatePart(Parts, noWhitespace);
    
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
