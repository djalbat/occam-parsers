'use strict';

const Graph = require('./graph'),
      arrayUtil = require('../util/array'),
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

  const unitRuleProductions = unitRuleProductionsFromProductions(productions),
        nonUnitRulesProductions = nonUnitRulesProductionsFromProductions(productions),
        removedUnitRuleProductions = [],
        addedNonUnitRulesProductions = [];

  let unitRuleProductionsLength = unitRuleProductions.length;

  while (unitRuleProductionsLength > 0) {
    const removedUnitRuleProduction = unitRuleProductions.shift();

    removedUnitRuleProductions.push(removedUnitRuleProduction);

    const removedUnitRuleProductionName = removedUnitRuleProduction.getName(),
          removedUnitRuleProductionUnitRuleProductionName = removedUnitRuleProduction.getUnitRuleProductionName(),
          nonUnitRulesProductionName = removedUnitRuleProductionUnitRuleProductionName,  ///
          nonUnitRulesProduction = parserUtil.findProduction(nonUnitRulesProductionName, nonUnitRulesProductions),
          nonUnitRulesProductionRules = nonUnitRulesProduction.getRules(),
          addedNonUnitRulesProductionName = removedUnitRuleProductionName,  ///
          addedNonUnitRulesProductionRules = nonUnitRulesProductionRules; ///

    let addedNonUnitRulesProduction = parserUtil.findProduction(addedNonUnitRulesProductionName, addedNonUnitRulesProductions);

    if (addedNonUnitRulesProduction === null) {
      const removedUnitRuleProductionNode = removedUnitRuleProduction.getNode(),
            addedNonUnitRulesProductionNode = removedUnitRuleProductionNode;

      addedNonUnitRulesProduction = new Production(addedNonUnitRulesProductionName, addedNonUnitRulesProductionRules, addedNonUnitRulesProductionNode);

      addedNonUnitRulesProductions.push(addedNonUnitRulesProduction);
    } else {
      addedNonUnitRulesProduction.concatRules(nonUnitRulesProductionRules);
    }

    let unitRuleProductionName = removedUnitRuleProductionUnitRuleProductionName, ///
        unitRuleProduction = parserUtil.findProduction(unitRuleProductionName, unitRuleProductions);

    if (unitRuleProduction !== null) {
      const unitRuleProductionUnitRuleProductionName = unitRuleProduction.getUnitRuleProductionName();

      unitRuleProductionName = removedUnitRuleProductionName; ///

      if (unitRuleProductionName !== unitRuleProductionUnitRuleProductionName) {
        unitRuleProduction = findUnitRuleProduction(unitRuleProductionName, unitRuleProductionUnitRuleProductionName, removedUnitRuleProductions);

        if (unitRuleProduction === null) {
          unitRuleProduction = UnitRuleProduction.fromNameAndUnitRuleProductionName(unitRuleProductionName, unitRuleProductionUnitRuleProductionName);

          unitRuleProductions.unshift(unitRuleProduction);
        }
      }
    }

    unitRuleProductionsLength = unitRuleProductions.length;
  }

  nonCyclicProductionsFromFixedAndAddedNonUnitRulesProductions(nonUnitRulesProductions, addedNonUnitRulesProductions, nonCyclicProductions);
}

function nonCyclicProductionsFromFixedAndAddedNonUnitRulesProductions(fixedNonUnitRulesProductions, addedNonUnitRulesProductions, nonCyclicProductions) {
  fixedNonUnitRulesProductions.forEach(function(fixedNonUnitRulesProduction) {
    const nonCyclicProduction = fixedNonUnitRulesProduction, ///
          nonCyclicProductionName = nonCyclicProduction.getName(),
          addedNonUnitRulesProductionName = nonCyclicProductionName, ///
          addedNonUnitRulesProduction = parserUtil.findProduction(addedNonUnitRulesProductionName, addedNonUnitRulesProductions);

    if (addedNonUnitRulesProduction !== null) {
      const addedNonUnitRulesProductionRules = addedNonUnitRulesProduction.getRules();

      nonCyclicProduction.concatRules(addedNonUnitRulesProductionRules);
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
          unitRulesProduction = UnitRulesProduction.fromProduction(production),
          unitRulesProductionUnitRuleProductions = unitRulesProduction.mapUnitRules(function(unitRule) {
            const unitRulesProductionUnitRuleProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);
            
            return unitRulesProductionUnitRuleProduction;
          });

    unitRuleProductions = unitRuleProductions.concat(unitRulesProductionUnitRuleProductions);

    return unitRuleProductions;
  }, []);

  return unitRuleProductions;
}

function nonUnitRulesProductionsFromProductions(productions) {
  const nonUnitProductions = productions.map(function(production) {
    const nonUnitProduction = NonUnitRulesProduction.fromProduction(production);
    
    return nonUnitProduction;
  });
  
  return nonUnitProductions;
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