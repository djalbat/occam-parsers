"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CommonParser;
    }
});
var _state = /*#__PURE__*/ _interopRequireDefault(require("../state"));
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
                var bnf = Class.bnf, rules = (0, _parser.rulesFromBNF)(bnf), parser = (0, _parser.parserFromRules)(Class, rules);
                return parser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                var rules = (0, _parser.rulesFromBNF)(bnf), parser = (0, _parser.parserFromRules)(Class, rules);
                return parser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                var parser = (0, _parser.parserFromRules)(Class, rules);
                return parser;
            }
        }
    ]);
    return CommonParser;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGUgZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmltcG9ydCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSkge1xuICAgIGNvbnN0IHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICAgIGNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgICBydWxlTm9kZSA9IHJ1bGUucGFyc2Uoc3RhdGUsIGNhbGxiYWNrKSxcbiAgICAgICAgICBub2RlID0gcnVsZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihDbGFzcywgYm5mKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb21tb25QYXJzZXIiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0U3RhcnRSdWxlIiwiZ2V0UnVsZU1hcCIsInBhcnNlIiwidG9rZW5zIiwicnVsZSIsInN0YXRlIiwiU3RhdGUiLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsImNhbGxiYWNrIiwicnVsZU5vZGUiLCJub2RlIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsImJuZiIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyIiwicGFyc2VyRnJvbVJ1bGVzIiwiZnJvbUJORiIsImZyb21SdWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBTVFBLFlBQVk7OzswREFKZixVQUFVO3NCQUVrQixxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBQSxBQUFNQSxZQUFZLGlCQUFsQjthQUFNQSxZQUFZLENBQ25CQyxTQUFTLEVBQUVDLE9BQU87O1FBQzVCLElBQUksQ0FBQ0QsU0FBUyxHQUFHQSxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU8sQ0FBQzs7OztZQUd6QkMsR0FBWSxFQUFaQSxjQUFZO21CQUFaQSxTQUFBQSxZQUFZLEdBQUc7Z0JBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVMsQ0FBQzthQUN2Qjs7O1lBRURHLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLE9BQU8sSUFBSSxDQUFDRixPQUFPLENBQUM7YUFDckI7OztZQUVERyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsTUFBTSxFQUF5QjtvQkFBdkJDLElBQUksR0FBSkEsK0NBQXFCLGtCQUFkLElBQUksQ0FBQ04sU0FBUztnQkFDakMsSUFBTU8sS0FBSyxHQUFHQyxNQUFLLFFBQUEsQ0FBQ0Msb0JBQW9CLENBQUNKLE1BQU0sRUFBRSxJQUFJLENBQUNKLE9BQU8sQ0FBQyxFQUN4RFMsUUFBUSxHQUFHLElBQUksRUFDZkMsUUFBUSxHQUFHTCxJQUFJLENBQUNGLEtBQUssQ0FBQ0csS0FBSyxFQUFFRyxRQUFRLENBQUMsRUFDdENFLElBQUksR0FBR0QsUUFBUSxBQUFDLEVBQUMsR0FBRztnQkFFMUIsT0FBT0MsSUFBSSxDQUFDO2FBQ2I7Ozs7WUFFTUMsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUNDLEtBQUssRUFBRTtnQkFDeEIsSUFBTSxBQUFFQyxHQUFHLEdBQUtELEtBQUssQ0FBYkMsR0FBRyxBQUFVLEVBQ2ZDLEtBQUssR0FBR0MsSUFBQUEsT0FBWSxhQUFBLEVBQUNGLEdBQUcsQ0FBQyxFQUN6QkcsTUFBTSxHQUFHQyxJQUFBQSxPQUFlLGdCQUFBLEVBQUNMLEtBQUssRUFBRUUsS0FBSyxDQUFDLEFBQUM7Z0JBRTdDLE9BQU9FLE1BQU0sQ0FBQzthQUNmOzs7WUFFTUUsR0FBTyxFQUFQQSxTQUFPO21CQUFkLFNBQU9BLE9BQU8sQ0FBQ04sS0FBSyxFQUFFQyxHQUFHLEVBQUU7Z0JBQ3pCLElBQU1DLEtBQUssR0FBR0MsSUFBQUEsT0FBWSxhQUFBLEVBQUNGLEdBQUcsQ0FBQyxFQUN6QkcsTUFBTSxHQUFHQyxJQUFBQSxPQUFlLGdCQUFBLEVBQUNMLEtBQUssRUFBRUUsS0FBSyxDQUFDLEFBQUM7Z0JBRTdDLE9BQU9FLE1BQU0sQ0FBQzthQUNmOzs7WUFFTUcsR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNQLEtBQUssRUFBRUUsS0FBSyxFQUFFO2dCQUM3QixJQUFNRSxNQUFNLEdBQUdDLElBQUFBLE9BQWUsZ0JBQUEsRUFBQ0wsS0FBSyxFQUFFRSxLQUFLLENBQUMsQUFBQztnQkFFN0MsT0FBT0UsTUFBTSxDQUFDO2FBQ2Y7Ozs7Q0FDRixFQUFBIn0=