'use strict';

const CommonParser = require('../common/parser'),
      ProductionsProduction = require('./production/productions'),
      ProductionProduction = require('./production/production'),
      RulesProduction = require('./production/rules'),
      OrThenRuleProduction = require('./production/orThenRule'),
      PartsProduction = require('./production/parts'),
      PartProduction = require('./production/part');

class BNFParser extends CommonParser {
  static fromNothing() {
    const productionsProduction = new ProductionsProduction(),
          productionProduction = new ProductionProduction(),
          rulesProduction = new RulesProduction(),
          orThenRuleProduction = new OrThenRuleProduction(),
          partsProduction = new PartsProduction(),
          partProduction = new PartProduction(),
          productions = [
            productionsProduction,
            productionProduction,
            rulesProduction,
            orThenRuleProduction,
            partsProduction,
            partProduction
          ],
          bnfParser = new BNFParser(productions);
    
    return bnfParser;
  }
}

module.exports = BNFParser;
