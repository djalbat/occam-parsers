'use strict';

const nodeUtil = require('../../util/node'),
      arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    let part,
        childNodes = this.getChildNodes();

    if (!noWhitespace) {
      const firstChildNode = first(childNodes),
            firstChildNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(firstChildNode);

      if (firstChildNodeNoWhitespaceNode) {
        childNodes = arrayUtil.discardFirst(childNodes);

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
        sequenceOfPartsPart = nodeUtil.sequenceOfPartsPartFromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace),
        part = sequenceOfPartsPart; ///

  return part;
}

function first(array) { return array[0]; }

function second(array) { return array[1]; }
