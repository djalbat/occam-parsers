'use strict';

const termDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/term'),
      statementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/statement'),
      expressionDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/expression'),
      metastatementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/metastatement');

const defaultCustomGrammarBNFs = [
        termDefaultCustomGrammarBNF,
        statementDefaultCustomGrammarBNF,
        expressionDefaultCustomGrammarBNF,
        metastatementDefaultCustomGrammarBNF
      ],
      defaultCustomGrammarBNF = defaultCustomGrammarBNFs.join('');

module.exports = defaultCustomGrammarBNF;
