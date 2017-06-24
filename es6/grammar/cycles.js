'use strict';

const tarjan = require('occam-tarjan');

const parserUtil = require('../util/parser'),
      Rule = require('../extendedBNF/rule'),
      UnitRule = require('./rule/unit'),
      UnitsRule = require('./rule/units'),
      FixedRule = require('./rule/fixed'),
      NonCyclicRule = require('./rule/nonCyclic');

const { Graph } = tarjan;

class cycles {
  static eliminate(rules) {
    const graph = graphFromRules(rules),
          components = graph.generateComponents(),
          nonCyclicRules = nonCyclicRulesFromComponents(components, rules);

    rules = rules.map(function(rule) {
      const ruleName = rule.getName(),
            nonCyclicRuleName = ruleName, ///
            nonCyclicRule = parserUtil.findRule(nonCyclicRuleName, nonCyclicRules);
      
      if (nonCyclicRule !== null) {
        rule = nonCyclicRule; ///
      } else {
        const alreadyNonCyclicRuleName = ruleName,  ///
              alreadyNonCyclicRule = parserUtil.findRule(alreadyNonCyclicRuleName, rules);  ///

        rule = alreadyNonCyclicRule; ///
      }

      return rule;
    });

    return rules;
  }
}

module.exports = cycles;

function graphFromRules(rules) {
  const graph = new Graph(),
        unitsRules = unitsRulesFromRules(rules);

  unitsRules.forEach(function(unitsRule) {
    const ruleName = unitsRule.getName(),
          unitDefinitionsRuleNames = unitsRule.getUnitDefinitionRuleNames(),
          vertexName = ruleName,  ///
          descendantVertexNames = unitDefinitionsRuleNames; ///

    graph.addVertex(vertexName, descendantVertexNames);
  });

  return graph;
}

function unitsRulesFromRules(rules) {
  const unitsRules = rules.reduce(function(unitsRules, rule) {
    const unitsRule = UnitsRule.fromRule(rule);

    if (unitsRule !== null) {
      unitsRules.push(unitsRule);
    }

    return unitsRules;
  }, []);

  return unitsRules;
}

function nonCyclicRulesFromComponents(components, rules) {
  const nonCyclicRules = components.reduce(function(nonCyclicRules, component) {
          const componentNonCyclic = component.isNonCyclic();

          if (componentNonCyclic) {
            nonCyclicRuleFromComponent(component, rules, nonCyclicRules);
          } else {
            nonCyclicRulesFromComponent(component, rules, nonCyclicRules);
          }

          return nonCyclicRules;
        }, []);

  return nonCyclicRules;
}

function nonCyclicRuleFromComponent(component, rules, nonCyclicRules) {
  const firstVertexName = component.getFirstVertexName(),
        ruleName = firstVertexName,  ///
        rule = parserUtil.findRule(ruleName, rules);

  if (rule !== null) {
    const nonCyclicRule = NonCyclicRule.fromRule(rule);

    nonCyclicRules.push(nonCyclicRule);
  }
}

function nonCyclicRulesFromComponent(component, rules, nonCyclicRules) {
  const unitRules = unitRulesFromComponent(component, rules),
        fixedRules = fixedRulesFromComponent(component, rules),
        addedRules = addedRulesFromUnitRulesAndFixedRules(unitRules, fixedRules);

  nonCyclicRulesFromFixedRulesAndAddedRules(fixedRules, addedRules, nonCyclicRules);
}

