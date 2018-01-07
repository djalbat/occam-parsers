'use strict';

const parsers = {
  'Rule': require('./lib/bnf/rule'),
  'parts': require('./lib/bnf/parts'),
  'Definition': require('./lib/bnf/definition'),
  'BNFParser': require('./lib/bnf/parser'),
  'BasicParser': require('./lib/basic/parser'),
  'CommonParser': require('./lib/common/parser'),
  'FlorenceParser': require('./lib/florence/parser'),
  'PlainParser': require('./lib/plain/parser'),
  'MetaJSONParser': require('./lib/metaJSON/parser'),
  'CustomGrammarBNFParser': require('./lib/customGrammarBNF/parser'),
  'CustomGrammarLexicalPatternParser': require('./lib/customGrammarLexicalPattern/parser'),
  'TerminalNode': require('./lib/common/node/terminal'),
  'NonTerminalNode': require('./lib/common/node/nonTerminal')
};

module.exports = parsers;
