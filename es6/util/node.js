'use strict';

const TerminalNode = require('../common/node/terminal'),
      NonTerminalNode = require('../common/node/nonTerminal');

class nodeUtil {
  static isNodeTerminalNode(node) {
    const nodeTerminalNode = (node instanceof TerminalNode);

    return nodeTerminalNode;
  }

  static isNodeNonTerminalNode(node) {
    const nodeNonTerminalNode = (node instanceof NonTerminalNode);

    return nodeNonTerminalNode;
  }

  static isNodeNoWhitespaceNode(node) {
    let nodeNoWhitespaceNode = false;
  
    const nodeTerminalNode = nodeUtil.isNodeTerminalNode(node);
  
    if (nodeTerminalNode) {
      const terminalNode = node,
            terminalNodeContent = terminalNode.getContent();
  
      nodeNoWhitespaceNode = (terminalNodeContent === "<NO_WHITESPACE>"); ///
    }
  
    return nodeNoWhitespaceNode;
  }
  
  static isNodeQuantifierNode(node) {
    let nodeQuantifierNode = false;

    const loneGrandChildTerminalNode = nodeUtil.loneGrandChildTerminalNodeFromNode(node);
    
    if (loneGrandChildTerminalNode !== null) {
      const loneGrandChildTerminalNodeContent = loneGrandChildTerminalNode.getContent();

      nodeQuantifierNode = (loneGrandChildTerminalNodeContent === "?") ||
                           (loneGrandChildTerminalNodeContent === "*") ||
                           (loneGrandChildTerminalNodeContent === "+");
    }

    return nodeQuantifierNode;
  }

  static contentFromQuantifierNode(quantifierNode) {
    const quantifierNodeLoneGrandChildTerminalNode = nodeUtil.loneGrandChildTerminalNodeFromNode(quantifierNode),
          quantifierNodeLoneGrandChildTerminalNodeContent = quantifierNodeLoneGrandChildTerminalNode.getContent(),
          content = quantifierNodeLoneGrandChildTerminalNodeContent;  ///

    return content;
  }
  
  static loneGrandChildTerminalNodeFromNode(node) {
    let loneGrandChildTerminalNode = null;

    const nodeNonTerminalNode = nodeUtil.isNodeNonTerminalNode(node);

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes(),
            nonTerminalNodeChildNodesLength = nonTerminalNodeChildNodes.length;

      if (nonTerminalNodeChildNodesLength === 1) {
        const firstNonTerminalNodeChildNode = first(nonTerminalNodeChildNodes),
              firstNonTerminalNodeChildNodeTerminalNode = nodeUtil.isNodeTerminalNode(firstNonTerminalNodeChildNode);
        
        if (firstNonTerminalNodeChildNodeTerminalNode) {
          loneGrandChildTerminalNode = firstNonTerminalNodeChildNode;
        }
      }
    }

    return loneGrandChildTerminalNode;
  }
}

module.exports = nodeUtil;

function first(array) { return array[0]; }
