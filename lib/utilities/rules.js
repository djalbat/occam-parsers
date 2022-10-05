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
    rulesAsString: function() {
        return rulesAsString;
    },
    ruleMapFromRules: function() {
        return ruleMapFromRules;
    },
    startRuleFromRules: function() {
        return startRuleFromRules;
    },
    rulesFromStartRuleAndRuleMap: function() {
        return rulesFromStartRuleAndRuleMap;
    },
    startRuleFromRulesAndStartRuleName: function() {
        return startRuleFromRulesAndStartRuleName;
    },
    default: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter;
function rulesAsString(rules, multiLine) {
    var maximumRuleNameLength = rules.reduce(function(maximumRuleNameLength, rule) {
        var ruleName = rule.getName(), ruleNameLength = ruleName.length;
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
    filter(rules, function(rule) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpIHtcbiAgY29uc3QgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gcnVsZXMucmVkdWNlKChtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGg7XG5cbiAgICAgICAgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlTmFtZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgIH0sIDApLFxuICAgICAgcnVsZXNTdHJpbmcgPSBydWxlcy5yZWR1Y2UoKHJ1bGVzU3RyaW5nLCBydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lKTtcblxuICAgICAgICBydWxlc1N0cmluZyArPSBydWxlU3RyaW5nO1xuXG4gICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgIH0sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXlxcblxcbi8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU1hcEZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBydWxlTWFwID0ge307XG5cbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBydWxlTWFwW3J1bGVOYW1lXSA9IHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlTWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gZmlyc3RSdWxlOyAgLy8vXG5cbiAgcmV0dXJuIHN0YXJ0UnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVzID0gT2JqZWN0LnZhbHVlcyhydWxlTWFwKSxcbiAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHN0YXJ0UnVsZS5nZXROYW1lKCk7XG5cbiAgZmlsdGVyKHJ1bGVzLCAocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgIT09IHN0YXJ0UnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcnVsZXMudW5zaGlmdChzdGFydFJ1bGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgbGV0IHN0YXJ0UnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBzdGFydFJ1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7IC8vL1xuXG4gIGlmIChzdGFydFJ1bGUgPT09IG51bGwpIHtcbiAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXJ0UnVsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlc0FzU3RyaW5nLFxuICBydWxlTWFwRnJvbVJ1bGVzLFxuICBzdGFydFJ1bGVGcm9tUnVsZXMsXG4gIHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAsXG4gIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWVcbn07XG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJydWxlcyIsIm11bHRpTGluZSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZUxlbmd0aCIsImxlbmd0aCIsIk1hdGgiLCJtYXgiLCJydWxlc1N0cmluZyIsInJ1bGVTdHJpbmciLCJhc1N0cmluZyIsIkVNUFRZX1NUUklORyIsInJlcGxhY2UiLCJydWxlTWFwIiwiZm9yRWFjaCIsImZpcnN0UnVsZSIsInN0YXJ0UnVsZSIsIk9iamVjdCIsInZhbHVlcyIsInN0YXJ0UnVsZU5hbWUiLCJ1bnNoaWZ0IiwiZmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxhQUFhO2VBQWJBOztJQW9CQUMsZ0JBQWdCO2VBQWhCQTs7SUFZQUMsa0JBQWtCO2VBQWxCQTs7SUFPQUMsNEJBQTRCO2VBQTVCQTs7SUFpQkFDLGtDQUFrQztlQUFsQ0E7O0lBZ0JoQixPQU1FO2VBTkY7Ozt5QkE5RStCO3lCQUlGO0FBRjdCLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBSVIsU0FBU1AsY0FBY1EsS0FBSyxFQUFFQyxTQUFTLEVBQUU7SUFDOUMsSUFBTUMsd0JBQXdCRixNQUFNRyxNQUFNLENBQUMsU0FBQ0QsdUJBQXVCRSxNQUFTO1FBQ3RFLElBQU1DLFdBQVdELEtBQUtFLE9BQU8sSUFDdkJDLGlCQUFpQkYsU0FBU0csTUFBTTtRQUV0Q04sd0JBQXdCTyxLQUFLQyxHQUFHLENBQUNSLHVCQUF1Qks7UUFFeEQsT0FBT0w7SUFDVCxHQUFHLElBQ0hTLGNBQWNYLE1BQU1HLE1BQU0sQ0FBQyxTQUFDUSxhQUFhUCxNQUFTO1FBQ2hELElBQU1RLGFBQWFSLEtBQUtTLFFBQVEsQ0FBQ1gsdUJBQXVCRDtRQUV4RFUsZUFBZUM7UUFFZixPQUFPRDtJQUNULEdBQUdHLHVCQUFZLEVBQUVDLE9BQU8sQ0FBQyxTQUFTRCx1QkFBWTtJQUVsRCxPQUFPSDtBQUNUO0FBRU8sU0FBU2xCLGlCQUFpQk8sS0FBSyxFQUFFO0lBQ3RDLElBQU1nQixVQUFVLENBQUM7SUFFakJoQixNQUFNaUIsT0FBTyxDQUFDLFNBQUNiLE1BQVM7UUFDdEIsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTztRQUU3QlUsT0FBTyxDQUFDWCxTQUFTLEdBQUdEO0lBQ3RCO0lBRUEsT0FBT1k7QUFDVDtBQUVPLFNBQVN0QixtQkFBbUJNLEtBQUssRUFBRTtJQUN4QyxJQUFNa0IsWUFBWXJCLE1BQU1HLFFBQ2xCbUIsWUFBWUQsV0FBWSxHQUFHO0lBRWpDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTeEIsNkJBQTZCd0IsU0FBUyxFQUFFSCxPQUFPLEVBQUU7SUFDL0QsSUFBTWhCLFFBQVFvQixPQUFPQyxNQUFNLENBQUNMLFVBQ3RCTSxnQkFBZ0JILFVBQVViLE9BQU87SUFFdkNQLE9BQU9DLE9BQU8sU0FBQ0ksTUFBUztRQUN0QixJQUFNQyxXQUFXRCxLQUFLRSxPQUFPO1FBRTdCLElBQUlELGFBQWFpQixlQUFlO1lBQzlCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVBdEIsTUFBTXVCLE9BQU8sQ0FBQ0o7SUFFZCxPQUFPbkI7QUFDVDtBQUVPLFNBQVNKLG1DQUFtQ0ksS0FBSyxFQUFFc0IsYUFBYSxFQUFFO0lBQ3ZFLElBQUlILFlBQVluQixNQUFNd0IsSUFBSSxDQUFDLFNBQUNwQixNQUFTO1FBQ25DLElBQU1DLFdBQVdELEtBQUtFLE9BQU87UUFFN0IsSUFBSUQsYUFBYWlCLGVBQWU7WUFDOUIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNILE1BQU0sSUFBSSxFQUFFLEdBQUc7SUFFZixJQUFJSCxjQUFjLElBQUksRUFBRTtRQUN0QkEsWUFBWXpCLG1CQUFtQk07SUFDakMsQ0FBQztJQUVELE9BQU9tQjtBQUNUO0lBRUEsV0FBZTtJQUNiM0IsZUFBQUE7SUFDQUMsa0JBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBQyw4QkFBQUE7SUFDQUMsb0NBQUFBO0FBQ0YifQ==