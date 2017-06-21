'use strict';

const bnfUtil = require('../../util/bnf'),
      arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    let part,
        childNodes = this.getChildNodes(),
        nodes = childNodes; ///
    
    const firstNode = arrayUtil.first(nodes),
          firstNodeNoWhitespaceNode = bnfUtil.isNodeNoWhitespaceNode(firstNode);

    if (firstNodeNoWhitespaceNode) {
      noWhitespace = true;

      nodes = arrayUtil.discardFirst(nodes);
    }

    let  quantifiers = null;

    const lastNode = arrayUtil.last(nodes),
          lastNodeQuantifiersNode = bnfUtil.isNodeQuantifiersNode(lastNode);
    
    if (lastNodeQuantifiersNode) {
      const quantifiersNode = lastNode;  ///
      
      quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode);

      nodes = arrayUtil.discardLast(nodes);
    }
    
    const nodesLength = nodes.length;
    
    if (nodesLength > 1) {
      const ChoiceOfPartsPart = Parts['ChoiceOfPartsPart'],
            choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes, Parts);
      
      if (choiceOfPartsPart !== null) {
        part = choiceOfPartsPart; ///
      } else {
        const GroupOfPartsPart = Parts['GroupOfPartsPart'],
              groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes, Parts);

        part = groupOfPartsPart;  ///
      }
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
