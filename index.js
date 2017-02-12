'use strict';

var parsers = {
  'Query': require('./lib/query'),
  'BNFParser': require('./lib/bnf/parser'),
  'BasicParser': require('./lib/basic/parser'),
  'FlorenceParser': require('./lib/florence/parser'),
  'ErrorsNode': require('./lib/florence/node/errors'),
  'TerminalNode': require('./lib/common/node/terminal'),
  'NonTerminalNode': require('./lib/common/node/nonTerminal')
};

module.exports = parsers;
