'use strict';

const lexers = require('occam-lexers');

const partTypes = require('../../partTypes'),
      ruleUtilities = require('../../../utilities/rule'),
      NonTerminalPart = require('../../part/nonTerminal');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { findRuleByName } = ruleUtilities,
      { RuleNamePartType } = partTypes,
      { NO_WHITESPACE, exclamationMark } = specialSymbols;

class RuleNamePart extends NonTerminalPart {
  constructor(ruleName, noWhitespace, lookAhead = false) {
    const type = RuleNamePartType; ///

    super(type);

    this.ruleName = ruleName;

    this.noWhitespace = noWhitespace;

    this.lookAhead = lookAhead;
  }
  
  getRuleName() {
    return this.ruleName;
  }

  getLookAhead() {
    return this.lookAhead;
  }

  isRuleNamePart() {
    const ruleNamePart = true;

    return ruleNamePart;
  }

  setLookAhead(lookAhead) {
    this.lookAhead = lookAhead;
  }

  findRule(configuration) {
    const name = this.ruleName, ///
          rules = configuration.getRules(),
          rule = findRuleByName(name, rules);

    return rule;
  }

  parse(configuration, noWhitespace) {
    let node = null;
    
    const rule = this.findRule(configuration);

    if (rule !== null) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      node = rule.parse(configuration, noWhitespace);
    }

    return node;
  }

  parseRuleWithLookAhead(rule, configuration, noWhitespace, callback) {
    if (rule !== null) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      rule.parseWithLookAhead(configuration, noWhitespace, callback);
    }
  }

  asString() {
    const lookAheadString = this.lookAhead ?
                              exclamationMark :
                                '',
          noWhitespaceString = this.noWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${noWhitespaceString}${this.ruleName}${lookAheadString}`;

    return string;
  }
}

module.exports = RuleNamePart;
