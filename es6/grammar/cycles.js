'use strict';

const tarjan = require('occam-tarjan');

const parserUtil = require('../util/parser'),
      Production = require('../extendedBNF/production'),
      UnitProduction = require('./production/unit'),
      UnitsProduction = require('./production/units'),
      FixedProduction = require('./production/fixed'),
      NonCyclicProduction = require('./production/nonCyclic');

const { Graph } = tarjan;

class cycles {
  static eliminate(productions) {
    const graph = graphFromProductions(productions),
          components = graph.generateComponents(),
          nonCyclicProductions = nonCyclicProductionsFromComponents(components, productions);

    productions = productions.map(function(production) {
      const productionName = production.getName(),
            nonCyclicProductionName = productionName, ///
            nonCyclicProduction = parserUtil.findProduction(nonCyclicProductionName, nonCyclicProductions);
      
      if (nonCyclicProduction !== null) {
        production = nonCyclicProduction; ///
      } else {
        const alreadyNonCyclicProductionName = productionName,  ///
              alreadyNonCyclicProduction = parserUtil.findProduction(alreadyNonCyclicProductionName, productions);  ///

        production = alreadyNonCyclicProduction; ///
      }

      return production;
    });

    return productions;
  }
}

module.exports = cycles;

function graphFromProductions(productions) {
  const graph = new Graph(),
        unitsProductions = unitsProductionsFromProductions(productions);

  unitsProductions.forEach(function(unitsProduction) {
    const productionName = unitsProduction.getName(),
          unitDefinitionsProductionNames = unitsProduction.getUnitDefinitionProductionNames(),
          vertexName = productionName,  ///
          descendantVertexNames = unitDefinitionsProductionNames; ///

    graph.addVertex(vertexName, descendantVertexNames);
  });

  return graph;
}

function unitsProductionsFromProductions(productions) {
  const unitsProductions = productions.reduce(function(unitsProductions, production) {
    const unitsProduction = UnitsProduction.fromProduction(production);

    if (unitsProduction !== null) {
      unitsProductions.push(unitsProduction);
    }

    return unitsProductions;
  }, []);

  return unitsProductions;
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
  const firstVertexName = component.getFirstVertexName(),
        productionName = firstVertexName,  ///
        production = parserUtil.findProduction(productionName, productions);

  if (production !== null) {
    const nonCyclicProduction = NonCyclicProduction.fromProduction(production);

    nonCyclicProductions.push(nonCyclicProduction);
  }
}

function nonCyclicProductionsFromComponent(component, productions, nonCyclicProductions) {
  const unitProductions = unitProductionsFromComponent(component, productions),
        fixedProductions = fixedProductionsFromComponent(component, productions),
        addedProductions = addedProductionsFromUnitProductionsAndFixedProductions(unitProductions, fixedProductions);

  nonCyclicProductionsFromFixedProductionsAndAddedProductions(fixedProductions, addedProductions, nonCyclicProductions);
}

function addedProductionsFromUnitProductionsAndFixedProductions(unitProductions, fixedProductions) {
  const addedProductions = [],
        removedUnitProductions = [];

  let unitProductionsLength = unitProductions.length;

  while (unitProductionsLength > 0) {
    let unitProduction = unitProductions.shift(),
        unitProductionName = unitProduction.getName();

    const removedUnitProduction = unitProduction; ///

    removedUnitProductions.push(removedUnitProduction);

    const unitProductionUnitProductionName = unitProduction.getUnitProductionName(),
          fixedProductionName = unitProductionUnitProductionName,  ///
          fixedProduction = parserUtil.findProduction(fixedProductionName, fixedProductions),
          addedProductionName = unitProductionName;  ///

    let addedProduction = parserUtil.findProduction(addedProductionName, addedProductions);

    if (addedProduction === null) {
      addedProduction = Production.fromProduction(fixedProduction);

      addedProduction.setName(addedProductionName);

      addedProductions.push(addedProduction);
    } else {
      const fixedProductionDefinitions = fixedProduction.getDefinitions();

      addedProduction.addDefinitions(fixedProductionDefinitions);
    }

    const intermediateUnitProductionName = unitProductionUnitProductionName, ///
          intermediateUnitProduction = parserUtil.findProduction(intermediateUnitProductionName, unitProductions);

    if (intermediateUnitProduction !== null) {
      const intermediateUnitProductionUnitProductionName = intermediateUnitProduction.getUnitProductionName(),
            firstProductionName = unitProductionName,  ///
            secondProductionName = intermediateUnitProductionUnitProductionName,  ///
            unitProductionNonCyclic = (firstProductionName !== secondProductionName);

      if (unitProductionNonCyclic) {
        unitProduction = findUnitProduction(firstProductionName, secondProductionName, removedUnitProductions);

        if (unitProduction === null) {
          unitProduction = UnitProduction.fromProductionNames(firstProductionName, secondProductionName);

          unitProductions.unshift(unitProduction);
        }
      }
    }

    unitProductionsLength = unitProductions.length;
  }

  return addedProductions;
}

