"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _state = _interopRequireDefault(require("../state"));
var _parser = require("../utilities/parser");
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
                var state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, ruleNode = rule.parse(state, callback), node = ruleNode; ///
                return node;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var bnf = Class.bnf, rules = (0, _parser).rulesFromBNF(bnf), parser = (0, _parser).parserFromRules(Class, rules);
                return parser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                var rules = (0, _parser).rulesFromBNF(bnf), parser = (0, _parser).parserFromRules(Class, rules);
                return parser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                var parser = (0, _parser).parserFromRules(Class, rules);
                return parser;
            }
        }
    ]);
    return CommonParser;
}();
exports.default = CommonParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGUgZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmltcG9ydCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSkge1xuICAgIGNvbnN0IHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICAgIGNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgICBydWxlTm9kZSA9IHJ1bGUucGFyc2Uoc3RhdGUsIGNhbGxiYWNrKSxcbiAgICAgICAgICBub2RlID0gcnVsZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihDbGFzcywgYm5mKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJnZXRTdGFydFJ1bGUiLCJnZXRSdWxlTWFwIiwicGFyc2UiLCJ0b2tlbnMiLCJydWxlIiwic3RhdGUiLCJTdGF0ZSIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwiY2FsbGJhY2siLCJydWxlTm9kZSIsIm5vZGUiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiYm5mIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXIiLCJwYXJzZXJGcm9tUnVsZXMiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRWtCLElBQUEsTUFBVSxrQ0FBVixVQUFVLEVBQUE7QUFFa0IsSUFBQSxPQUFxQixXQUFyQixxQkFBcUIsQ0FBQTs7Ozs7Ozs7OzhEQUpuRTtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7QUFNZSxJQUFBLEFBQU1BLFlBQVksaUJDTjlCLEFETVk7YUFBTUEsWUFBWSxDQUNuQkMsU0FBUyxFQUFFQyxPQUFPOzJDQVBoQztRQVFJLElBQUksQ0FBQ0QsU0FBUyxHQUFHQSxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU8sQ0FBQzs7OztZQUd6QkMsR0FBWSxFQUFaQSxjQUFZO1lFWmQsT0ZZRUEsU0FBQUEsWUFBWSxHQUFHO2dCQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTLENBQUM7YUFDdkI7OztZQUVERyxHQUFVLEVBQVZBLFlBQVU7WUVoQlosT0ZnQkVBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTyxDQUFDO2FBQ3JCOzs7WUFFREcsR0FBSyxFQUFMQSxPQUFLO1lFcEJQLE9Gb0JFQSxTQUFBQSxLQUFLLENBQUNDLE1BQU0sRUFBeUI7b0JBQXZCQyxJQUFJLEdBQUpBLCtDQUFxQixrQkFBZCxJQUFJLENBQUNOLFNBQVM7Z0JBQ2pDLElBQU1PLEtBQUssR0FBR0MsTUFBSyxTQUFDQyxvQkFBb0IsQ0FBQ0osTUFBTSxFQUFFLElBQUksQ0FBQ0osT0FBTyxDQUFDLEVBQ3hEUyxRQUFRLEdBQUcsSUFBSSxFQUNmQyxRQUFRLEdBQUdMLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxLQUFLLEVBQUVHLFFBQVEsQ0FBQyxFQUN0Q0UsSUFBSSxHQUFHRCxRQUFRLEFBQUMsRUFBQyxHQUFHO2dCQUUxQixPQUFPQyxJQUFJLENBQUM7YUFDYjs7OztZQUVNQyxHQUFXLEVBQVhBLGFBQVc7WUU3QnBCLE9GNkJFLFNBQU9BLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFO2dCQUN4QixJQUFNLEFBQUVDLEdBQUcsR0FBS0QsS0FBSyxDQUFiQyxHQUFHLEFBQVUsRUFDZkMsS0FBSyxHQUFHQyxDQUFBQSxHQUFBQSxPQUFZLEFBQUssQ0FBQSxjQUFKRixHQUFHLENBQUMsRUFDekJHLE1BQU0sR0FBR0MsQ0FBQUEsR0FBQUEsT0FBZSxBQUFjLENBQUEsaUJBQWJMLEtBQUssRUFBRUUsS0FBSyxDQUFDLEFBQUM7Z0JBRTdDLE9BQU9FLE1BQU0sQ0FBQzthQUNmOzs7WUFFTUUsR0FBTyxFQUFQQSxTQUFPO1lFckNoQixPRnFDRSxTQUFPQSxPQUFPLENBQUNOLEtBQUssRUFBRUMsR0FBRyxFQUFFO2dCQUN6QixJQUFNQyxLQUFLLEdBQUdDLENBQUFBLEdBQUFBLE9BQVksQUFBSyxDQUFBLGNBQUpGLEdBQUcsQ0FBQyxFQUN6QkcsTUFBTSxHQUFHQyxDQUFBQSxHQUFBQSxPQUFlLEFBQWMsQ0FBQSxpQkFBYkwsS0FBSyxFQUFFRSxLQUFLLENBQUMsQUFBQztnQkFFN0MsT0FBT0UsTUFBTSxDQUFDO2FBQ2Y7OztZQUVNRyxHQUFTLEVBQVRBLFdBQVM7WUU1Q2xCLE9GNENFLFNBQU9BLFNBQVMsQ0FBQ1AsS0FBSyxFQUFFRSxLQUFLLEVBQUU7Z0JBQzdCLElBQU1FLE1BQU0sR0FBR0MsQ0FBQUEsR0FBQUEsT0FBZSxBQUFjLENBQUEsaUJBQWJMLEtBQUssRUFBRUUsS0FBSyxDQUFDLEFBQUM7Z0JBRTdDLE9BQU9FLE1BQU0sQ0FBQzthQUNmOztNQWhESDs7Q0FpREMsRUFBQTtrQkEzQ29CbkIsWUFBWSxBQU5qQyJ9