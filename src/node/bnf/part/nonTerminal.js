"use strict";

import NonTerminalNode from "../../../node/nonTerminal";

export default class NonTerminalPartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes, lookAhead);

    return part;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(NonTerminalPartBNFNode, ruleName, childNodes, ambiguous); }
}

function partFromNodes(nodes, lookAhead) {
  let part = null;

  const nodesLength = nodes.length;

  if (nodesLength === 1) {
    const node = nodes.pop();

    part = node.generatePart(lookAhead);
  } else {
    nodes.pop();

    lookAhead = true;

    part = partFromNodes(nodes, lookAhead);
  }

  return part;
}
