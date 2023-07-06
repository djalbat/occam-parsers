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
var _occamlexers = require("occam-lexers");
var _parser = /*#__PURE__*/ _interop_require_default(require("../bnf/parser"));
var _rules = require("../utilities/rules");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var bnfLexer = _occamlexers.BNFLexer.fromNothing(), bnfParser = _parser.default.fromNothing();
function rulesFromBNF(bnf) {
    var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens);
    return rules;
}
function parserFromRules(Class, rules) {
    var startRule = (0, _rules.startRuleFromRules)(rules), ruleMap = (0, _rules.ruleMapFromRules)(rules), parser = new Class(startRule, ruleMap);
    return parser;
}
function parserFromRulesAndStartRuleName(Class, rules, startRuleName) {
    var startRule = (0, _rules.startRuleFromRulesAndStartRuleName)(rules, startRuleName), ruleMap = (0, _rules.ruleMapFromRules)(rules), parser = new Class(startRule, ruleMap);
    return parser;
}
var _default = {
    rulesFromBNF: rulesFromBNF,
    parserFromRules: parserFromRules,
    parserFromRulesAndStartRuleName: parserFromRulesAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tQk5GKGJuZikge1xuICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcbiAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICBwYXJzZXIgPSBuZXcgQ2xhc3Moc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gcGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShDbGFzcywgcnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgcGFyc2VyID0gbmV3IENsYXNzKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIHBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlc0Zyb21CTkYsXG4gIHBhcnNlckZyb21SdWxlcyxcbiAgcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZVxufTtcbiJdLCJuYW1lcyI6WyJydWxlc0Zyb21CTkYiLCJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiQ2xhc3MiLCJzdGFydFJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwIiwicnVsZU1hcEZyb21SdWxlcyIsInBhcnNlciIsInN0YXJ0UnVsZU5hbWUiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFXZ0JBLFlBQVk7ZUFBWkE7O0lBT0FDLGVBQWU7ZUFBZkE7O0lBUUFDLCtCQUErQjtlQUEvQkE7O0lBUWhCLE9BSUU7ZUFKRjs7OzJCQWhDeUI7NkRBRUg7cUJBRW1FOzs7Ozs7QUFFekYsSUFBTUMsV0FBV0MscUJBQVEsQ0FBQ0MsV0FBVyxJQUMvQkMsWUFBWUMsZUFBUyxDQUFDRixXQUFXO0FBRWhDLFNBQVNMLGFBQWFRLEdBQUc7SUFDOUIsSUFBTUMsU0FBU04sU0FBU08sYUFBYSxDQUFDRixNQUNoQ0csUUFBUUwsVUFBVU0sZUFBZSxDQUFDSDtJQUV4QyxPQUFPRTtBQUNUO0FBRU8sU0FBU1YsZ0JBQWdCWSxLQUFLLEVBQUVGLEtBQUs7SUFDMUMsSUFBTUcsWUFBWUMsSUFBQUEseUJBQWtCLEVBQUNKLFFBQy9CSyxVQUFVQyxJQUFBQSx1QkFBZ0IsRUFBQ04sUUFDM0JPLFNBQVMsSUFBSUwsTUFBTUMsV0FBV0U7SUFFcEMsT0FBT0U7QUFDVDtBQUVPLFNBQVNoQixnQ0FBZ0NXLEtBQUssRUFBRUYsS0FBSyxFQUFFUSxhQUFhO0lBQ3pFLElBQU1MLFlBQVlNLElBQUFBLHlDQUFrQyxFQUFDVCxPQUFPUSxnQkFDdERILFVBQVVDLElBQUFBLHVCQUFnQixFQUFDTixRQUMzQk8sU0FBUyxJQUFJTCxNQUFNQyxXQUFXRTtJQUVwQyxPQUFPRTtBQUNUO0lBRUEsV0FBZTtJQUNibEIsY0FBQUE7SUFDQUMsaUJBQUFBO0lBQ0FDLGlDQUFBQTtBQUNGIn0=