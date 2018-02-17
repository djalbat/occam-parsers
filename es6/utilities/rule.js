'use strict';

function findRuleByName(name, rules) {
  const rule = rules.find(function(rule) {
    const ruleName = rule.getName(),
          found = (ruleName === name);
    
    return found;
  }) || null; ///
  
  return rule;
}

module.exports = {
  findRuleByName: findRuleByName
};
