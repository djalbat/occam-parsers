'use strict';

const ruleNames = require('../ruleNames'),
      bnfUtilities = require('../../utilities/bnf'),
      partUtilities = require('../../utilities/part'),
      arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      OptionalPartPart = require('../part/nonTerminal/optionalPart'),
      GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
      ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
      ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts');

const { first, last } = arrayUtilities,
      { isPartRuleNamePart } = partUtilities,
      { isNodeQuantifierNode, isNodeNoWhitespaceNode, ruleNameFromQuantifierNode } = bnfUtilities,
      { OptionalQuantifierRuleName, OneOrMoreQuantifierRuleName, ZeroOrMoreQuantifierRuleName } = ruleNames;

class PartNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes, noWhitespace);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(PartNode, ruleName, childNodes); }
}

module.exports = PartNode;

function partFromNodes(nodes, noWhitespace) {
  let part = null;

  const nodesLength = nodes.length;

  if (nodesLength === 1) {
    const node = nodes.pop();

    part = node.generatePart(noWhitespace);
  } else {
    const lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);

    if (lastNodeQuantifierNode) {
      const node = nodes.pop();

      noWhitespace = false;

      part = partFromNodes(nodes, noWhitespace);

      const quantifierNode = node,  ///
            ruleName = ruleNameFromQuantifierNode(quantifierNode),
            sequenceOfPartsPart = sequenceOfPartsPartFromPartAndRuleName(part, ruleName);

      part = sequenceOfPartsPart; ///
    } else {
      const firstNodeNoWhitespaceNode = isFirstNodeNoWhitespaceNode(nodes);

      if (firstNodeNoWhitespaceNode) {
        nodes.shift();

        noWhitespace = true;
      }

      part = partFromNodes(nodes, noWhitespace);
    }
  }

  return part;
}

function _partFromNodes(nodes) {
  let part = null;

  if (part === null) {
    const choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes);

    part = choiceOfPartsPart; ///
  }

  if (part === null) {
    const groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes);

    part = groupOfPartsPart;  ///
  }

  return part;
}

function isLastNodeQuantifierNode(nodes) {
  const lastNode = last(nodes),
        lastNodeQuantifierNode = isNodeQuantifierNode(lastNode);

  return lastNodeQuantifierNode;
}

function isFirstNodeNoWhitespaceNode(nodes) {
  const firstNode = first(nodes),
        firstNodeNoWhitespaceNode = isNodeNoWhitespaceNode(firstNode);

  return firstNodeNoWhitespaceNode;
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
