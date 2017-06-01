'use strict';

const CommonParser = require('../common/parser'),
      ProductionsProduction = require('./production/productions'),
      ProductionProduction = require('./production/production'),
      ProductionNameProduction = require('./production/productionName'),
      RulesProduction = require('./production/rules'),
      RuleProduction = require('./production/rule'),
      PartProduction = require('./production/part');

class BNFParser extends CommonParser {
  static fromNothing() {
    const productionsProduction = new ProductionsProduction(),
          productionProduction = new ProductionProduction(),
          productionNameProduction = new ProductionNameProduction(),
          rulesProduction = new RulesProduction(),
          ruleProduction = new RuleProduction(),
          partProduction = new PartProduction(),
          productions = [
            productionsProduction,
            productionProduction,
            productionNameProduction,
            rulesProduction,
            ruleProduction,
            partProduction
          ],
          bnfParser = new BNFParser(productions);
    
    return bnfParser;
  }
}

module.exports = BNFParser;
