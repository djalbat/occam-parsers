'use strict';

const Rule = require('../rule'),
      Production = require('../production'),
      ProductionNamePart = require('../part/productionName');

class UnitProduction extends Production {
  static fromNameAndPartProductionName(name, partProductionName) {
    const productionName = partProductionName,  ///
          noWhitespace = false, ///
          productionNamePart = new ProductionNamePart(productionName, noWhitespace),
          parts = [
            productionNamePart  
          ],
          rule = new Rule(parts),
          rules = [
            rule
          ],
          Node = null,
          unitProduction = new UnitProduction(name, rules, Node);
    
    return unitProduction;          
  }
}

module.exports = UnitProduction;
