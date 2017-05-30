'use strict';

const CommonParser = require('../common/parser'),
      ProductionsProduction = require('./production/productions'),
      ProductionProduction = require('./production/production'),
      ProductionNameProduction = require('./production/productionName'),
      RulesProduction = require('./production/rules'),
      OrThenRuleProduction = require('./production/orThenRule'),
      RuleProduction = require('./production/rule'),
      PartsProduction = require('./production/parts'),
      PartProduction = require('./production/part');

class BNFParser extends CommonParser {
  static fromNothing() {
    const productionsProduction = new ProductionsProduction(),
          productionProduction = new ProductionProduction(),
          productionNameProduction = new ProductionNameProduction(),
          rulesProduction = new RulesProduction(),
          orThenRuleProduction = new OrThenRuleProduction(),
          ruleProduction = new RuleProduction(),
          partsProduction = new PartsProduction(),
          partProduction = new PartProduction(),
          productions = [
            productionsProduction,
            productionProduction,
            productionNameProduction,
            rulesProduction,
            orThenRuleProduction,
            ruleProduction,
            partsProduction,
            partProduction
          ],
          bnfParser = new BNFParser(productions);
    
    return bnfParser;
  }
}

module.exports = BNFParser;
