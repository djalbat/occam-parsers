'use strict';

const NonTerminalNode = require('../../../common/node/nonTerminal');

class NonTerminalPartNode extends NonTerminalNode {
  generatePart(noWhitespace, lookAhead) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes, lookAhead);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(NonTerminalPartNode, ruleName, childNodes); }
}

module.exports = NonTerminalPartNode;

function partFromNodes(nodes, lookAhead) {
  let part = null;

  const nodesLength = nodes.length;

  if (nodesLength === 1) {
    const node = nodes.pop(),
          noWhitespace = false;

    part = node.generatePart(noWhitespace, lookAhead);
  } else {
    nodes.pop();

    lookAhead = true;

    part = partFromNodes(nodes, lookAhead);
  }

  return part;
}