function addedRulesFromUnitRulesAndFixedRules(unitRules, fixedRules) {
  const addedRules = [],
        removedUnitRules = [];

  let unitRulesLength = unitRules.length;

  while (unitRulesLength > 0) {
    let unitRule = unitRules.shift(),
        unitRuleName = unitRule.getName();

    const removedUnitRule = unitRule; ///

    removedUnitRules.push(removedUnitRule);

    const unitRuleUnitRuleName = unitRule.getUnitRuleName(),
          fixedRuleName = unitRuleUnitRuleName,  ///
          fixedRule = parserUtil.findRule(fixedRuleName, fixedRules),
          addedRuleName = unitRuleName;  ///

    let addedRule = parserUtil.findRule(addedRuleName, addedRules);

    if (addedRule === null) {
      addedRule = Rule.fromRule(fixedRule);

      addedRule.setName(addedRuleName);

      addedRules.push(addedRule);
    } else {
      const fixedRuleDefinitions = fixedRule.getDefinitions();

      addedRule.addDefinitions(fixedRuleDefinitions);
    }

    const intermediateUnitRuleName = unitRuleUnitRuleName, ///
          intermediateUnitRule = parserUtil.findRule(intermediateUnitRuleName, unitRules);

    if (intermediateUnitRule !== null) {
      const intermediateUnitRuleUnitRuleName = intermediateUnitRule.getUnitRuleName(),
            firstRuleName = unitRuleName,  ///
            secondRuleName = intermediateUnitRuleUnitRuleName,  ///
            unitRuleNonCyclic = (firstRuleName !== secondRuleName);

      if (unitRuleNonCyclic) {
        unitRule = findUnitRule(firstRuleName, secondRuleName, removedUnitRules);

        if (unitRule === null) {
          unitRule = UnitRule.fromRuleNames(firstRuleName, secondRuleName);

          unitRules.unshift(unitRule);
        }
      }
    }

    unitRulesLength = unitRules.length;
  }

  return addedRules;
}

function nonCyclicRulesFromFixedRulesAndAddedRules(fixedRules, addedRules, nonCyclicRules) {
  fixedRules.forEach(function(fixedRule) {
    const nonCyclicRule = fixedRule, ///
          nonCyclicRuleName = nonCyclicRule.getName(),
          addedRuleName = nonCyclicRuleName, ///
          addedRule = parserUtil.findRule(addedRuleName, addedRules);

    if (addedRule !== null) {
      const addedRuleDefinitions = addedRule.getDefinitions();

      nonCyclicRule.addDefinitions(addedRuleDefinitions);
    }

    const nonCyclicRuleDefinitionsExist = nonCyclicRule.doDefinitionsExist();

    if (nonCyclicRuleDefinitionsExist) {
      nonCyclicRules.push(nonCyclicRule);
    }
  });
}

function unitRulesFromComponent(component, rules) {
  const componentVertexNames = component.getVertexNames(),
        unitsRules = unitsRulesFromComponent(component, rules),
        ruleNames = componentVertexNames,  ///
        unitRules = unitRulesFromUnitsRulesAndRuleNames(unitsRules, ruleNames);

  return unitRules;
}

function unitsRulesFromComponent(component, rules) {
  const unitsRules = component.reduceVertexNames(function(unitsRules, vertexName) {
    const ruleName = vertexName,  ///
          rule = parserUtil.findRule(ruleName, rules),
          unitsRule = UnitsRule.fromRule(rule);

    if (unitsRule !== null) {
      unitsRules.push(unitsRule);
    }

    return unitsRules;
  }, []);

  return unitsRules;
}

function unitRulesFromUnitsRulesAndRuleNames(unitsRules, ruleNames) {
  const unitRules = unitsRules.reduce(function(unitRules, unitsRule) {
    const unitsRuleName = unitsRule.getName();

    unitsRule.forEachUnitDefinition(function(unitDefinition) {
      const name = unitsRuleName, ///
            unitRule = UnitRule.fromNameAndUnitDefinition(name, unitDefinition),
            unitRuleNotCyclic = unitRule.isNotCyclic(),
            unitRuleIncludedInRuleNames = unitRule.isIncludedInRuleNames(ruleNames);
      
      if (unitRuleNotCyclic && unitRuleIncludedInRuleNames) {
        unitRules.push(unitRule);
      }
    });

    return unitRules;
  }, []);

  return unitRules;
}

function fixedRulesFromComponent(component, rules) {
  const componentVertexNames = component.getVertexNames(),
        ruleNames = componentVertexNames, ///
        fixedRules = component.mapVertexNames(function(vertexName) {
    const ruleName = vertexName,  ///
          rule = parserUtil.findRule(ruleName, rules),
          fixedRule = FixedRule.fromRuleAndRuleNames(rule, ruleNames);

    return fixedRule;
  });

  return fixedRules;
}

function findUnitRule(firstRuleName, secondRuleName, unitRules) {
  let foundUnitRule = null;

  unitRules.some(function(unitRule) {
    const unitRuleFound = unitRule.isFoundByRuleNames(firstRuleName, secondRuleName);

    if (unitRuleFound) {
      foundUnitRule = unitRule;

      return true;
    }
  });

  const unitRule = foundUnitRule; ///

  return unitRule;
}
