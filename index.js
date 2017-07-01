'use strict';

var parsers = {
  'cycles': require('./lib/grammar/cycles'),
  'leftRecursion': require('./lib/grammar/leftRecursion'),
  'BasicParser': require('./lib/basic/parser'),
  'FlorenceParser': require('./lib/florence/parser'),
  'ExtendedBNFParser': require('./lib/extendedBNF/parser'),
  'TerminalNode': require('./lib/common/node/terminal'),
  'NonTerminalNode': require('./lib/common/node/nonTerminal'),
  'ErrorNode': require('./lib/common/node/terminal/error')
};

module.exports = parsers;
