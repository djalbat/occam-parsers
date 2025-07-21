"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";
import OptionalPartPart from "../../part/nonTerminal/optionalPart";
import OneOrMorePartsPart from "../../part/nonTerminal/oneOrMoreParts";
import ZeroOrMorePartsPart from "../../part/nonTerminal/zeroOrMoreParts";

import { isNodeQuantifierNode, ruleNameFromQuantifierNode } from "../../utilities/bnf";
import { OPTIONAL_QUANTIFIER_RULE_NAME, ONE_OR_MORE_QUANTIFIER_RULE_NAME, ZERO_OR_MORE_QUANTIFIER_RULE_NAME } from "../../ruleNames";

const { last } = arrayUtilities;

export default class PartBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes);

    return part;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PartBNFNode, ruleName, childNodes, opacity, precedence); }
}

function partFromNodes(nodes) {
  let part;

  const nodesLength = nodes.length;

  if (nodesLength === 1) {
    const node = nodes.pop(),
          callAhead = false;

    part = node.generatePart(callAhead);
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
    case OPTIONAL_QUANTIFIER_RULE_NAME :
      const optionalPartPart = OptionalPartPart.fromPart(part);

      collectionOfPartsPart = optionalPartPart; ///
      break;

    case ONE_OR_MORE_QUANTIFIER_RULE_NAME :
      const oneOrMorePartsPart = OneOrMorePartsPart.fromPart(part);

      collectionOfPartsPart = oneOrMorePartsPart; ///
      break;

    case ZERO_OR_MORE_QUANTIFIER_RULE_NAME :
      const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);

      collectionOfPartsPart = zeroOrMorePartsPart;  ///
      break;
  }

  return collectionOfPartsPart;
}
