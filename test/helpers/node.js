"use strict";

const { BasicParser } = require("../../lib");  ///

const { NonTerminalNodeMap } = BasicParser,
      NonTerminalNodes = Object.values(NonTerminalNodeMap);

function checkParentNodes(node, parentNode = null) {
  let checked = true;

  const nodeParentNode = node.getParentNode();

  if (nodeParentNode !== parentNode) {
    checked = false;
  } else {
    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node; ///

      parentNode = node;  ///

      checked = nonTerminalNode.everyChildNode((childNode) => {
        const node = childNode, ///
              checked = checkParentNodes(node, parentNode);

        if (checked) {
          return true;
        }
      });
    }
  }

  return checked;
}

function checkDescendentNodes(node) {
  let checked;

  const descendantNode = node;  ///

  checked = checkDescendentNode(descendantNode);

  if (checked) {
    checked = node.everyDescendantNode((descendantNode) => {
      const checked = checkDescendentNode(descendantNode);

      if (checked) {
        return true;
      }
    });
  }

  return checked;
}

module.exports = {
  checkParentNodes,
  checkDescendentNodes
};

function checkDescendentNode(descendantNode) {
  let checked;

  const node = descendantNode,  ///
        nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    checked = true;
  } else {
    checked = NonTerminalNodes.some((NonTerminalNode) => {
      const nodeNonTerminalNode = NonTerminalNode.prototype.isPrototypeOf(node);

      if (nodeNonTerminalNode) {
        return true;
      }
    });
  }

  return checked;
}
