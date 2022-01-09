"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _context = _interopRequireDefault(require("../context"));
var _parser = _interopRequireDefault(require("../bnf/parser"));
var _rules = require("../utilities/rules");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _parser.default.fromNothing();
var CommonParser = /*#__PURE__*/ function() {
    function CommonParser(startRule, ruleMap) {
        _classCallCheck(this, CommonParser);
        this.startRule = startRule;
        this.ruleMap = ruleMap;
    }
    _createClass(CommonParser, [
        {
            key: "getStartRule",
            value: function getStartRule() {
                return this.startRule;
            }
        },
        {
            key: "getRuleMap",
            value: function getRuleMap() {
                return this.ruleMap;
            }
        },
        {
            key: "parse",
            value: function parse(tokens) {
                var rule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startRule;
                var context = _context.default.fromTokensAndRuleMap(tokens, this.ruleMap), ruleNode = rule.parse(context), node = ruleNode; ///
                return node;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var bnf = Class.bnf, tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), startRule = (0, _rules).startRuleFromRules(rules), ruleMap = (0, _rules).ruleMapFromRules(rules), parser = new Class(startRule, ruleMap);
                return parser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), startRule = (0, _rules).startRuleFromRules(rules), ruleMap = (0, _rules).ruleMapFromRules(rules), parser = new Class(startRule, ruleMap);
                return parser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                var startRule = (0, _rules).startRuleFromRules(rules), ruleMap = (0, _rules).ruleMapFromRules(rules), parser = new Class(startRule, ruleMap);
                return parser;
            }
        }
    ]);
    return CommonParser;
}();
exports.default = CommonParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBCTkZQYXJzZXIgZnJvbSBcIi4uL2JuZi9wYXJzZXJcIjtcblxuaW1wb3J0IHsgc3RhcnRSdWxlRnJvbVJ1bGVzLCBydWxlTWFwRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBDb250ZXh0LmZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgdGhpcy5ydWxlTWFwKSxcbiAgICAgICAgICBydWxlTm9kZSA9IHJ1bGUucGFyc2UoY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHJ1bGVOb2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgY29uc3QgeyBibmYgfSA9IENsYXNzLFxuICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBwYXJzZXIgPSBuZXcgQ2xhc3Moc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihDbGFzcywgYm5mKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHBhcnNlciA9IG5ldyBDbGFzcyhzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XG4gICAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgcGFyc2VyID0gbmV3IENsYXNzKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkNvbW1vblBhcnNlciIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJnZXRTdGFydFJ1bGUiLCJnZXRSdWxlTWFwIiwicGFyc2UiLCJ0b2tlbnMiLCJydWxlIiwiY29udGV4dCIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwicnVsZU5vZGUiLCJub2RlIiwiQ2xhc3MiLCJibmYiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJwYXJzZXIiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQWMsQ0FBZCxZQUFjO0FBRW5CLEdBQVksQ0FBWixRQUFZO0FBQ1YsR0FBZSxDQUFmLE9BQWU7QUFFZ0IsR0FBb0IsQ0FBcEIsTUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsR0FBSyxDQUFDQSxRQUFRLEdBUFcsWUFBYyxVQU9iQyxXQUFXLElBQy9CQyxTQUFTLEdBTE8sT0FBZSxTQUtURCxXQUFXO0lBRWxCRSxZQUFZLGlCQUFsQixRQUFRO2FBQUZBLFlBQVksQ0FDbkJDLFNBQVMsRUFBRUMsT0FBTzs4QkFEWEYsWUFBWTtRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztRQUMxQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTzs7aUJBSExGLFlBQVk7O1lBTS9CRyxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxHQUFHLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQ0YsU0FBUztZQUN2QixDQUFDOzs7WUFFREcsR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsR0FBRyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUNGLE9BQU87WUFDckIsQ0FBQzs7O1lBRURHLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLENBQUNDLE1BQU0sRUFBeUIsQ0FBQztvQkFBeEJDLElBQUksb0VBQUcsSUFBSSxDQUFDTixTQUFTO2dCQUNqQyxHQUFLLENBQUNPLE9BQU8sR0F2QkcsUUFBWSxTQXVCSkMsb0JBQW9CLENBQUNILE1BQU0sRUFBRSxJQUFJLENBQUNKLE9BQU8sR0FDM0RRLFFBQVEsR0FBR0gsSUFBSSxDQUFDRixLQUFLLENBQUNHLE9BQU8sR0FDN0JHLElBQUksR0FBR0QsUUFBUSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFMUIsTUFBTSxDQUFDQyxJQUFJO1lBQ2IsQ0FBQzs7OztZQUVNYixHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDYyxLQUFLLEVBQUUsQ0FBQztnQkFDekIsR0FBSyxDQUFHQyxHQUFHLEdBQUtELEtBQUssQ0FBYkMsR0FBRyxFQUNMUCxNQUFNLEdBQUdULFFBQVEsQ0FBQ2lCLGFBQWEsQ0FBQ0QsR0FBRyxHQUNuQ0UsS0FBSyxHQUFHaEIsU0FBUyxDQUFDaUIsZUFBZSxDQUFDVixNQUFNLEdBQ3hDTCxTQUFTLE9BL0JrQyxNQUFvQixxQkErQmhDYyxLQUFLLEdBQ3BDYixPQUFPLE9BaENvQyxNQUFvQixtQkFnQ3BDYSxLQUFLLEdBQ2hDRSxNQUFNLEdBQUcsR0FBRyxDQUFDTCxLQUFLLENBQUNYLFNBQVMsRUFBRUMsT0FBTztnQkFFM0MsTUFBTSxDQUFDZSxNQUFNO1lBQ2YsQ0FBQzs7O1lBRU1DLEdBQU8sRUFBUEEsQ0FBTzttQkFBZCxRQUFRLENBQURBLE9BQU8sQ0FBQ04sS0FBSyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztnQkFDMUIsR0FBSyxDQUFDUCxNQUFNLEdBQUdULFFBQVEsQ0FBQ2lCLGFBQWEsQ0FBQ0QsR0FBRyxHQUNuQ0UsS0FBSyxHQUFHaEIsU0FBUyxDQUFDaUIsZUFBZSxDQUFDVixNQUFNLEdBQ3hDTCxTQUFTLE9BekNrQyxNQUFvQixxQkF5Q2hDYyxLQUFLLEdBQ3BDYixPQUFPLE9BMUNvQyxNQUFvQixtQkEwQ3BDYSxLQUFLLEdBQ2hDRSxNQUFNLEdBQUcsR0FBRyxDQUFDTCxLQUFLLENBQUNYLFNBQVMsRUFBRUMsT0FBTztnQkFFM0MsTUFBTSxDQUFDZSxNQUFNO1lBQ2YsQ0FBQzs7O1lBRU1FLEdBQVMsRUFBVEEsQ0FBUzttQkFBaEIsUUFBUSxDQUFEQSxTQUFTLENBQUNQLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7Z0JBQzlCLEdBQUssQ0FBQ2QsU0FBUyxPQWpEa0MsTUFBb0IscUJBaURoQ2MsS0FBSyxHQUNwQ2IsT0FBTyxPQWxEb0MsTUFBb0IsbUJBa0RwQ2EsS0FBSyxHQUNoQ0UsTUFBTSxHQUFHLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDWCxTQUFTLEVBQUVDLE9BQU87Z0JBRTNDLE1BQU0sQ0FBQ2UsTUFBTTtZQUNmLENBQUM7OztXQWpEa0JqQixZQUFZOztrQkFBWkEsWUFBWSJ9