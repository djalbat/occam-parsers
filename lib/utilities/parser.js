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
    rulesFromBNF: function() {
        return rulesFromBNF;
    },
    parserFromRules: function() {
        return parserFromRules;
    },
    parserFromRulesAndStartRuleName: function() {
        return parserFromRulesAndStartRuleName;
    },
    default: function() {
        return _default;
    }
});
var _occamLexers = require("occam-lexers");
var _parser = /*#__PURE__*/ _interopRequireDefault(require("../bnf/parser"));
var _rules = require("../utilities/rules");
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
function parserFromRules(Class, rules) {
    var startRule = (0, _rules.startRuleFromRules)(rules), ruleMap = (0, _rules.ruleMapFromRules)(rules), parser = new Class(startRule, ruleMap);
    return parser;
}
function parserFromRulesAndStartRuleName(Class, rules, startRuleName) {
    var startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName), ruleMap = (0, _rules.ruleMapFromRules)(rules), parser = new Class(startRule, ruleMap);
    return parser;
}
var _default = {
    rulesFromBNF: rulesFromBNF,
    parserFromRules: parserFromRules,
    parserFromRulesAndStartRuleName: parserFromRulesAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tQk5GKGJuZikge1xuICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcbiAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICBwYXJzZXIgPSBuZXcgQ2xhc3Moc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gcGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShDbGFzcywgcnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgcGFyc2VyID0gbmV3IENsYXNzKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIHBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlc0Zyb21CTkYsXG4gIHBhcnNlckZyb21SdWxlcyxcbiAgcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZVxufTtcbiJdLCJuYW1lcyI6WyJydWxlc0Zyb21CTkYiLCJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiQ2xhc3MiLCJzdGFydFJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwIiwicnVsZU1hcEZyb21SdWxlcyIsInBhcnNlciIsInN0YXJ0UnVsZU5hbWUiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBV0dBLFlBQVk7ZUFBWkEsWUFBWTs7SUFPWkMsZUFBZTtlQUFmQSxlQUFlOztJQVFmQywrQkFBK0I7ZUFBL0JBLCtCQUErQjs7SUFRL0MsT0FJRTtlQUpGLFFBSUU7OzsyQkFwQ3VCLGNBQWM7MkRBRWpCLGVBQWU7cUJBRWdCLG9CQUFvQjs7Ozs7O0FBRXpFLElBQU1DLFFBQVEsR0FBR0MsWUFBUSxTQUFBLENBQUNDLFdBQVcsRUFBRSxFQUNqQ0MsU0FBUyxHQUFHQyxPQUFTLFFBQUEsQ0FBQ0YsV0FBVyxFQUFFLEFBQUM7QUFFbkMsU0FBU0wsWUFBWSxDQUFDUSxHQUFHLEVBQUU7SUFDaEMsSUFBTUMsTUFBTSxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQ0YsR0FBRyxDQUFDLEVBQ3BDRyxLQUFLLEdBQUdMLFNBQVMsQ0FBQ00sZUFBZSxDQUFDSCxNQUFNLENBQUMsQUFBQztJQUVoRCxPQUFPRSxLQUFLLENBQUM7QUFDZixDQUFDO0FBRU0sU0FBU1YsZUFBZSxDQUFDWSxLQUFLLEVBQUVGLEtBQUssRUFBRTtJQUM1QyxJQUFNRyxTQUFTLEdBQUdDLElBQUFBLE1BQWtCLG1CQUFBLEVBQUNKLEtBQUssQ0FBQyxFQUNyQ0ssT0FBTyxHQUFHQyxJQUFBQSxNQUFnQixpQkFBQSxFQUFDTixLQUFLLENBQUMsRUFDakNPLE1BQU0sR0FBRyxJQUFJTCxLQUFLLENBQUNDLFNBQVMsRUFBRUUsT0FBTyxDQUFDLEFBQUM7SUFFN0MsT0FBT0UsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFTSxTQUFTaEIsK0JBQStCLENBQUNXLEtBQUssRUFBRUYsS0FBSyxFQUFFUSxhQUFhLEVBQUU7SUFDM0UsSUFBTUwsU0FBUyxHQUFHTSxrQ0FBa0MsQ0FBQ1QsS0FBSyxFQUFFUSxhQUFhLENBQUMsRUFDcEVILE9BQU8sR0FBR0MsSUFBQUEsTUFBZ0IsaUJBQUEsRUFBQ04sS0FBSyxDQUFDLEVBQ2pDTyxNQUFNLEdBQUcsSUFBSUwsS0FBSyxDQUFDQyxTQUFTLEVBQUVFLE9BQU8sQ0FBQyxBQUFDO0lBRTdDLE9BQU9FLE1BQU0sQ0FBQztBQUNoQixDQUFDO0lBRUQsUUFJRSxHQUphO0lBQ2JsQixZQUFZLEVBQVpBLFlBQVk7SUFDWkMsZUFBZSxFQUFmQSxlQUFlO0lBQ2ZDLCtCQUErQixFQUEvQkEsK0JBQStCO0NBQ2hDIn0=