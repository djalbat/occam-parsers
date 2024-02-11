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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBwcnVuZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSkge1xuICBjb25zdCBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSBydWxlcy5yZWR1Y2UoKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aDtcblxuICAgICAgICBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSBNYXRoLm1heChtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGVOYW1lTGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoO1xuICAgICAgfSwgMCksXG4gICAgICBydWxlc1N0cmluZyA9IHJ1bGVzLnJlZHVjZSgocnVsZXNTdHJpbmcsIHJ1bGUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUpO1xuXG4gICAgICAgIHJ1bGVzU3RyaW5nICs9IHJ1bGVTdHJpbmc7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICAgICAgfSwgRU1QVFlfU1RSSU5HKS5yZXBsYWNlKC9eXFxuXFxuLywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcnVsZXNTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSB7fTtcblxuICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIHJ1bGVNYXBbcnVsZU5hbWVdID0gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVNYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpIHtcbiAgY29uc3QgZmlyc3RSdWxlID0gZmlyc3QocnVsZXMpLFxuICAgICAgICBzdGFydFJ1bGUgPSBmaXJzdFJ1bGU7ICAvLy9cblxuICByZXR1cm4gc3RhcnRSdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZXMgPSBPYmplY3QudmFsdWVzKHJ1bGVNYXApLFxuICAgICAgICBzdGFydFJ1bGVOYW1lID0gc3RhcnRSdWxlLmdldE5hbWUoKTtcblxuICBzdGFydFJ1bGUgPSBwcnVuZShydWxlcywgKHJ1bGUpID0+IHsgIC8vL1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgIT09IHN0YXJ0UnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcnVsZXMudW5zaGlmdChzdGFydFJ1bGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgbGV0IHN0YXJ0UnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBzdGFydFJ1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7IC8vL1xuXG4gIGlmIChzdGFydFJ1bGUgPT09IG51bGwpIHtcbiAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXJ0UnVsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlc0FzU3RyaW5nLFxuICBydWxlTWFwRnJvbVJ1bGVzLFxuICBzdGFydFJ1bGVGcm9tUnVsZXMsXG4gIHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAsXG4gIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWVcbn07XG4iXSwibmFtZXMiOlsicnVsZU1hcEZyb21SdWxlcyIsInJ1bGVzQXNTdHJpbmciLCJydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcnVuZSIsInJ1bGVzIiwibXVsdGlMaW5lIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwicmVkdWNlIiwicnVsZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lTGVuZ3RoIiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsInJ1bGVzU3RyaW5nIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicmVwbGFjZSIsInJ1bGVNYXAiLCJmb3JFYWNoIiwiZmlyc3RSdWxlIiwic3RhcnRSdWxlIiwiT2JqZWN0IiwidmFsdWVzIiwic3RhcnRSdWxlTmFtZSIsInVuc2hpZnQiLCJmaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnRkEsT0FNRTtlQU5GOztJQXBEZ0JBLGdCQUFnQjtlQUFoQkE7O0lBcEJBQyxhQUFhO2VBQWJBOztJQXVDQUMsNEJBQTRCO2VBQTVCQTs7SUFQQUMsa0JBQWtCO2VBQWxCQTs7SUF3QkFDLGtDQUFrQztlQUFsQ0E7Ozt5QkE5RGU7eUJBSUY7QUFGN0IsSUFBUUMsUUFBaUJDLHlCQUFjLENBQS9CRCxPQUFPRSxRQUFVRCx5QkFBYyxDQUF4QkM7QUFJUixTQUFTTixjQUFjTyxLQUFLLEVBQUVDLFNBQVM7SUFDNUMsSUFBTUMsd0JBQXdCRixNQUFNRyxNQUFNLENBQUMsU0FBQ0QsdUJBQXVCRTtRQUM3RCxJQUFNQyxXQUFXRCxLQUFLRSxPQUFPLElBQ3ZCQyxpQkFBaUJGLFNBQVNHLE1BQU07UUFFdENOLHdCQUF3Qk8sS0FBS0MsR0FBRyxDQUFDUix1QkFBdUJLO1FBRXhELE9BQU9MO0lBQ1QsR0FBRyxJQUNIUyxjQUFjWCxNQUFNRyxNQUFNLENBQUMsU0FBQ1EsYUFBYVA7UUFDdkMsSUFBTVEsYUFBYVIsS0FBS1MsUUFBUSxDQUFDWCx1QkFBdUJEO1FBRXhEVSxlQUFlQztRQUVmLE9BQU9EO0lBQ1QsR0FBR0csdUJBQVksRUFBRUMsT0FBTyxDQUFDLFNBQVNELHVCQUFZO0lBRWxELE9BQU9IO0FBQ1Q7QUFFTyxTQUFTbkIsaUJBQWlCUSxLQUFLO0lBQ3BDLElBQU1nQixVQUFVLENBQUM7SUFFakJoQixNQUFNaUIsT0FBTyxDQUFDLFNBQUNiO1FBQ2IsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTztRQUU3QlUsT0FBTyxDQUFDWCxTQUFTLEdBQUdEO0lBQ3RCO0lBRUEsT0FBT1k7QUFDVDtBQUVPLFNBQVNyQixtQkFBbUJLLEtBQUs7SUFDdEMsSUFBTWtCLFlBQVlyQixNQUFNRyxRQUNsQm1CLFlBQVlELFdBQVksR0FBRztJQUVqQyxPQUFPQztBQUNUO0FBRU8sU0FBU3pCLDZCQUE2QnlCLFNBQVMsRUFBRUgsT0FBTztJQUM3RCxJQUFNaEIsUUFBUW9CLE9BQU9DLE1BQU0sQ0FBQ0wsVUFDdEJNLGdCQUFnQkgsVUFBVWIsT0FBTztJQUV2Q2EsWUFBWXBCLE1BQU1DLE9BQU8sU0FBQ0k7UUFDeEIsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTztRQUU3QixJQUFJRCxhQUFhaUIsZUFBZTtZQUM5QixPQUFPO1FBQ1Q7SUFDRjtJQUVBdEIsTUFBTXVCLE9BQU8sQ0FBQ0o7SUFFZCxPQUFPbkI7QUFDVDtBQUVPLFNBQVNKLG1DQUFtQ0ksS0FBSyxFQUFFc0IsYUFBYTtJQUNyRSxJQUFJSCxZQUFZbkIsTUFBTXdCLElBQUksQ0FBQyxTQUFDcEI7UUFDMUIsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTztRQUU3QixJQUFJRCxhQUFhaUIsZUFBZTtZQUM5QixPQUFPO1FBQ1Q7SUFDRixNQUFNLE1BQU0sR0FBRztJQUVmLElBQUlILGNBQWMsTUFBTTtRQUN0QkEsWUFBWXhCLG1CQUFtQks7SUFDakM7SUFFQSxPQUFPbUI7QUFDVDtJQUVBLFdBQWU7SUFDYjFCLGVBQUFBO0lBQ0FELGtCQUFBQTtJQUNBRyxvQkFBQUE7SUFDQUQsOEJBQUFBO0lBQ0FFLG9DQUFBQTtBQUNGIn0=