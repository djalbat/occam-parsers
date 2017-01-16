'use strict';

var parsers = {
  'BNFParser': require('./lib/bnf/parser'),
  'BasicParser': require('./lib/basic/parser'),
  'GallinaParser': require('./lib/gallina/parser'),
  'FlorenceParser': require('./lib/florence/parser')
};

module.exports = parsers;
