"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    ruleMapFromRules: function() {
        return ruleMapFromRules;
    },
    rulesAsString: function() {
        return rulesAsString;
    },
    rulesFromStartRuleAndRuleMap: function() {
        return rulesFromStartRuleAndRuleMap;
    },
    startRuleFromRules: function() {
        return startRuleFromRules;
    },
    startRuleFromRulesAndStartRuleName: function() {
        return startRuleFromRulesAndStartRuleName;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var first = _necessary.arrayUtilities.first, prune = _necessary.arrayUtilities.prune;
function rulesAsString(rules, multiLine) {
    var maximumRuleNameLength = rules.reduce(function(maximumRuleNameLength, rule) {
        var ruleName = rule.getName(), opacity = rule.getOpacity();
        var ruleNameLength = ruleName.length;
        if (opacity !== null) {
            var opacityLength = opacity.length;
            ruleNameLength += opacityLength;
        }
        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);
        return maximumRuleNameLength;
    }, 0), rulesString = rules.reduce(function(rulesString, rule) {
        var ruleString = rule.asString(maximumRuleNameLength, multiLine);
        rulesString += ruleString;
        return rulesString;
    }, _constants.EMPTY_STRING).replace(/^\n\n/, _constants.EMPTY_STRING);
    return rulesString;
}
function ruleMapFromRules(rules) {
    var ruleMap = {};
    rules.forEach(function(rule) {
        var ruleName = rule.getName();
        ruleMap[ruleName] = rule;
    });
    return ruleMap;
}
function startRuleFromRules(rules) {
    var firstRule = first(rules), startRule = firstRule; ///
    return startRule;
}
function rulesFromStartRuleAndRuleMap(startRule, ruleMap) {
    var rules = Object.values(ruleMap), startRuleName = startRule.getName();
    startRule = prune(rules, function(rule) {
        var ruleName = rule.getName();
        if (ruleName !== startRuleName) {
            return true;
        }
    });
    rules.unshift(startRule);
    return rules;
}
function startRuleFromRulesAndStartRuleName(rules, startRuleName) {
    var startRule = rules.find(function(rule) {
        var ruleName = rule.getName();
        if (ruleName === startRuleName) {
            return true;
        }
    }) || null; ///
    if (startRule === null) {
        startRule = startRuleFromRules(rules);
    }
    return startRule;
}
var _default = {
    rulesAsString: rulesAsString,
    ruleMapFromRules: ruleMapFromRules,
    startRuleFromRules: startRuleFromRules,
    rulesFromStartRuleAndRuleMap: rulesFromStartRuleAndRuleMap,
    startRuleFromRulesAndStartRuleName: startRuleFromRulesAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBwcnVuZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSkge1xuICBjb25zdCBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSBydWxlcy5yZWR1Y2UoKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBvcGFjaXR5ID0gcnVsZS5nZXRPcGFjaXR5KCk7XG5cbiAgICAgICAgbGV0IHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuXG4gICAgICAgIGlmIChvcGFjaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgb3BhY2l0eUxlbmd0aCA9IG9wYWNpdHkubGVuZ3RoO1xuXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggKz0gb3BhY2l0eUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBtYXhpbXVtUnVsZU5hbWVMZW5ndGg7XG4gICAgICB9LCAwKSxcbiAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXMucmVkdWNlKChydWxlc1N0cmluZywgcnVsZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSk7XG5cbiAgICAgICAgcnVsZXNTdHJpbmcgKz0gcnVsZVN0cmluZztcblxuICAgICAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gICAgICB9LCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL15cXG5cXG4vLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBydWxlc1N0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpIHtcbiAgY29uc3QgcnVsZU1hcCA9IHt9O1xuXG4gIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZU1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZTsgIC8vL1xuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICBjb25zdCBydWxlcyA9IE9iamVjdC52YWx1ZXMocnVsZU1hcCksXG4gICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBzdGFydFJ1bGUuZ2V0TmFtZSgpO1xuXG4gIHN0YXJ0UnVsZSA9IHBydW5lKHJ1bGVzLCAocnVsZSkgPT4geyAgLy8vXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGlmIChydWxlTmFtZSAhPT0gc3RhcnRSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBydWxlcy51bnNoaWZ0KHN0YXJ0UnVsZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSkge1xuICBsZXQgc3RhcnRSdWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgPT09IHN0YXJ0UnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgaWYgKHN0YXJ0UnVsZSA9PT0gbnVsbCkge1xuICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyk7XG4gIH1cblxuICByZXR1cm4gc3RhcnRSdWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGVzQXNTdHJpbmcsXG4gIHJ1bGVNYXBGcm9tUnVsZXMsXG4gIHN0YXJ0UnVsZUZyb21SdWxlcyxcbiAgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCxcbiAgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZVxufTtcbiJdLCJuYW1lcyI6WyJydWxlTWFwRnJvbVJ1bGVzIiwicnVsZXNBc1N0cmluZyIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInBydW5lIiwicnVsZXMiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJyZWR1Y2UiLCJydWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwib3BhY2l0eSIsImdldE9wYWNpdHkiLCJydWxlTmFtZUxlbmd0aCIsImxlbmd0aCIsIm9wYWNpdHlMZW5ndGgiLCJNYXRoIiwibWF4IiwicnVsZXNTdHJpbmciLCJydWxlU3RyaW5nIiwiYXNTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJyZXBsYWNlIiwicnVsZU1hcCIsImZvckVhY2giLCJmaXJzdFJ1bGUiLCJzdGFydFJ1bGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzdGFydFJ1bGVOYW1lIiwidW5zaGlmdCIsImZpbmQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0ZBLE9BTUU7ZUFORjs7SUFwRGdCQSxnQkFBZ0I7ZUFBaEJBOztJQTVCQUMsYUFBYTtlQUFiQTs7SUErQ0FDLDRCQUE0QjtlQUE1QkE7O0lBUEFDLGtCQUFrQjtlQUFsQkE7O0lBd0JBQyxrQ0FBa0M7ZUFBbENBOzs7eUJBdEVlO3lCQUlGO0FBRjdCLElBQVFDLFFBQWlCQyx5QkFBYyxDQUEvQkQsT0FBT0UsUUFBVUQseUJBQWMsQ0FBeEJDO0FBSVIsU0FBU04sY0FBY08sS0FBSyxFQUFFQyxTQUFTO0lBQzVDLElBQU1DLHdCQUF3QkYsTUFBTUcsTUFBTSxDQUFDLFNBQUNELHVCQUF1QkU7UUFDN0QsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QkMsVUFBVUgsS0FBS0ksVUFBVTtRQUUvQixJQUFJQyxpQkFBaUJKLFNBQVNLLE1BQU07UUFFcEMsSUFBSUgsWUFBWSxNQUFNO1lBQ3BCLElBQU1JLGdCQUFnQkosUUFBUUcsTUFBTTtZQUVwQ0Qsa0JBQWtCRTtRQUNwQjtRQUVBVCx3QkFBd0JVLEtBQUtDLEdBQUcsQ0FBQ1gsdUJBQXVCTztRQUV4RCxPQUFPUDtJQUNULEdBQUcsSUFDSFksY0FBY2QsTUFBTUcsTUFBTSxDQUFDLFNBQUNXLGFBQWFWO1FBQ3ZDLElBQU1XLGFBQWFYLEtBQUtZLFFBQVEsQ0FBQ2QsdUJBQXVCRDtRQUV4RGEsZUFBZUM7UUFFZixPQUFPRDtJQUNULEdBQUdHLHVCQUFZLEVBQUVDLE9BQU8sQ0FBQyxTQUFTRCx1QkFBWTtJQUVsRCxPQUFPSDtBQUNUO0FBRU8sU0FBU3RCLGlCQUFpQlEsS0FBSztJQUNwQyxJQUFNbUIsVUFBVSxDQUFDO0lBRWpCbkIsTUFBTW9CLE9BQU8sQ0FBQyxTQUFDaEI7UUFDYixJQUFNQyxXQUFXRCxLQUFLRSxPQUFPO1FBRTdCYSxPQUFPLENBQUNkLFNBQVMsR0FBR0Q7SUFDdEI7SUFFQSxPQUFPZTtBQUNUO0FBRU8sU0FBU3hCLG1CQUFtQkssS0FBSztJQUN0QyxJQUFNcUIsWUFBWXhCLE1BQU1HLFFBQ2xCc0IsWUFBWUQsV0FBWSxHQUFHO0lBRWpDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTNUIsNkJBQTZCNEIsU0FBUyxFQUFFSCxPQUFPO0lBQzdELElBQU1uQixRQUFRdUIsT0FBT0MsTUFBTSxDQUFDTCxVQUN0Qk0sZ0JBQWdCSCxVQUFVaEIsT0FBTztJQUV2Q2dCLFlBQVl2QixNQUFNQyxPQUFPLFNBQUNJO1FBQ3hCLElBQU1DLFdBQVdELEtBQUtFLE9BQU87UUFFN0IsSUFBSUQsYUFBYW9CLGVBQWU7WUFDOUIsT0FBTztRQUNUO0lBQ0Y7SUFFQXpCLE1BQU0wQixPQUFPLENBQUNKO0lBRWQsT0FBT3RCO0FBQ1Q7QUFFTyxTQUFTSixtQ0FBbUNJLEtBQUssRUFBRXlCLGFBQWE7SUFDckUsSUFBSUgsWUFBWXRCLE1BQU0yQixJQUFJLENBQUMsU0FBQ3ZCO1FBQzFCLElBQU1DLFdBQVdELEtBQUtFLE9BQU87UUFFN0IsSUFBSUQsYUFBYW9CLGVBQWU7WUFDOUIsT0FBTztRQUNUO0lBQ0YsTUFBTSxNQUFNLEdBQUc7SUFFZixJQUFJSCxjQUFjLE1BQU07UUFDdEJBLFlBQVkzQixtQkFBbUJLO0lBQ2pDO0lBRUEsT0FBT3NCO0FBQ1Q7SUFFQSxXQUFlO0lBQ2I3QixlQUFBQTtJQUNBRCxrQkFBQUE7SUFDQUcsb0JBQUFBO0lBQ0FELDhCQUFBQTtJQUNBRSxvQ0FBQUE7QUFDRiJ9