'use strict';

const termDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/term'),
      statementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/statement'),
      expressionDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/expression'),
      metastatementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/metastatement');

const defaultCustomGrammarBNFs = [
        metastatementDefaultCustomGrammarBNF,
        statementDefaultCustomGrammarBNF,
        expressionDefaultCustomGrammarBNF,
        termDefaultCustomGrammarBNF
      ],
      defaultCustomGrammarBNF = defaultCustomGrammarBNFs.join('');

module.exports = defaultCustomGrammarBNF;
