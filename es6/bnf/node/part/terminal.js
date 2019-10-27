'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../../../common/node/nonTerminal');

const { first } = arrayUtilities;

class TerminalPartNode extends NonTerminalNode {
  generatePart(nonWhitespace, lookAhead) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          node = firstChildNode,  ///
          part = node.generatePart(nonWhitespace, lookAhead)

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(TerminalPartNode, ruleName, childNodes); }
}

module.exports = TerminalPartNode;
