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
var _state = /*#__PURE__*/ _interop_require_default(require("../state"));
var _parser = require("../utilities/parser");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var CommonParser = /*#__PURE__*/ function() {
    function CommonParser(startRule, ruleMap) {
        _class_call_check(this, CommonParser);
        this.startRule = startRule;
        this.ruleMap = ruleMap;
    }
    _create_class(CommonParser, [
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
                var state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, precedence = null, parentRuleName = null, ruleNode = rule.parse(state, callback, precedence, parentRuleName), node = ruleNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGUgZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmltcG9ydCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSkge1xuICAgIGNvbnN0IHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICAgIGNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBwYXJlbnRSdWxlTmFtZSA9IG51bGwsXG4gICAgICAgICAgcnVsZU5vZGUgPSBydWxlLnBhcnNlKHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcGFyZW50UnVsZU5hbWUpLFxuICAgICAgICAgIG5vZGUgPSBydWxlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGNvbnN0IHsgYm5mIH0gPSBDbGFzcyxcbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpLFxuICAgICAgICAgIHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKENsYXNzLCBibmYpIHtcbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpLFxuICAgICAgICAgIHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XG4gICAgY29uc3QgcGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJnZXRTdGFydFJ1bGUiLCJnZXRSdWxlTWFwIiwicGFyc2UiLCJ0b2tlbnMiLCJydWxlIiwic3RhdGUiLCJTdGF0ZSIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwiY2FsbGJhY2siLCJwcmVjZWRlbmNlIiwicGFyZW50UnVsZU5hbWUiLCJydWxlTm9kZSIsIm5vZGUiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiYm5mIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXIiLCJwYXJzZXJGcm9tUnVsZXMiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs0REFKSDtzQkFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxTQUFTLEVBQUVDLE9BQU87Z0NBRFhGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWUE7UUFDakIsSUFBSSxDQUFDQyxVQUFVQTs7a0JBSEVGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE1BQU07b0JBQUVDLE9BQUFBLGlFQUFPLElBQUksQ0FBQ047Z0JBQ3hCLElBQU1PLFFBQVFDLGVBQU1DLHFCQUFxQkosUUFBUSxJQUFJLENBQUNKLFVBQ2hEUyxXQUFXLE1BQ1hDLGFBQWEsTUFDYkMsaUJBQWlCLE1BQ2pCQyxXQUFXUCxLQUFLRixNQUFNRyxPQUFPRyxVQUFVQyxZQUFZQyxpQkFDbkRFLE9BQU9ELFVBQVUsR0FBRztnQkFFMUIsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUN0QixJQUFNLEFBQUVDLE1BQVFELE1BQVJDLEtBQ0ZDLFFBQVFDLElBQUFBLHNCQUFhRixNQUNyQkcsU0FBU0MsSUFBQUEseUJBQWdCTCxPQUFPRTtnQkFFdEMsT0FBT0U7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFOLEtBQUssRUFBRUMsR0FBRztnQkFDdkIsSUFBTUMsUUFBUUMsSUFBQUEsc0JBQWFGLE1BQ3JCRyxTQUFTQyxJQUFBQSx5QkFBZ0JMLE9BQU9FO2dCQUV0QyxPQUFPRTtZQUNUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsVUFBVVAsS0FBSyxFQUFFRSxLQUFLO2dCQUMzQixJQUFNRSxTQUFTQyxJQUFBQSx5QkFBZ0JMLE9BQU9FO2dCQUV0QyxPQUFPRTtZQUNUOzs7V0E1Q21CckIifQ==