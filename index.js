'use strict';

var parsers = {
  'ErrorNode': require('./lib/bnf/node/error'),
  'BNFParser': require('./lib/bnf/parser'),
  'BasicParser': require('./lib/basic/parser'),
  'GallinaParser': require('./lib/gallina/parser'),
  'FlorenceParser': require('./lib/florence/parser'),
};

module.exports = parsers;
