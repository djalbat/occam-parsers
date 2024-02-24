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
        var ruleName = rule.getName(), ambiguous = rule.isAmbiguous();
        var ruleNameLength = ruleName.length;
        if (ambiguous) {
            ruleNameLength++;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBwcnVuZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSkge1xuICBjb25zdCBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSBydWxlcy5yZWR1Y2UoKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBhbWJpZ3VvdXMgPSBydWxlLmlzQW1iaWd1b3VzKCk7XG5cbiAgICAgICAgbGV0IHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuXG4gICAgICAgIGlmIChhbWJpZ3VvdXMpIHtcbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlTmFtZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgIH0sIDApLFxuICAgICAgcnVsZXNTdHJpbmcgPSBydWxlcy5yZWR1Y2UoKHJ1bGVzU3RyaW5nLCBydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lKTtcblxuICAgICAgICBydWxlc1N0cmluZyArPSBydWxlU3RyaW5nO1xuXG4gICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgIH0sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXlxcblxcbi8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU1hcEZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBydWxlTWFwID0ge307XG5cbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBydWxlTWFwW3J1bGVOYW1lXSA9IHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlTWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gZmlyc3RSdWxlOyAgLy8vXG5cbiAgcmV0dXJuIHN0YXJ0UnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVzID0gT2JqZWN0LnZhbHVlcyhydWxlTWFwKSxcbiAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHN0YXJ0UnVsZS5nZXROYW1lKCk7XG5cbiAgc3RhcnRSdWxlID0gcHJ1bmUocnVsZXMsIChydWxlKSA9PiB7ICAvLy9cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHJ1bGVOYW1lICE9PSBzdGFydFJ1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJ1bGVzLnVuc2hpZnQoc3RhcnRSdWxlKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGxldCBzdGFydFJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGlmIChydWxlTmFtZSA9PT0gc3RhcnRSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsOyAvLy9cblxuICBpZiAoc3RhcnRSdWxlID09PSBudWxsKSB7XG4gICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcbiAgfVxuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZXNBc1N0cmluZyxcbiAgcnVsZU1hcEZyb21SdWxlcyxcbiAgc3RhcnRSdWxlRnJvbVJ1bGVzLFxuICBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwLFxuICBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lXG59O1xuIl0sIm5hbWVzIjpbInJ1bGVNYXBGcm9tUnVsZXMiLCJydWxlc0FzU3RyaW5nIiwicnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicHJ1bmUiLCJydWxlcyIsIm11bHRpTGluZSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJhbWJpZ3VvdXMiLCJpc0FtYmlndW91cyIsInJ1bGVOYW1lTGVuZ3RoIiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsInJ1bGVzU3RyaW5nIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicmVwbGFjZSIsInJ1bGVNYXAiLCJmb3JFYWNoIiwiZmlyc3RSdWxlIiwic3RhcnRSdWxlIiwiT2JqZWN0IiwidmFsdWVzIiwic3RhcnRSdWxlTmFtZSIsInVuc2hpZnQiLCJmaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFzRkEsT0FNRTtlQU5GOztJQXBEZ0JBLGdCQUFnQjtlQUFoQkE7O0lBMUJBQyxhQUFhO2VBQWJBOztJQTZDQUMsNEJBQTRCO2VBQTVCQTs7SUFQQUMsa0JBQWtCO2VBQWxCQTs7SUF3QkFDLGtDQUFrQztlQUFsQ0E7Ozt5QkFwRWU7eUJBSUY7QUFGN0IsSUFBUUMsUUFBaUJDLHlCQUFjLENBQS9CRCxPQUFPRSxRQUFVRCx5QkFBYyxDQUF4QkM7QUFJUixTQUFTTixjQUFjTyxLQUFLLEVBQUVDLFNBQVM7SUFDNUMsSUFBTUMsd0JBQXdCRixNQUFNRyxNQUFNLENBQUMsU0FBQ0QsdUJBQXVCRTtRQUM3RCxJQUFNQyxXQUFXRCxLQUFLRSxPQUFPLElBQ3ZCQyxZQUFZSCxLQUFLSSxXQUFXO1FBRWxDLElBQUlDLGlCQUFpQkosU0FBU0ssTUFBTTtRQUVwQyxJQUFJSCxXQUFXO1lBQ2JFO1FBQ0Y7UUFFQVAsd0JBQXdCUyxLQUFLQyxHQUFHLENBQUNWLHVCQUF1Qk87UUFFeEQsT0FBT1A7SUFDVCxHQUFHLElBQ0hXLGNBQWNiLE1BQU1HLE1BQU0sQ0FBQyxTQUFDVSxhQUFhVDtRQUN2QyxJQUFNVSxhQUFhVixLQUFLVyxRQUFRLENBQUNiLHVCQUF1QkQ7UUFFeERZLGVBQWVDO1FBRWYsT0FBT0Q7SUFDVCxHQUFHRyx1QkFBWSxFQUFFQyxPQUFPLENBQUMsU0FBU0QsdUJBQVk7SUFFbEQsT0FBT0g7QUFDVDtBQUVPLFNBQVNyQixpQkFBaUJRLEtBQUs7SUFDcEMsSUFBTWtCLFVBQVUsQ0FBQztJQUVqQmxCLE1BQU1tQixPQUFPLENBQUMsU0FBQ2Y7UUFDYixJQUFNQyxXQUFXRCxLQUFLRSxPQUFPO1FBRTdCWSxPQUFPLENBQUNiLFNBQVMsR0FBR0Q7SUFDdEI7SUFFQSxPQUFPYztBQUNUO0FBRU8sU0FBU3ZCLG1CQUFtQkssS0FBSztJQUN0QyxJQUFNb0IsWUFBWXZCLE1BQU1HLFFBQ2xCcUIsWUFBWUQsV0FBWSxHQUFHO0lBRWpDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTM0IsNkJBQTZCMkIsU0FBUyxFQUFFSCxPQUFPO0lBQzdELElBQU1sQixRQUFRc0IsT0FBT0MsTUFBTSxDQUFDTCxVQUN0Qk0sZ0JBQWdCSCxVQUFVZixPQUFPO0lBRXZDZSxZQUFZdEIsTUFBTUMsT0FBTyxTQUFDSTtRQUN4QixJQUFNQyxXQUFXRCxLQUFLRSxPQUFPO1FBRTdCLElBQUlELGFBQWFtQixlQUFlO1lBQzlCLE9BQU87UUFDVDtJQUNGO0lBRUF4QixNQUFNeUIsT0FBTyxDQUFDSjtJQUVkLE9BQU9yQjtBQUNUO0FBRU8sU0FBU0osbUNBQW1DSSxLQUFLLEVBQUV3QixhQUFhO0lBQ3JFLElBQUlILFlBQVlyQixNQUFNMEIsSUFBSSxDQUFDLFNBQUN0QjtRQUMxQixJQUFNQyxXQUFXRCxLQUFLRSxPQUFPO1FBRTdCLElBQUlELGFBQWFtQixlQUFlO1lBQzlCLE9BQU87UUFDVDtJQUNGLE1BQU0sTUFBTSxHQUFHO0lBRWYsSUFBSUgsY0FBYyxNQUFNO1FBQ3RCQSxZQUFZMUIsbUJBQW1CSztJQUNqQztJQUVBLE9BQU9xQjtBQUNUO0lBRUEsV0FBZTtJQUNiNUIsZUFBQUE7SUFDQUQsa0JBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBRCw4QkFBQUE7SUFDQUUsb0NBQUFBO0FBQ0YifQ==