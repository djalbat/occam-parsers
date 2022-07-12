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
    default: function() {
        return _default;
    }
});
var _array = require("../utilities/array");
var _constants = require("../constants");
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
    var firstRule = (0, _array.first)(rules), startRule = firstRule; ///
    return startRule;
}
var _default = {
    rulesAsString: rulesAsString,
    ruleMapFromRules: ruleMapFromRules,
    startRuleFromRules: startRuleFromRules
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpIHtcbiAgY29uc3QgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gcnVsZXMucmVkdWNlKChtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGg7XG5cbiAgICAgICAgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlTmFtZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgIH0sIDApLFxuICAgICAgcnVsZXNTdHJpbmcgPSBydWxlcy5yZWR1Y2UoKHJ1bGVzU3RyaW5nLCBydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lKTtcblxuICAgICAgICBydWxlc1N0cmluZyArPSBydWxlU3RyaW5nO1xuXG4gICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgIH0sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXlxcblxcbi8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU1hcEZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBydWxlTWFwID0ge307XG5cbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBydWxlTWFwW3J1bGVOYW1lXSA9IHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlTWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gZmlyc3RSdWxlOyAgLy8vXG5cbiAgcmV0dXJuIHN0YXJ0UnVsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlc0FzU3RyaW5nLFxuICBydWxlTWFwRnJvbVJ1bGVzLFxuICBzdGFydFJ1bGVGcm9tUnVsZXNcbn07XG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlcyIsIm11bHRpTGluZSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZUxlbmd0aCIsImxlbmd0aCIsIk1hdGgiLCJtYXgiLCJydWxlc1N0cmluZyIsInJ1bGVTdHJpbmciLCJhc1N0cmluZyIsIkVNUFRZX1NUUklORyIsInJlcGxhY2UiLCJydWxlTWFwIiwiZm9yRWFjaCIsImZpcnN0UnVsZSIsImZpcnN0Iiwic3RhcnRSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBTUdBLGFBQWE7ZUFBYkEsYUFBYTs7SUFvQmJDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQVloQkMsa0JBQWtCO2VBQWxCQSxrQkFBa0I7O0lBT2xDLE9BSUU7ZUFKRixRQUlFOzs7cUJBL0NvQixvQkFBb0I7eUJBRWIsY0FBYztBQUVwQyxTQUFTRixhQUFhLENBQUNHLEtBQUssRUFBRUMsU0FBUyxFQUFFO0lBQzlDLElBQU1DLHFCQUFxQixHQUFHRixLQUFLLENBQUNHLE1BQU0sQ0FBQyxTQUFDRCxxQkFBcUIsRUFBRUUsSUFBSSxFQUFLO1FBQ3RFLElBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLEVBQUUsRUFDekJDLGNBQWMsR0FBR0YsUUFBUSxDQUFDRyxNQUFNLEFBQUM7UUFFdkNOLHFCQUFxQixHQUFHTyxJQUFJLENBQUNDLEdBQUcsQ0FBQ1IscUJBQXFCLEVBQUVLLGNBQWMsQ0FBQyxDQUFDO1FBRXhFLE9BQU9MLHFCQUFxQixDQUFDO0tBQzlCLEVBQUUsQ0FBQyxDQUFDLEVBQ0xTLFdBQVcsR0FBR1gsS0FBSyxDQUFDRyxNQUFNLENBQUMsU0FBQ1EsV0FBVyxFQUFFUCxJQUFJLEVBQUs7UUFDaEQsSUFBTVEsVUFBVSxHQUFHUixJQUFJLENBQUNTLFFBQVEsQ0FBQ1gscUJBQXFCLEVBQUVELFNBQVMsQ0FBQyxBQUFDO1FBRW5FVSxXQUFXLElBQUlDLFVBQVUsQ0FBQztRQUUxQixPQUFPRCxXQUFXLENBQUM7S0FDcEIsRUFBRUcsVUFBWSxhQUFBLENBQUMsQ0FBQ0MsT0FBTyxVQUFVRCxVQUFZLGFBQUEsQ0FBQyxBQUFDO0lBRXBELE9BQU9ILFdBQVcsQ0FBQztDQUNwQjtBQUVNLFNBQVNiLGdCQUFnQixDQUFDRSxLQUFLLEVBQUU7SUFDdEMsSUFBTWdCLE9BQU8sR0FBRyxFQUFFLEFBQUM7SUFFbkJoQixLQUFLLENBQUNpQixPQUFPLENBQUMsU0FBQ2IsSUFBSSxFQUFLO1FBQ3RCLElBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLEVBQUUsQUFBQztRQUVoQ1UsT0FBTyxDQUFDWCxRQUFRLENBQUMsR0FBR0QsSUFBSSxDQUFDO0tBQzFCLENBQUMsQ0FBQztJQUVILE9BQU9ZLE9BQU8sQ0FBQztDQUNoQjtBQUVNLFNBQVNqQixrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3hDLElBQU1rQixTQUFTLEdBQUdDLElBQUFBLE1BQUssTUFBQSxFQUFDbkIsS0FBSyxDQUFDLEVBQ3hCb0IsU0FBUyxHQUFHRixTQUFTLEFBQUMsRUFBRSxHQUFHO0lBRWpDLE9BQU9FLFNBQVMsQ0FBQztDQUNsQjtJQUVELFFBSUUsR0FKYTtJQUNidkIsYUFBYSxFQUFiQSxhQUFhO0lBQ2JDLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQ2hCQyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtDQUNuQiJ9