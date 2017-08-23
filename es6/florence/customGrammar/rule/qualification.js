'use strict';

const lexers = require('occam-lexers'),
      necessary = require('necessary');

const BNFParser = require('../../../bnf/parser');

const { BNFLexer } = lexers,
      { array } = necessary,
      { first } = array;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const bnf = `

          qualification ::= ( "by" | "from" ) reference? ;
          
      `,
      lines = bnfLexer.linesFromBNF(bnf),
      rulesNode = bnfParser.rulesNodeFromLines(lines),
      rules = BNFParser.generateRules(rulesNode),
      firstRule = first(rules),
      qualificationRule = firstRule;  ///

module.exports = qualificationRule;
