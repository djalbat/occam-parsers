'use strict';

const ruleNames = require('../ruleNames'),
      bnfUtilities = require('../../utilities/bnf'),
      arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      OptionalPartPart = require('../part/nonTerminal/optionalPart'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
      ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts');

const { last } = arrayUtilities,
      { isNodeQuantifierNode, ruleNameFromQuantifierNode } = bnfUtilities,
      { OptionalQuantifierRuleName, OneOrMoreQuantifierRuleName, ZeroOrMoreQuantifierRuleName } = ruleNames;

class PartNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(PartNode, ruleName, childNodes); }
}

module.exports = PartNode;

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
            sequenceOfPartsPart = sequenceOfPartsPartFromPartAndRuleName(part, ruleName);

      part = sequenceOfPartsPart; ///
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

function sequenceOfPartsPartFromPartAndRuleName(part, ruleName) {
  let sequenceOfPartsPart;

  switch (ruleName) {
    case OptionalQuantifierRuleName :
      const optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart; ///
      break;

    case OneOrMoreQuantifierRuleName :
      const oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart; ///
      break;

    case ZeroOrMoreQuantifierRuleName :
      const zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart;  ///
      break;
  }

  return sequenceOfPartsPart;
}
