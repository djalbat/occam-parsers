'use strict';

const TerminalNode = require('../../common/node/terminal'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class PartNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    let part;

    const childNodes = this.getChildNodes();

    if (!noWhitespace) {
      const firstChildNode = first(childNodes),
            firstChildNodeNoWhitespaceNode = isNodeNoWhitespaceNode(firstChildNode);

      if (firstChildNodeNoWhitespaceNode) {
        const start = 0,
              deleteCount = 1;

        childNodes.splice(start, deleteCount);

        noWhitespace = firstChildNodeNoWhitespaceNode;  ///
      }
    }

    const childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            childNode = firstChildNode; ///

      part = childNode.generatePart(Parts, noWhitespace)
    }
    
    return part;
  }
  
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, PartNode); }
}

module.exports = PartNode;

function first(array) { return array[0]; }

function isNodeNoWhitespaceNode(node) {
  let nodeNoWhitespaceNode = false;

  const nodeTerminalNode = (node instanceof TerminalNode);

  if (nodeTerminalNode) {
    const terminalNode = node,
          terminalNodeContent = terminalNode.getContent();

    nodeNoWhitespaceNode = (terminalNodeContent === "<NO_WHITESPACE>"); ///
  }

  return nodeNoWhitespaceNode;
}
