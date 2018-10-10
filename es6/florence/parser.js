'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      arrayUtilities = require('../utilities/array'),
      customGrammarUtilities = require('../utilities/customGrammar'),
      defaultCustomGrammarTermBNF = require('./defaultCustomGrammar/termBNF'),
      defaultCustomGrammarExpressionBNF = require('./defaultCustomGrammar/expressionBNF'),
      defaultCustomGrammarStatementBNF = require('./defaultCustomGrammar/statementBNF'),
      defaultCustomGrammarMetastatementBNF = require('./defaultCustomGrammar/metastatementBNF');

const { BNFLexer } = lexers,
      { push } = arrayUtilities,
      { rulesFromBNFs, addQualifiedAndUnqualifiedStatementAndMetastatementRules } = customGrammarUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      defaultCustomGrammarBNFs = [
        defaultCustomGrammarTermBNF,
        defaultCustomGrammarExpressionBNF,
        defaultCustomGrammarStatementBNF, 
        defaultCustomGrammarMetastatementBNF
      ],
      defaultCustomGrammarRules = rulesFromBNFs(defaultCustomGrammarBNFs),
      defaultCombinedCustomGrammarsRules = defaultCustomGrammarRules; ///

class FlorenceParser extends CommonParser {
  static fromCombinedCustomGrammarsRules(combinedCustomGrammarsRules) {
    const florenceParser = FlorenceParser.fromBNF(bnf, combinedCustomGrammarsRules);

    return florenceParser;
  }

  static fromBNF(bnf, combinedCustomGrammarsRules = defaultCombinedCustomGrammarsRules) {
    combinedCustomGrammarsRules = addQualifiedAndUnqualifiedStatementAndMetastatementRules(combinedCustomGrammarsRules);  ///

    const tokens = bnfLexer.tokensFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromTokens(tokens),
          rules = BNFParser.generateRules(rulesNode);

    push(rules, combinedCustomGrammarsRules);

    const florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }

  static fromNothing() { return FlorenceParser.fromBNF(bnf); } ///
}

Object.assign(FlorenceParser, {
  bnf,
  defaultCustomGrammarTermBNF,
  defaultCustomGrammarExpressionBNF,
  defaultCustomGrammarStatementBNF,
  defaultCustomGrammarMetastatementBNF
});

module.exports = FlorenceParser;
