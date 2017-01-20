'use strict';

var parsers = {
  'Query': require('./lib/query'),
  'BNFParser': require('./lib/bnf/parser'),
  'BasicParser': require('./lib/basic/parser'),
  'FlorenceParser': require('./lib/florence/parser')
};

module.exports = parsers;
