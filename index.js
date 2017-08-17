'use strict';

var parsers = {
  'Rule': require('./lib/bnf/rule'),
  'parts': require('./lib/bnf/parts'),
  'Definition': require('./lib/bnf/definition'),
  'BNFParser': require('./lib/bnf/parser'),
  'BasicParser': require('./lib/basic/parser'),
  'FlorenceParser': require('./lib/florence/parser'),
  'CommonParser': require('./lib/common/parser'),
  'TerminalNode': require('./lib/common/node/terminal'),
  'NonTerminalNode': require('./lib/common/node/nonTerminal')
};

module.exports = parsers;