function nonCyclicProductionsFromFixedProductionsAndAddedProductions(fixedProductions, addedProductions, nonCyclicProductions) {
  fixedProductions.forEach(function(fixedProduction) {
    const nonCyclicProduction = fixedProduction, ///
          nonCyclicProductionName = nonCyclicProduction.getName(),
          addedProductionName = nonCyclicProductionName, ///
          addedProduction = parserUtil.findProduction(addedProductionName, addedProductions);

    if (addedProduction !== null) {
      const addedProductionDefinitions = addedProduction.getDefinitions();

      nonCyclicProduction.addDefinitions(addedProductionDefinitions);
    }

    const nonCyclicProductionDefinitionsExist = nonCyclicProduction.doDefinitionsExist();

    if (nonCyclicProductionDefinitionsExist) {
      nonCyclicProductions.push(nonCyclicProduction);
    }
  });
}

function unitProductionsFromComponent(component, productions) {
  const componentVertexNames = component.getVertexNames(),
        unitsProductions = unitsProductionsFromComponent(component, productions),
        productionNames = componentVertexNames,  ///
        unitProductions = unitProductionsFromUnitsProductionsAndProductionNames(unitsProductions, productionNames);

  return unitProductions;
}

function unitsProductionsFromComponent(component, productions) {
  const unitsProductions = component.reduceVertexNames(function(unitsProductions, vertexName) {
    const productionName = vertexName,  ///
          production = parserUtil.findProduction(productionName, productions),
          unitsProduction = UnitsProduction.fromProduction(production);

    if (unitsProduction !== null) {
      unitsProductions.push(unitsProduction);
    }

    return unitsProductions;
  }, []);

  return unitsProductions;
}

function unitProductionsFromUnitsProductionsAndProductionNames(unitsProductions, productionNames) {
  const unitProductions = unitsProductions.reduce(function(unitProductions, unitsProduction) {
    const unitsProductionName = unitsProduction.getName();

    unitsProduction.forEachUnitDefinition(function(unitDefinition) {
      const name = unitsProductionName, ///
            unitProduction = UnitProduction.fromNameAndUnitDefinition(name, unitDefinition),
            unitProductionNotCyclic = unitProduction.isNotCyclic(),
            unitProductionIncludedInProductionNames = unitProduction.isIncludedInProductionNames(productionNames);
      
      if (unitProductionNotCyclic && unitProductionIncludedInProductionNames) {
        unitProductions.push(unitProduction);
      }
    });

    return unitProductions;
  }, []);

  return unitProductions;
}

function fixedProductionsFromComponent(component, productions) {
  const componentVertexNames = component.getVertexNames(),
        productionNames = componentVertexNames, ///
        fixedProductions = component.mapVertexNames(function(vertexName) {
    const productionName = vertexName,  ///
          production = parserUtil.findProduction(productionName, productions),
          fixedProduction = FixedProduction.fromProductionAndProductionNames(production, productionNames);

    return fixedProduction;
  });

  return fixedProductions;
}

function findUnitProduction(firstProductionName, secondProductionName, unitProductions) {
  let foundUnitProduction = null;

  unitProductions.some(function(unitProduction) {
    const unitProductionFound = unitProduction.isFoundByProductionNames(firstProductionName, secondProductionName);

    if (unitProductionFound) {
      foundUnitProduction = unitProduction;

      return true;
    }
  });

  const unitProduction = foundUnitProduction; ///

  return unitProduction;
}
