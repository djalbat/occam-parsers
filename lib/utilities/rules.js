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
    rulesFromBNF: function() {
        return rulesFromBNF;
    },
    rulesAsString: function() {
        return rulesAsString;
    },
    ruleMapFromRules: function() {
        return ruleMapFromRules;
    },
    startRuleFromRules: function() {
        return startRuleFromRules;
    }
});
var _array = require("../utilities/array");
var _occamLexers = require("occam-lexers");
var _parser = /*#__PURE__*/ _interopRequireDefault(require("../bnf/parser"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _parser.default.fromNothing();
function rulesFromBNF(bnf) {
    var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens);
    return rules;
}
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
    rulesFromBNF: rulesFromBNF,
    rulesAsString: rulesAsString,
    ruleMapFromRules: ruleMapFromRules,
    startRuleFromRules: startRuleFromRules
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBCTkZQYXJzZXIgZnJvbSBcIi4uL2JuZi9wYXJzZXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUJORihibmYpIHtcbiAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpIHtcbiAgY29uc3QgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gcnVsZXMucmVkdWNlKChtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGg7XG5cbiAgICAgICAgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlTmFtZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgIH0sIDApLFxuICAgICAgcnVsZXNTdHJpbmcgPSBydWxlcy5yZWR1Y2UoKHJ1bGVzU3RyaW5nLCBydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lKTtcblxuICAgICAgICBydWxlc1N0cmluZyArPSBydWxlU3RyaW5nO1xuXG4gICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgIH0sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXlxcblxcbi8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU1hcEZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBydWxlTWFwID0ge307XG5cbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBydWxlTWFwW3J1bGVOYW1lXSA9IHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlTWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHJ1bGVzKSxcbiAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZTsgIC8vL1xuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZXNGcm9tQk5GLFxuICBydWxlc0FzU3RyaW5nLFxuICBydWxlTWFwRnJvbVJ1bGVzLFxuICBzdGFydFJ1bGVGcm9tUnVsZXNcbn07XG4iXSwibmFtZXMiOlsicnVsZXNGcm9tQk5GIiwicnVsZXNBc1N0cmluZyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJibmYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJyZWR1Y2UiLCJydWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVMZW5ndGgiLCJsZW5ndGgiLCJNYXRoIiwibWF4IiwicnVsZXNTdHJpbmciLCJydWxlU3RyaW5nIiwiYXNTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJyZXBsYWNlIiwicnVsZU1hcCIsImZvckVhY2giLCJmaXJzdFJ1bGUiLCJmaXJzdCIsInN0YXJ0UnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztJQVlHQSxZQUFZO2VBQVpBLFlBQVk7O0lBT1pDLGFBQWE7ZUFBYkEsYUFBYTs7SUFvQmJDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQVloQkMsa0JBQWtCO2VBQWxCQSxrQkFBa0I7OztxQkFqRFosb0JBQW9COzJCQUNqQixjQUFjOzJEQUVqQixlQUFlO3lCQUVSLGNBQWM7Ozs7OztBQUUzQyxJQUFNQyxRQUFRLEdBQUdDLFlBQVEsU0FBQSxDQUFDQyxXQUFXLEVBQUUsRUFDakNDLFNBQVMsR0FBR0MsT0FBUyxRQUFBLENBQUNGLFdBQVcsRUFBRSxBQUFDO0FBRW5DLFNBQVNOLFlBQVksQ0FBQ1MsR0FBRyxFQUFFO0lBQ2hDLElBQU1DLE1BQU0sR0FBR04sUUFBUSxDQUFDTyxhQUFhLENBQUNGLEdBQUcsQ0FBQyxFQUNwQ0csS0FBSyxHQUFHTCxTQUFTLENBQUNNLGVBQWUsQ0FBQ0gsTUFBTSxDQUFDLEFBQUM7SUFFaEQsT0FBT0UsS0FBSyxDQUFDO0NBQ2Q7QUFFTSxTQUFTWCxhQUFhLENBQUNXLEtBQUssRUFBRUUsU0FBUyxFQUFFO0lBQzlDLElBQU1DLHFCQUFxQixHQUFHSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxTQUFDRCxxQkFBcUIsRUFBRUUsSUFBSSxFQUFLO1FBQ3RFLElBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLEVBQUUsRUFDekJDLGNBQWMsR0FBR0YsUUFBUSxDQUFDRyxNQUFNLEFBQUM7UUFFdkNOLHFCQUFxQixHQUFHTyxJQUFJLENBQUNDLEdBQUcsQ0FBQ1IscUJBQXFCLEVBQUVLLGNBQWMsQ0FBQyxDQUFDO1FBRXhFLE9BQU9MLHFCQUFxQixDQUFDO0tBQzlCLEVBQUUsQ0FBQyxDQUFDLEVBQ0xTLFdBQVcsR0FBR1osS0FBSyxDQUFDSSxNQUFNLENBQUMsU0FBQ1EsV0FBVyxFQUFFUCxJQUFJLEVBQUs7UUFDaEQsSUFBTVEsVUFBVSxHQUFHUixJQUFJLENBQUNTLFFBQVEsQ0FBQ1gscUJBQXFCLEVBQUVELFNBQVMsQ0FBQyxBQUFDO1FBRW5FVSxXQUFXLElBQUlDLFVBQVUsQ0FBQztRQUUxQixPQUFPRCxXQUFXLENBQUM7S0FDcEIsRUFBRUcsVUFBWSxhQUFBLENBQUMsQ0FBQ0MsT0FBTyxVQUFVRCxVQUFZLGFBQUEsQ0FBQyxBQUFDO0lBRXBELE9BQU9ILFdBQVcsQ0FBQztDQUNwQjtBQUVNLFNBQVN0QixnQkFBZ0IsQ0FBQ1UsS0FBSyxFQUFFO0lBQ3RDLElBQU1pQixPQUFPLEdBQUcsRUFBRSxBQUFDO0lBRW5CakIsS0FBSyxDQUFDa0IsT0FBTyxDQUFDLFNBQUNiLElBQUksRUFBSztRQUN0QixJQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7UUFFaENVLE9BQU8sQ0FBQ1gsUUFBUSxDQUFDLEdBQUdELElBQUksQ0FBQztLQUMxQixDQUFDLENBQUM7SUFFSCxPQUFPWSxPQUFPLENBQUM7Q0FDaEI7QUFFTSxTQUFTMUIsa0JBQWtCLENBQUNTLEtBQUssRUFBRTtJQUN4QyxJQUFNbUIsU0FBUyxHQUFHQyxJQUFBQSxNQUFLLE1BQUEsRUFBQ3BCLEtBQUssQ0FBQyxFQUMxQnFCLFNBQVMsR0FBR0YsU0FBUyxBQUFDLEVBQUUsR0FBRztJQUUvQixPQUFPRSxTQUFTLENBQUM7Q0FDbEI7ZUFFYztJQUNiakMsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGFBQWEsRUFBYkEsYUFBYTtJQUNiQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7Q0FDbkIifQ==