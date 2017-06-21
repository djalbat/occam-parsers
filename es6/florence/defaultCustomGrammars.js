'use strict';

const metastatementDefaultCustomGrammar = require('./defaultCustomGrammar/metastatement'),
      statementDefaultCustomGrammar = require('./defaultCustomGrammar/statement'),
      termDefaultCustomGrammar = require('./defaultCustomGrammar/term');

const defaultCustomGrammars = [
  metastatementDefaultCustomGrammar,
  statementDefaultCustomGrammar,
  termDefaultCustomGrammar    
];

module.exports = defaultCustomGrammars;
