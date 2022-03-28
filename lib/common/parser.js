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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIHRoaXMuc3RhcnRSdWxlID0gc3RhcnRSdWxlO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTdGFydFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRSdWxlO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IFN0YXRlLmZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgdGhpcy5ydWxlTWFwKSxcbiAgICAgICAgICBjYWxsYmFjayA9IG51bGwsXG4gICAgICAgICAgcnVsZU5vZGUgPSBydWxlLnBhcnNlKHN0YXRlLCBjYWxsYmFjayksXG4gICAgICAgICAgbm9kZSA9IHJ1bGVOb2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgY29uc3QgeyBibmYgfSA9IENsYXNzLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21CTkYoQ2xhc3MsIGJuZikge1xuICAgIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiQ29tbW9uUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJzdGF0ZSIsIlN0YXRlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwibm9kZSIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJibmYiLCJydWxlcyIsInJ1bGVzRnJvbUJORiIsInBhcnNlciIsInBhcnNlckZyb21SdWxlcyIsImZyb21CTkYiLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFa0IsSUFBQSxNQUFVLGtDQUFWLFVBQVUsRUFBQTtBQUVrQixJQUFBLE9BQXFCLFdBQXJCLHFCQUFxQixDQUFBOzs7Ozs7Ozs7OERBSm5FO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7OztBQU1lLElBQUEsQUFBTUEsWUFBWSxpQkNOOUIsQURNWTthQUFNQSxZQUFZLENBQ25CQyxTQUFTLEVBQUVDLE9BQU87MkNBUGhDO1FBUUksSUFBSSxDQUFDRCxTQUFTLEdBQUdBLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTyxDQUFDOzs7O1lBR3pCQyxHQUFZLEVBQVpBLGNBQVk7WUVaZCxPRllFQSxTQUFBQSxZQUFZLEdBQUc7Z0JBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVMsQ0FBQzthQUN2Qjs7O1lBRURHLEdBQVUsRUFBVkEsWUFBVTtZRWhCWixPRmdCRUEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLE9BQU8sSUFBSSxDQUFDRixPQUFPLENBQUM7YUFDckI7OztZQUVERyxHQUFLLEVBQUxBLE9BQUs7WUVwQlAsT0ZvQkVBLFNBQUFBLEtBQUssQ0FBQ0MsTUFBTSxFQUF5QjtvQkFBdkJDLElBQUksR0FBSkEsK0NBQXFCLGtCQUFkLElBQUksQ0FBQ04sU0FBUztnQkFDakMsSUFBTU8sS0FBSyxHQUFHQyxNQUFLLFNBQUNDLG9CQUFvQixDQUFDSixNQUFNLEVBQUUsSUFBSSxDQUFDSixPQUFPLENBQUMsRUFDeERTLFFBQVEsR0FBRyxJQUFJLEVBQ2ZDLFFBQVEsR0FBR0wsSUFBSSxDQUFDRixLQUFLLENBQUNHLEtBQUssRUFBRUcsUUFBUSxDQUFDLEVBQ3RDRSxJQUFJLEdBQUdELFFBQVEsQUFBQyxFQUFDLEdBQUc7Z0JBRTFCLE9BQU9DLElBQUksQ0FBQzthQUNiOzs7O1lBRU1DLEdBQVcsRUFBWEEsYUFBVztZRTdCcEIsT0Y2QkUsU0FBT0EsV0FBVyxDQUFDQyxLQUFLLEVBQUU7Z0JBQ3hCLElBQU0sQUFBRUMsR0FBRyxHQUFLRCxLQUFLLENBQWJDLEdBQUcsQUFBVSxFQUNmQyxLQUFLLEdBQUdDLENBQUFBLEdBQUFBLE9BQVksQUFBSyxDQUFBLGNBQUpGLEdBQUcsQ0FBQyxFQUN6QkcsTUFBTSxHQUFHQyxDQUFBQSxHQUFBQSxPQUFlLEFBQWMsQ0FBQSxpQkFBYkwsS0FBSyxFQUFFRSxLQUFLLENBQUMsQUFBQztnQkFFN0MsT0FBT0UsTUFBTSxDQUFDO2FBQ2Y7OztZQUVNRSxHQUFPLEVBQVBBLFNBQU87WUVyQ2hCLE9GcUNFLFNBQU9BLE9BQU8sQ0FBQ04sS0FBSyxFQUFFQyxHQUFHLEVBQUU7Z0JBQ3pCLElBQU1DLEtBQUssR0FBR0MsQ0FBQUEsR0FBQUEsT0FBWSxBQUFLLENBQUEsY0FBSkYsR0FBRyxDQUFDLEVBQ3pCRyxNQUFNLEdBQUdDLENBQUFBLEdBQUFBLE9BQWUsQUFBYyxDQUFBLGlCQUFiTCxLQUFLLEVBQUVFLEtBQUssQ0FBQyxBQUFDO2dCQUU3QyxPQUFPRSxNQUFNLENBQUM7YUFDZjs7O1lBRU1HLEdBQVMsRUFBVEEsV0FBUztZRTVDbEIsT0Y0Q0UsU0FBT0EsU0FBUyxDQUFDUCxLQUFLLEVBQUVFLEtBQUssRUFBRTtnQkFDN0IsSUFBTUUsTUFBTSxHQUFHQyxDQUFBQSxHQUFBQSxPQUFlLEFBQWMsQ0FBQSxpQkFBYkwsS0FBSyxFQUFFRSxLQUFLLENBQUMsQUFBQztnQkFFN0MsT0FBT0UsTUFBTSxDQUFDO2FBQ2Y7O01BaERIOztDQWlEQyxFQUFBO2tCQTNDb0JuQixZQUFZLEFBTmpDIn0=