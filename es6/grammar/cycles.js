'use strict';

const tarjan = require('occam-tarjan');

const parserUtil = require('../util/parser'),
      Production = require('../bnf/production'),
      UnitDefinitionProduction = require('./production/unitDefinition'),
      UnitDefinitionsProduction = require('./production/unitDefinitions'),
      NonUnitDefinitionsProduction = require('./production/nonUnitDefinitions');

const { Graph } = tarjan;

class cycles {
  static eliminate(productions) {
    const graph = graphFromProductions(productions),
          components = graph.generateComponents(),
          nonCyclicProductions = nonCyclicProductionsFromComponents(components, productions);

    productions = productions.map(function(production) {
      const productionName = production.getName(),
            nonCyclicProductionName = productionName, ///
            alreadyNonCyclicProductionName = productionName,  ///
            nonCyclicProduction = parserUtil.findProduction(nonCyclicProductionName, nonCyclicProductions),
            alreadyNonCyclicProduction = parserUtil.findProduction(alreadyNonCyclicProductionName, productions);  ///

      production = nonCyclicProduction || alreadyNonCyclicProduction; ///

      return production;
    });

    return productions;
  }
}

module.exports = cycles;

function graphFromProductions(productions) {
  const graph = new Graph(),
        unitDefinitionsProductions = unitDefinitionsProductionsFromProductions(productions);

  unitDefinitionsProductions.forEach(function(unitDefinitionsProduction) {
    const productionName = unitDefinitionsProduction.getName(),
          productionNames = unitDefinitionsProduction.getProductionNames(),
          unitDefinitionProductionNames = unitDefinitionProductionNamesFromProductionNames(productionNames, unitDefinitionsProductions),
          vertexName = productionName,  ///
          descendantVertexNames = unitDefinitionProductionNames; ///

    graph.addVertex(vertexName, descendantVertexNames);
  });

  return graph;
}

function unitDefinitionsProductionsFromProductions(productions) {
  const unitDefinitionsProductions = productions.reduce(function(unitDefinitionsProductions, production) {
    const unitDefinitionsProduction = UnitDefinitionsProduction.fromProduction(production);

    if (unitDefinitionsProduction !== null) {
      unitDefinitionsProductions.push(unitDefinitionsProduction);
    }

    return unitDefinitionsProductions;
  }, []);

  return unitDefinitionsProductions;
}

function unitDefinitionProductionNamesFromProductionNames(productionNames, unitDefinitionProductions) {
  const unitDefinitionProductionNames = productionNames.reduce(function(unitDefinitionProductionNames, productionName) {
    const unitDefinitionProductionName = productionName,  ///
          unitDefinitionProduction = parserUtil.findProduction(unitDefinitionProductionName, unitDefinitionProductions);
    
    if (unitDefinitionProduction !== null) {
      const unitDefinitionProductionName = productionName;  ///

      unitDefinitionProductionNames.push(unitDefinitionProductionName);
    }    
    
    return unitDefinitionProductionNames;
  }, []);

  return unitDefinitionProductionNames;
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

  if (nonCyclicProduction !== null) { ///
    nonCyclicProductions.push(nonCyclicProduction);
  }
}

function nonCyclicProductionsFromComponent(component, productions, nonCyclicProductions) {
  const unitDefinitionProductions = unitDefinitionProductionsFromComponent(component, productions),
        fixedNonUnitDefinitionsProductions = fixedNonUnitDefinitionsProductionsFromProductions(productions),
        addedNonUnitDefinitionsProductions = [],
        removedUnitDefinitionProductions = [];

  let unitDefinitionProductionsLength = unitDefinitionProductions.length;

  while (unitDefinitionProductionsLength > 0) {
    let unitDefinitionProduction = unitDefinitionProductions.shift(),
        unitDefinitionProductionName = unitDefinitionProduction.getName();

    const removedUnitDefinitionProduction = unitDefinitionProduction; ///

    removedUnitDefinitionProductions.push(removedUnitDefinitionProduction);

    const unitDefinitionProductionUnitDefinitionProductionName = unitDefinitionProduction.getUnitDefinitionProductionName(),
          fixedNonUnitDefinitionsProductionName = unitDefinitionProductionUnitDefinitionProductionName,  ///
          fixedNonUnitDefinitionsProduction = parserUtil.findProduction(fixedNonUnitDefinitionsProductionName, fixedNonUnitDefinitionsProductions),
          addedNonUnitDefinitionsProductionName = unitDefinitionProductionName;  ///

    let addedNonUnitDefinitionsProduction = parserUtil.findProduction(addedNonUnitDefinitionsProductionName, addedNonUnitDefinitionsProductions);

    if (addedNonUnitDefinitionsProduction === null) {
      addedNonUnitDefinitionsProduction = Production.fromProduction(fixedNonUnitDefinitionsProduction);

      addedNonUnitDefinitionsProduction.setName(addedNonUnitDefinitionsProductionName);

      addedNonUnitDefinitionsProductions.push(addedNonUnitDefinitionsProduction);
    } else {
      const fixedNonUnitDefinitionsProductionDefinitions = fixedNonUnitDefinitionsProduction.getDefinitions();

      addedNonUnitDefinitionsProduction.addDefinitions(fixedNonUnitDefinitionsProductionDefinitions);
    }

    const intermediateUnitDefinitionProductionName = unitDefinitionProductionUnitDefinitionProductionName, ///
          intermediateUnitDefinitionProduction = parserUtil.findProduction(intermediateUnitDefinitionProductionName, unitDefinitionProductions);

    if (intermediateUnitDefinitionProduction !== null) {
      const intermediateUnitDefinitionProductionUnitDefinitionProductionName = intermediateUnitDefinitionProduction.getUnitDefinitionProductionName(),
            firstProductionName = unitDefinitionProductionName,  ///
            secondProductionName = intermediateUnitDefinitionProductionUnitDefinitionProductionName,  ///
            unitDefinitionProductionNonCyclic = (firstProductionName !== secondProductionName);

      if (unitDefinitionProductionNonCyclic) {
        unitDefinitionProduction = findUnitDefinitionProduction(firstProductionName, secondProductionName, removedUnitDefinitionProductions);

        if (unitDefinitionProduction === null) {
          unitDefinitionProduction = UnitDefinitionProduction.fromProductionNames(firstProductionName, secondProductionName);

          unitDefinitionProductions.unshift(unitDefinitionProduction);
        }
      }
    }

    unitDefinitionProductionsLength = unitDefinitionProductions.length;
  }

  nonCyclicProductionsFromFixedAndAddedProductions(fixedNonUnitDefinitionsProductions, addedNonUnitDefinitionsProductions, nonCyclicProductions);
}

