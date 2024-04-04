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
    parserFromRules: function() {
        return parserFromRules;
    },
    parserFromRulesAndStartRuleName: function() {
        return parserFromRulesAndStartRuleName;
    },
    rulesFromBNF: function() {
        return rulesFromBNF;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tQk5GKGJuZikge1xuICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcbiAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICBwYXJzZXIgPSBuZXcgQ2xhc3Moc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gcGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShDbGFzcywgcnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgcGFyc2VyID0gbmV3IENsYXNzKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIHBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlc0Zyb21CTkYsXG4gIHBhcnNlckZyb21SdWxlcyxcbiAgcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZVxufTtcbiJdLCJuYW1lcyI6WyJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwicnVsZXNGcm9tQk5GIiwiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiQ2xhc3MiLCJzdGFydFJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwIiwicnVsZU1hcEZyb21SdWxlcyIsInBhcnNlciIsInN0YXJ0UnVsZU5hbWUiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWtDQSxPQUlFO2VBSkY7O0lBaEJnQkEsZUFBZTtlQUFmQTs7SUFRQUMsK0JBQStCO2VBQS9CQTs7SUFmQUMsWUFBWTtlQUFaQTs7OzJCQVRTOzZEQUVIO3FCQUVtRTs7Ozs7O0FBRXpGLElBQU1DLFdBQVdDLHFCQUFRLENBQUNDLFdBQVcsSUFDL0JDLFlBQVlDLGVBQVMsQ0FBQ0YsV0FBVztBQUVoQyxTQUFTSCxhQUFhTSxHQUFHO0lBQzlCLElBQU1DLFNBQVNOLFNBQVNPLGFBQWEsQ0FBQ0YsTUFDaENHLFFBQVFMLFVBQVVNLGVBQWUsQ0FBQ0g7SUFFeEMsT0FBT0U7QUFDVDtBQUVPLFNBQVNYLGdCQUFnQmEsS0FBSyxFQUFFRixLQUFLO0lBQzFDLElBQU1HLFlBQVlDLElBQUFBLHlCQUFrQixFQUFDSixRQUMvQkssVUFBVUMsSUFBQUEsdUJBQWdCLEVBQUNOLFFBQzNCTyxTQUFTLElBQUlMLE1BQU1DLFdBQVdFO0lBRXBDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTakIsZ0NBQWdDWSxLQUFLLEVBQUVGLEtBQUssRUFBRVEsYUFBYTtJQUN6RSxJQUFNTCxZQUFZTSxJQUFBQSx5Q0FBa0MsRUFBQ1QsT0FBT1EsZ0JBQ3RESCxVQUFVQyxJQUFBQSx1QkFBZ0IsRUFBQ04sUUFDM0JPLFNBQVMsSUFBSUwsTUFBTUMsV0FBV0U7SUFFcEMsT0FBT0U7QUFDVDtJQUVBLFdBQWU7SUFDYmhCLGNBQUFBO0lBQ0FGLGlCQUFBQTtJQUNBQyxpQ0FBQUE7QUFDRiJ9