'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      arrayUtilities = require('../utilities/array'),
      customGrammarUtilities = require('../utilities/customGrammar'),
      termDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/term'),
      statementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/statement'),
      expressionDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/expression'),
      metastatementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/metastatement');

const { BNFLexer } = lexers,
      { push } = arrayUtilities,
      { rulesFromBNFs, addQualifiedAndUnqualifiedStatementAndMetastatementRules } = customGrammarUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      defaultCustomGrammarBNFs = [
        termDefaultCustomGrammarBNF,
        expressionDefaultCustomGrammarBNF,
        statementDefaultCustomGrammarBNF,
        metastatementDefaultCustomGrammarBNF
      ],
      defaultCustomGrammarRules = rulesFromBNFs(defaultCustomGrammarBNFs),
      defaultCombinedCustomGrammarsRules = defaultCustomGrammarRules; ///;

class FlorenceParser extends CommonParser {
  static fromBNF(bnf, combinedCustomGrammarsRules = defaultCombinedCustomGrammarsRules) {
    combinedCustomGrammarsRules = addQualifiedAndUnqualifiedStatementAndMetastatementRules(combinedCustomGrammarsRules);  ///

    const tokens = bnfLexer.tokensFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromTokens(tokens),
          rules = BNFParser.generateRules(rulesNode);

    push(rules, combinedCustomGrammarsRules);

    const florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }

  static fromNothing() {
    const florenceParser = FlorenceParser.fromBNF(bnf);

    return florenceParser;
  }
}

Object.assign(FlorenceParser, {
  bnf
});

module.exports = FlorenceParser;