function nonCyclicProductionsFromFixedAndAddedProductions(fixedNonUnitDefinitionsProductions, addedNonUnitDefinitionsProductions, nonCyclicProductions) {
  fixedNonUnitDefinitionsProductions.forEach(function(fixedNonUnitDefinitionsProduction) {
    const nonCyclicProduction = fixedNonUnitDefinitionsProduction, ///
          nonCyclicProductionName = nonCyclicProduction.getName(),
          addedNonUnitDefinitionsProductionName = nonCyclicProductionName, ///
          addedNonUnitDefinitionsProduction = parserUtil.findProduction(addedNonUnitDefinitionsProductionName, addedNonUnitDefinitionsProductions);

    if (addedNonUnitDefinitionsProduction !== null) {
      const addedNonUnitDefinitionsProductionDefinitions = addedNonUnitDefinitionsProduction.getDefinitions();

      nonCyclicProduction.addDefinitions(addedNonUnitDefinitionsProductionDefinitions);
    }

    const nonCyclicProductionDefinitionsExist = nonCyclicProduction.doDefinitionsExist();

    if (nonCyclicProductionDefinitionsExist) {
      nonCyclicProductions.push(nonCyclicProduction);
    }
  });
}

function unitDefinitionProductionsFromComponent(component, productions, nonCyclicProductions) {
  const unitDefinitionsProductions = unitDefinitionsProductionsFromComponent(component, productions),
        unitDefinitionProductions = unitDefinitionProductionsFromUnitDefinitionsProductions(unitDefinitionsProductions);

  return unitDefinitionProductions;
}

function unitDefinitionsProductionsFromComponent(component, productions) {
  const unitDefinitionsProductions = component.mapVertices(function(vertex) {
    const vertexName = vertex.getName(),
          productionName = vertexName,  ///
          production = parserUtil.findProduction(productionName, productions),
          unitDefinitionsProduction = UnitDefinitionsProduction.fromProduction(production);

    return unitDefinitionsProduction;
  });

  return unitDefinitionsProductions;
}

function fixedNonUnitDefinitionsProductionsFromProductions(productions) {
  const fixedNonUnitDefinitionsProductions = productions.map(function(production) {
    const nonUnitDefinitionsProduction = NonUnitDefinitionsProduction.fromProduction(production),
          fixedNonUnitDefinitionsProduction = nonUnitDefinitionsProduction; ///

    return fixedNonUnitDefinitionsProduction;
  });

  return fixedNonUnitDefinitionsProductions;
}

function unitDefinitionProductionsFromUnitDefinitionsProductions(unitDefinitionsProductions) {
  const unitDefinitionProductions = unitDefinitionsProductions.reduce(function(unitDefinitionProductions, unitDefinitionsProduction) {
    const unitDefinitionsProductionName = unitDefinitionsProduction.getName();
    
    unitDefinitionsProduction.forEachUnitDefinition(function(unitDefinition) {
      const name = unitDefinitionsProductionName, ///
            unitDefinitionProduction = UnitDefinitionProduction.fromNameAndUnitDefinition(name, unitDefinition);

      unitDefinitionProductions.push(unitDefinitionProduction);
    });

    return unitDefinitionProductions;
  }, []);

  return unitDefinitionProductions;
}

function findUnitDefinitionProduction(firstProductionName, secondProductionName, unitDefinitionProductions) {
  let foundUnitDefinitionProduction = null;

  unitDefinitionProductions.some(function(unitDefinitionProduction) {
    const unitDefinitionProductionFound = unitDefinitionProduction.isFoundByProductionNames(firstProductionName, secondProductionName);

    if (unitDefinitionProductionFound) {
      foundUnitDefinitionProduction = unitDefinitionProduction;

      return true;
    }
  });

  const unitDefinitionProduction = foundUnitDefinitionProduction; ///

  return unitDefinitionProduction;
}
