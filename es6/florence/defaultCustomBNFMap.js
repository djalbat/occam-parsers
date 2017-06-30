'use strict';

const defaultMetastatementBNF = require('./defaultCustomBNF/metastatement'),
      defaultStatementBNF = require('./defaultCustomBNF/statement'),
      defaultTermBNF = require('./defaultCustomBNF/term');

const defaultCustomBNFMap = {
  metastatement: defaultMetastatementBNF,
  statement: defaultStatementBNF,
  term: defaultTermBNF
};

module.exports = defaultCustomBNFMap;
