'use strict';

const lexers = require('occam-lexers');

const RuleNamePart = require('../part/nonTerminal/ruleName'),
      arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { BNFLexer } = lexers,
      { first, second } = arrayUtilities,
      { specialSymbols } = BNFLexer,
      { exclamationMark } = specialSymbols;

class RuleNameNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const ruleName = this.getRuleName(),
          lookAhead = this.isLookAhead(),
          ruleNamePart = new RuleNamePart(ruleName, lookAhead, noWhitespace);

    return ruleNamePart;
  }

  getRuleName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent; ///
    
    return ruleName;
  }

  isLookAhead() {
    let lookAhead = false;

    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondChildNodeTerminalNode = secondChildNode.isTerminalNode();

    if (secondChildNodeTerminalNode) {
      const secondChildTerminalNode = secondChildNode,  ///
            secondChildTerminalNodeContent = secondChildTerminalNode.getContent();

      lookAhead = (secondChildTerminalNodeContent === exclamationMark)
    }

    return lookAhead;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RuleNameNode, ruleName, childNodes); }
}

module.exports = RuleNameNode;
