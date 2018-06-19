'use strict';

const lexers = require('occam-lexers');

const NonTerminalPart = require('../../part/nonTerminal'),
      ruleUtilities = require('../../../utilities/rule');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { NO_WHITESPACE } = specialSymbols,
      { findRuleByName } = ruleUtilities;

const type = 'RuleName';

class RuleNamePart extends NonTerminalPart {
  constructor(ruleName, noWhitespace) {
    super(type);

    this.ruleName = ruleName;
    
    this.noWhitespace = noWhitespace;
  }
  
  getRuleName() {
    return this.ruleName;
  }
  
  parse(configuration, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let nodeOrNodes = null;
    
    const name = this.ruleName, ///
          rules = configuration.getRules(),
          rule = findRuleByName(name, rules);

    if (rule !== null) {
      nodeOrNodes = rule.parse(configuration, noWhitespace);
    }

    return nodeOrNodes;
  }

  asString() {
    const noWhitespaceString = this.noWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${noWhitespaceString}${this.ruleName}`;

    return string;
  }
}

Object.assign(RuleNamePart, {
  type
});

module.exports = RuleNamePart;
