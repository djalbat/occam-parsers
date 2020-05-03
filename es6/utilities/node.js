"use strict";

import { first } from "../utilities/array";

export function isNodeNullified(node) {
  let nodeNullified = false;

  const nodeNunTerminalNode = node.isNonTerminalNode();

  if (nodeNunTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            childNode = firstChildNode, ///
            childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

        nodeNullified = terminalNodeEpsilonNode; ///
      }
    }
  }

  return nodeNullified;
}
