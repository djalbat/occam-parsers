'use strict';

const metastatementDefaultCustomExtendedBNF = require('./defaultCustomExtendedBNF/metastatement'),
      statementDefaultCustomExtendedBNF = require('./defaultCustomExtendedBNF/statement'),
      termDefaultCustomExtendedBNF = require('./defaultCustomExtendedBNF/term');

const defaultCustomExtendedBNFMap = {
  metastatement: metastatementDefaultCustomExtendedBNF,
  statement: statementDefaultCustomExtendedBNF,
  term: termDefaultCustomExtendedBNF
};

module.exports = defaultCustomExtendedBNFMap;
