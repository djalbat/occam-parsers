"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";
import OptionalPartPart from "../../part/nonTerminal/optionalPart";
import OneOrMorePartsPart from "../../part/nonTerminal/oneOrMoreParts";
import ZeroOrMorePartsPart from "../../part/nonTerminal/zeroOrMoreParts";

import { isNodeQuantifierNode, ruleNameFromQuantifierNode } from "../../utilities/bnf";
import { optionalQuantifierRuleName, oneOrMoreQuantifierRuleName, zeroOrMoreQuantifierRuleName } from "../../ruleNames";

const { last } = arrayUtilities;

export default class PartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(PartBNFNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(PartBNFNode, ruleName, childNodes, precedence); }
}

function partFromNodes(nodes) {
  let part = null;

  const nodesLength = nodes.length;

  if (nodesLength === 1) {
    const node = nodes.pop(),
          lookAhead = false;

    part = node.generatePart(lookAhead);
  } else {
    const lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);

    if (lastNodeQuantifierNode) {
      const node = nodes.pop(),
            quantifierNode = node;  ///

      part = partFromNodes(nodes);

      const ruleName = ruleNameFromQuantifierNode(quantifierNode),
            collectionOfPartsPart = collectionOfPartsPartFromPartAndRuleName(part, ruleName);

      part = collectionOfPartsPart; ///
    } else {
      nodes.shift();

      part = partFromNodes(nodes);
    }
  }

  return part;
}

function isLastNodeQuantifierNode(nodes) {
  const lastNode = last(nodes),
        lastNodeQuantifierNode = isNodeQuantifierNode(lastNode);

  return lastNodeQuantifierNode;
}

function collectionOfPartsPartFromPartAndRuleName(part, ruleName) {
  let collectionOfPartsPart;

  switch (ruleName) {
    case optionalQuantifierRuleName :
      const optionalPartPart = OptionalPartPart.fromPart(part);

      collectionOfPartsPart = optionalPartPart; ///
      break;

    case oneOrMoreQuantifierRuleName :
      const oneOrMorePartsPart = OneOrMorePartsPart.fromPart(part);

      collectionOfPartsPart = oneOrMorePartsPart; ///
      break;

    case zeroOrMoreQuantifierRuleName :
      const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);

      collectionOfPartsPart = zeroOrMorePartsPart;  ///
      break;
  }

  return collectionOfPartsPart;
}
