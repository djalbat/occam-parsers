'use strict';

var parsers = {
  'BasicParser': require('./lib/basic/parser'),
  'FlorenceParser': require('./lib/florence/parser'),
  'ExtendedBNFParser': require('./lib/extendedBNF/parser'),
  'TerminalNode': require('./lib/common/node/terminal'),
  'NonTerminalNode': require('./lib/common/node/nonTerminal'),
  'ErrorNode': require('./lib/common/node/terminal/error')
};

module.exports = parsers;
