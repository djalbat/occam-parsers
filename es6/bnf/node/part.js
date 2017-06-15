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
  let part;

  const firstChildNode = first(childNodes),
        secondChildNode = second(childNodes),
        secondChildNodeQuantifierNode = nodeUtil.isNodeQuantifierNode(secondChildNode);

  if (secondChildNodeQuantifierNode) {
    const node = firstChildNode,  ///
          quantifierNode = secondChildNode;

    part = partFromNodeAndQuantifierNode(node, quantifierNode, Parts, noWhitespace);
  }

  return part;
}

function partFromNodeAndQuantifierNode(node, quantifierNode, Parts, noWhitespace) {
  let part = node.generatePart(Parts, noWhitespace);

  const quantifierNodeContent = nodeUtil.contentFromQuantifierNode(quantifierNode),
        quantifier = quantifierNodeContent; ///

  let Part;

  switch (quantifier) {
    case '+':
      const OneOrMorePartsPart = Parts['OneOrMorePartsPart'];

      Part = OneOrMorePartsPart;
      break;
  }

  part = new Part(part);  ///

  return part;
}

function first(array) { return array[0]; }

function second(array) { return array[1]; }
