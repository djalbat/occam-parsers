"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get ruleMapFromRules () {
        return ruleMapFromRules;
    },
    get rulesAsString () {
        return rulesAsString;
    },
    get rulesFromStartRuleAndRuleMap () {
        return rulesFromStartRuleAndRuleMap;
    },
    get startRuleFromRules () {
        return startRuleFromRules;
    },
    get startRuleFromRulesAndStartRuleName () {
        return startRuleFromRulesAndStartRuleName;
    }
});
const _necessary = require("necessary");
const _constants = require("../constants");
const { first, prune } = _necessary.arrayUtilities;
function rulesAsString(rules, multiLine) {
    const maximumRuleNameLength = rules.reduce((maximumRuleNameLength, rule)=>{
        const ruleName = rule.getName(), opacity = rule.getOpacity();
        let ruleNameLength = ruleName.length;
        if (opacity !== null) {
            const opacityLength = opacity.length;
            ruleNameLength += opacityLength;
        }
        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);
        return maximumRuleNameLength;
    }, 0), rulesString = rules.reduce((rulesString, rule)=>{
        const ruleString = rule.asString(maximumRuleNameLength, multiLine);
        rulesString += ruleString;
        return rulesString;
    }, _constants.EMPTY_STRING).replace(/^\n\n/, _constants.EMPTY_STRING);
    return rulesString;
}
function ruleMapFromRules(rules) {
    const ruleMap = {};
    rules.forEach((rule)=>{
        const ruleName = rule.getName();
        ruleMap[ruleName] = rule;
    });
    return ruleMap;
}
function startRuleFromRules(rules) {
    const firstRule = first(rules), startRule = firstRule; ///
    return startRule;
}
function rulesFromStartRuleAndRuleMap(startRule, ruleMap) {
    const rules = Object.values(ruleMap), startRuleName = startRule.getName();
    startRule = prune(rules, (rule)=>{
        const ruleName = rule.getName();
        if (ruleName !== startRuleName) {
            return true;
        }
    });
    rules.unshift(startRule);
    return rules;
}
function startRuleFromRulesAndStartRuleName(rules, startRuleName) {
    let startRule = rules.find((rule)=>{
        const ruleName = rule.getName();
        if (ruleName === startRuleName) {
            return true;
        }
    }) || null; ///
    if (startRule === null) {
        startRule = startRuleFromRules(rules);
    }
    return startRule;
}
const _default = {
    rulesAsString,
    ruleMapFromRules,
    startRuleFromRules,
    rulesFromStartRuleAndRuleMap,
    startRuleFromRulesAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBwcnVuZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSkge1xuICBjb25zdCBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSBydWxlcy5yZWR1Y2UoKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBvcGFjaXR5ID0gcnVsZS5nZXRPcGFjaXR5KCk7XG5cbiAgICAgICAgbGV0IHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuXG4gICAgICAgIGlmIChvcGFjaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgb3BhY2l0eUxlbmd0aCA9IG9wYWNpdHkubGVuZ3RoO1xuXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggKz0gb3BhY2l0eUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBtYXhpbXVtUnVsZU5hbWVMZW5ndGg7XG4gICAgICB9LCAwKSxcbiAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXMucmVkdWNlKChydWxlc1N0cmluZywgcnVsZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSk7XG5cbiAgICAgICAgcnVsZXNTdHJpbmcgKz0gcnVsZVN0cmluZztcblxuICAgICAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gICAgICB9LCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL15cXG5cXG4vLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBydWxlc1N0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpIHtcbiAgY29uc3QgcnVsZU1hcCA9IHt9O1xuXG4gIHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZU1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZTsgIC8vL1xuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICBjb25zdCBydWxlcyA9IE9iamVjdC52YWx1ZXMocnVsZU1hcCksXG4gICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBzdGFydFJ1bGUuZ2V0TmFtZSgpO1xuXG4gIHN0YXJ0UnVsZSA9IHBydW5lKHJ1bGVzLCAocnVsZSkgPT4geyAgLy8vXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGlmIChydWxlTmFtZSAhPT0gc3RhcnRSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBydWxlcy51bnNoaWZ0KHN0YXJ0UnVsZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSkge1xuICBsZXQgc3RhcnRSdWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgPT09IHN0YXJ0UnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgaWYgKHN0YXJ0UnVsZSA9PT0gbnVsbCkge1xuICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyk7XG4gIH1cblxuICByZXR1cm4gc3RhcnRSdWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGVzQXNTdHJpbmcsXG4gIHJ1bGVNYXBGcm9tUnVsZXMsXG4gIHN0YXJ0UnVsZUZyb21SdWxlcyxcbiAgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCxcbiAgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZVxufTtcbiJdLCJuYW1lcyI6WyJydWxlTWFwRnJvbVJ1bGVzIiwicnVsZXNBc1N0cmluZyIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiZmlyc3QiLCJwcnVuZSIsImFycmF5VXRpbGl0aWVzIiwicnVsZXMiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJyZWR1Y2UiLCJydWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwib3BhY2l0eSIsImdldE9wYWNpdHkiLCJydWxlTmFtZUxlbmd0aCIsImxlbmd0aCIsIm9wYWNpdHlMZW5ndGgiLCJNYXRoIiwibWF4IiwicnVsZXNTdHJpbmciLCJydWxlU3RyaW5nIiwiYXNTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJyZXBsYWNlIiwicnVsZU1hcCIsImZvckVhY2giLCJmaXJzdFJ1bGUiLCJzdGFydFJ1bGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzdGFydFJ1bGVOYW1lIiwidW5zaGlmdCIsImZpbmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdGQTtlQUFBOztRQXBEZ0JBO2VBQUFBOztRQTVCQUM7ZUFBQUE7O1FBK0NBQztlQUFBQTs7UUFQQUM7ZUFBQUE7O1FBd0JBQztlQUFBQTs7OzJCQXRFZTsyQkFJRjtBQUY3QixNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO0FBSWhDLFNBQVNOLGNBQWNPLEtBQUssRUFBRUMsU0FBUztJQUM1QyxNQUFNQyx3QkFBd0JGLE1BQU1HLE1BQU0sQ0FBQyxDQUFDRCx1QkFBdUJFO1FBQzdELE1BQU1DLFdBQVdELEtBQUtFLE9BQU8sSUFDdkJDLFVBQVVILEtBQUtJLFVBQVU7UUFFL0IsSUFBSUMsaUJBQWlCSixTQUFTSyxNQUFNO1FBRXBDLElBQUlILFlBQVksTUFBTTtZQUNwQixNQUFNSSxnQkFBZ0JKLFFBQVFHLE1BQU07WUFFcENELGtCQUFrQkU7UUFDcEI7UUFFQVQsd0JBQXdCVSxLQUFLQyxHQUFHLENBQUNYLHVCQUF1Qk87UUFFeEQsT0FBT1A7SUFDVCxHQUFHLElBQ0hZLGNBQWNkLE1BQU1HLE1BQU0sQ0FBQyxDQUFDVyxhQUFhVjtRQUN2QyxNQUFNVyxhQUFhWCxLQUFLWSxRQUFRLENBQUNkLHVCQUF1QkQ7UUFFeERhLGVBQWVDO1FBRWYsT0FBT0Q7SUFDVCxHQUFHRyx1QkFBWSxFQUFFQyxPQUFPLENBQUMsU0FBU0QsdUJBQVk7SUFFbEQsT0FBT0g7QUFDVDtBQUVPLFNBQVN0QixpQkFBaUJRLEtBQUs7SUFDcEMsTUFBTW1CLFVBQVUsQ0FBQztJQUVqQm5CLE1BQU1vQixPQUFPLENBQUMsQ0FBQ2hCO1FBQ2IsTUFBTUMsV0FBV0QsS0FBS0UsT0FBTztRQUU3QmEsT0FBTyxDQUFDZCxTQUFTLEdBQUdEO0lBQ3RCO0lBRUEsT0FBT2U7QUFDVDtBQUVPLFNBQVN4QixtQkFBbUJLLEtBQUs7SUFDdEMsTUFBTXFCLFlBQVl4QixNQUFNRyxRQUNsQnNCLFlBQVlELFdBQVksR0FBRztJQUVqQyxPQUFPQztBQUNUO0FBRU8sU0FBUzVCLDZCQUE2QjRCLFNBQVMsRUFBRUgsT0FBTztJQUM3RCxNQUFNbkIsUUFBUXVCLE9BQU9DLE1BQU0sQ0FBQ0wsVUFDdEJNLGdCQUFnQkgsVUFBVWhCLE9BQU87SUFFdkNnQixZQUFZeEIsTUFBTUUsT0FBTyxDQUFDSTtRQUN4QixNQUFNQyxXQUFXRCxLQUFLRSxPQUFPO1FBRTdCLElBQUlELGFBQWFvQixlQUFlO1lBQzlCLE9BQU87UUFDVDtJQUNGO0lBRUF6QixNQUFNMEIsT0FBTyxDQUFDSjtJQUVkLE9BQU90QjtBQUNUO0FBRU8sU0FBU0osbUNBQW1DSSxLQUFLLEVBQUV5QixhQUFhO0lBQ3JFLElBQUlILFlBQVl0QixNQUFNMkIsSUFBSSxDQUFDLENBQUN2QjtRQUMxQixNQUFNQyxXQUFXRCxLQUFLRSxPQUFPO1FBRTdCLElBQUlELGFBQWFvQixlQUFlO1lBQzlCLE9BQU87UUFDVDtJQUNGLE1BQU0sTUFBTSxHQUFHO0lBRWYsSUFBSUgsY0FBYyxNQUFNO1FBQ3RCQSxZQUFZM0IsbUJBQW1CSztJQUNqQztJQUVBLE9BQU9zQjtBQUNUO01BRUEsV0FBZTtJQUNiN0I7SUFDQUQ7SUFDQUc7SUFDQUQ7SUFDQUU7QUFDRiJ9