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
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
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
                var node = null;
                var nodes = [], state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, parsed = rule.parse(nodes, state, callback);
                if (parsed) {
                    var firstNode = first(nodes);
                    node = firstNode; ///
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IHRoaXMuc3RhcnRSdWxlKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZSA9IFN0YXRlLmZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgdGhpcy5ydWxlTWFwKSxcbiAgICAgICAgICBjYWxsYmFjayA9IG51bGwsXG4gICAgICAgICAgcGFyc2VkID0gcnVsZS5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihDbGFzcywgYm5mKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb21tb25QYXJzZXIiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJub2RlIiwibm9kZXMiLCJzdGF0ZSIsIlN0YXRlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJjYWxsYmFjayIsInBhcnNlZCIsImZpcnN0Tm9kZSIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJibmYiLCJydWxlcyIsInJ1bGVzRnJvbUJORiIsInBhcnNlciIsInBhcnNlckZyb21SdWxlcyIsImZyb21CTkYiLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOzREQUViO3NCQUU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFNLEFBQUVDLFFBQVVDLDBCQUFWRDtBQUVPLElBQUEsQUFBTUQsNkJBQU47YUFBTUEsYUFDUEcsU0FBUyxFQUFFQyxPQUFPO2dDQURYSjtRQUVqQixJQUFJLENBQUNHLFlBQVlBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVUE7O2tCQUhFSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNO29CQUFFQyxPQUFBQSxpRUFBTyxJQUFJLENBQUNOO2dCQUN4QixJQUFJTyxPQUFPO2dCQUVYLElBQU1DLFFBQVEsRUFBRSxFQUNWQyxRQUFRQyxlQUFNQyxxQkFBcUJOLFFBQVEsSUFBSSxDQUFDSixVQUNoRFcsV0FBVyxNQUNYQyxTQUFTUCxLQUFLRixNQUFNSSxPQUFPQyxPQUFPRztnQkFFeEMsSUFBSUMsUUFBUTtvQkFDVixJQUFNQyxZQUFZaEIsTUFBTVU7b0JBRXhCRCxPQUFPTyxXQUFXLEdBQUc7Z0JBQ3ZCO2dCQUVBLE9BQU9QO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSztnQkFDdEIsSUFBTSxBQUFFQyxNQUFRRCxNQUFSQyxLQUNGQyxRQUFRQyxJQUFBQSxzQkFBYUYsTUFDckJHLFNBQVNDLElBQUFBLHlCQUFnQkwsT0FBT0U7Z0JBRXRDLE9BQU9FO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxRQUFRTixLQUFLLEVBQUVDLEdBQUc7Z0JBQ3ZCLElBQU1DLFFBQVFDLElBQUFBLHNCQUFhRixNQUNyQkcsU0FBU0MsSUFBQUEseUJBQWdCTCxPQUFPRTtnQkFFdEMsT0FBT0U7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVQLEtBQUssRUFBRUUsS0FBSztnQkFDM0IsSUFBTUUsU0FBU0MsSUFBQUEseUJBQWdCTCxPQUFPRTtnQkFFdEMsT0FBT0U7WUFDVDs7O1dBbERtQnZCIn0=