'use strict';

const Graph = require('./graph'),
      parserUtil = require('../util/parser'),
      Production = require('../common/production'),
      UnitRuleProduction = require('./production/unitRule'),
      UnitRulesProduction = require('./production/unitRules'),
      NonUnitRulesProduction = require('./production/nonUnitRules');

class cycles {
  static eliminate(productions) {
    const unitRulesProductions = unitRulesProductionsFromProductions(productions),
          graph = Graph.fromUnitRulesProductions(unitRulesProductions),
          components = graph.getComponents(),
          nonCyclicProductions = nonCyclicProductionsFromComponents(components, productions);

    productions = nonCyclicProductions; ///

    return productions;
  }
}

module.exports = cycles;

function unitRulesProductionsFromProductions(productions) {
  const unitRulesProductions = productions.reduce(function(unitRulesProductions, production) {
    const unitRulesProduction = UnitRulesProduction.fromProduction(production);

    if (unitRulesProduction !== null) {
      unitRulesProductions.push(unitRulesProduction);
    }

    return unitRulesProductions;
  }, []);

  return unitRulesProductions;
}

function nonCyclicProductionsFromComponents(components, productions) {
  const nonCyclicProductions = components.reduce(function(nonCyclicProductions, component) {
          const componentNonCyclic = component.isNonCyclic();

          if (componentNonCyclic) {
            nonCyclicProductionFromComponent(component, productions, nonCyclicProductions);
          } else {
            nonCyclicProductionsFromComponent(component, productions, nonCyclicProductions);
          }

          return nonCyclicProductions;
        }, []);

  return nonCyclicProductions;
}

function nonCyclicProductionFromComponent(component, productions, nonCyclicProductions) {
  const firstVertex = component.getFirstVertex(),
        firstVertexName = firstVertex.getName(),
        nonCyclicProductionName = firstVertexName,  ///
        nonCyclicProduction = parserUtil.findProduction(nonCyclicProductionName, productions);

  nonCyclicProductions.push(nonCyclicProduction);
}

function nonCyclicProductionsFromComponent(component, productions, nonCyclicProductions) {
  productions = productionsFromComponent(component, productions); ///

  const fixedProductions = fixedProductionsFromProductions(productions),
        unitRuleProductions = unitRuleProductionsFromProductions(productions),
        removedProductions = [],
        addedProductions = [];

  let unitRuleProductionsLength = unitRuleProductions.length;

  while (unitRuleProductionsLength > 0) {
    let unitRuleProduction = unitRuleProductions.shift(),
        unitRuleProductionName = unitRuleProduction.getName();

    const removedProduction = unitRuleProduction;

    removedProductions.push(removedProduction);

    const unitRuleProductionUnitRuleProductionName = unitRuleProduction.getUnitRuleProductionName(),
          fixedProductionName = unitRuleProductionUnitRuleProductionName,  ///
          addedProductionName = unitRuleProductionName,  ///
          fixedProduction = parserUtil.findProduction(fixedProductionName, fixedProductions);

    let addedProduction = parserUtil.findProduction(addedProductionName, addedProductions);

    if (addedProduction === null) {
      addedProduction = Production.fromProduction(fixedProduction);

      addedProduction.setName(addedProductionName);

      addedProductions.push(addedProduction);
    } else {
      const fixedProductionRules = fixedProduction.getRules();

      addedProduction.concatRules(fixedProductionRules);
    }

    const intermediateProductionName = unitRuleProductionUnitRuleProductionName, ///
          intermediateProduction = parserUtil.findProduction(intermediateProductionName, unitRuleProductions);

    if (intermediateProduction !== null) {
      const intermediateProductionUnitRuleProductionName = intermediateProduction.getUnitRuleProductionName(),
            unitRuleProductionUnitRuleProductionName = intermediateProductionUnitRuleProductionName;  ///

      if (unitRuleProductionName !== unitRuleProductionUnitRuleProductionName) {
        unitRuleProduction = findUnitRuleProduction(unitRuleProductionName, unitRuleProductionUnitRuleProductionName, removedProductions);

        if (unitRuleProduction === null) {
          unitRuleProduction = UnitRuleProduction.fromNameAndUnitRuleProductionName(unitRuleProductionName, unitRuleProductionUnitRuleProductionName);

          unitRuleProductions.unshift(unitRuleProduction);
        }
      }
    }

    unitRuleProductionsLength = unitRuleProductions.length;
  }

  nonCyclicProductionsFromFixedAndAddedProductions(fixedProductions, addedProductions, nonCyclicProductions);
}

function nonCyclicProductionsFromFixedAndAddedProductions(fixedProductions, addedProductions, nonCyclicProductions) {
  fixedProductions.forEach(function(fixedProduction) {
    const nonCyclicProduction = fixedProduction, ///
          nonCyclicProductionName = nonCyclicProduction.getName(),
          addedProductionName = nonCyclicProductionName, ///
          addedProduction = parserUtil.findProduction(addedProductionName, addedProductions);

    if (addedProduction !== null) {
      const addedProductionRules = addedProduction.getRules();

      nonCyclicProduction.concatRules(addedProductionRules);
    }

    nonCyclicProductions.push(nonCyclicProduction);
  });
}

function productionsFromComponent(component, productions) {
  productions = component.mapVertices(function(vertex) {
    const vertexName = vertex.getName(),
          productionName = vertexName,  ///
          production = parserUtil.findProduction(productionName, productions);

    return production;
  });

  return productions;
}

function unitRuleProductionsFromProductions(productions) {
  const unitRuleProductions = productions.reduce(function(unitRuleProductions, production) {
    const name = production.getName(),
          unitRulesProduction = UnitRulesProduction.fromProduction(production);

    unitRulesProduction.forEachUnitRule(function(unitRule) {
      const unitRuleProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);

      unitRuleProductions.push(unitRuleProduction);
    });

    return unitRuleProductions;
  }, []);

  return unitRuleProductions;
}

function fixedProductionsFromProductions(productions) {
  const fixedProductions = productions.map(function(production) {
    const nonUnitProduction = NonUnitRulesProduction.fromProduction(production),
          fixedProduction = nonUnitProduction; ///
    
    return fixedProduction;
  });
  
  return fixedProductions;
}

function findUnitRuleProduction(productionName, unitRuleProductionName, unitRuleProductions) {
  const firstProductionName = productionName, ///
        secondProductionName = unitRuleProductionName;  ///

  let foundUnitRuleProduction = null;

  unitRuleProductions.some(function(unitRuleProduction) {
    const unitRuleProductionFound = unitRuleProduction.isFoundByProductionNames(firstProductionName, secondProductionName);

    if (unitRuleProductionFound) {
      foundUnitRuleProduction = unitRuleProduction;

      return true;
    }
  });

  const unitRuleProduction = foundUnitRuleProduction; ///

  return unitRuleProduction;
}
