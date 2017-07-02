'use strict';

var parsers = {
  'BNFParser': require('./lib/bnf/parser'),
  'BasicParser': require('./lib/basic/parser'),
  'FlorenceParser': require('./lib/florence/parser'),
  'TerminalNode': require('./lib/common/node/terminal'),
  'NonTerminalNode': require('./lib/common/node/nonTerminal'),
  'ErrorNode': require('./lib/common/node/terminal/error'),
  'cycles': require('./lib/grammar/cycles'),
  'leftRecursion': require('./lib/grammar/leftRecursion')
};

module.exports = parsers;
