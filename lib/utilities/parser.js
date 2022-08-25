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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tQk5GKGJuZikge1xuICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcbiAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICBwYXJzZXIgPSBuZXcgQ2xhc3Moc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gcGFyc2VyO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUJORiIsInBhcnNlckZyb21SdWxlcyIsImJuZkxleGVyIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJORlBhcnNlciIsImJuZiIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsIkNsYXNzIiwic3RhcnRSdWxlIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwicnVsZU1hcCIsInJ1bGVNYXBGcm9tUnVsZXMiLCJwYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFXR0EsWUFBWTtlQUFaQSxZQUFZOztJQU9aQyxlQUFlO2VBQWZBLGVBQWU7OzsyQkFoQk4sY0FBYzsyREFFakIsZUFBZTtxQkFFZ0Isb0JBQW9COzs7Ozs7QUFFekUsSUFBTUMsUUFBUSxHQUFHQyxZQUFRLFNBQUEsQ0FBQ0MsV0FBVyxFQUFFLEVBQ2pDQyxTQUFTLEdBQUdDLE9BQVMsUUFBQSxDQUFDRixXQUFXLEVBQUUsQUFBQztBQUVuQyxTQUFTSixZQUFZLENBQUNPLEdBQUcsRUFBRTtJQUNoQyxJQUFNQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDRixHQUFHLENBQUMsRUFDcENHLEtBQUssR0FBR0wsU0FBUyxDQUFDTSxlQUFlLENBQUNILE1BQU0sQ0FBQyxBQUFDO0lBRWhELE9BQU9FLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFTSxTQUFTVCxlQUFlLENBQUNXLEtBQUssRUFBRUYsS0FBSyxFQUFFO0lBQzVDLElBQU1HLFNBQVMsR0FBR0MsSUFBQUEsTUFBa0IsbUJBQUEsRUFBQ0osS0FBSyxDQUFDLEVBQ3JDSyxPQUFPLEdBQUdDLElBQUFBLE1BQWdCLGlCQUFBLEVBQUNOLEtBQUssQ0FBQyxFQUNqQ08sTUFBTSxHQUFHLElBQUlMLEtBQUssQ0FBQ0MsU0FBUyxFQUFFRSxPQUFPLENBQUMsQUFBQztJQUU3QyxPQUFPRSxNQUFNLENBQUM7QUFDaEIsQ0FBQyJ9