"use strict";

export function findRuleByName(name, rules) {
  const rule = rules.find((rule) => {
    const ruleName = rule.getName();

    if (ruleName === name) {
      return true;
    }
  }) || null; ///
  
  return rule;
}
