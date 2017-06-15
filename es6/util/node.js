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
}

module.exports = nodeUtil;
