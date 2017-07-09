'use strict';

var parsers = {
  'Rule': require('./lib/bnf/rule'),
  'Definition': require('./lib/bnf/definition'),
  'EpsilonPart': require('./lib/bnf/part/epsilon'),
  'RuleNamePart': require('./lib/bnf/part/ruleName'),
  'BNFParser': require('./lib/bnf/parser'),
  'BasicParser': require('./lib/basic/parser'),
  'FlorenceParser': require('./lib/florence/parser'),
  'CommonParser': require('./lib/common/parser'),
  'TerminalNode': require('./lib/common/node/terminal'),
  'NonTerminalNode': require('./lib/common/node/nonTerminal'),
  'ErrorNode': require('./lib/common/node/terminal/error')
};

module.exports = parsers;
