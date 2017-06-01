'use strict';

const CommonParser = require('../common/parser'),
      PartProduction = require('./production/part'),
      RuleProduction = require('./production/rule'),
      RulesProduction = require('./production/rules'),
      GroupProduction = require('./production/group'),
      EndOfLineProduction = require('./production/endOfLine'),
      ProductionProduction = require('./production/production'),
      ProductionsProduction = require('./production/productions'),
      NoWhitespaceProduction = require('./production/noWhitespace'),
      ProductionNameProduction = require('./production/productionName'),
      TerminalSymbolProduction = require('./production/terminalSymbol'),
      RegularExpressionProduction = require('./production/regularExpression'),
      SignificantTokenTypeProduction = require('./production/significantTokenType');

class BNFParser extends CommonParser {
  static fromNothing() {
    const partProduction = new PartProduction(),
          ruleProduction = new RuleProduction(),
          rulesProduction = new RulesProduction(),
          groupProduction = new GroupProduction(),
          endOfLineProduction = new EndOfLineProduction(),
          productionProduction = new ProductionProduction(),
          productionsProduction = new ProductionsProduction(),
          noWhitespaceProduction = new NoWhitespaceProduction(),
          productionNameProduction = new ProductionNameProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          significantTokenTypeProduction = new SignificantTokenTypeProduction(),
          productions = [
            productionsProduction,
            productionProduction,
            rulesProduction,
            ruleProduction,
            partProduction,
            groupProduction,
            productionNameProduction,
            regularExpressionProduction,
            significantTokenTypeProduction,
            terminalSymbolProduction,
            noWhitespaceProduction,
            endOfLineProduction
          ],
          bnfParser = new BNFParser(productions);
    
    return bnfParser;
  }
}

module.exports = BNFParser;
