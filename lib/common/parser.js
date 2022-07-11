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
var _rules = require("../utilities/rules");
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
                var bnf = Class.bnf, rules = (0, _rules.rulesFromBNF)(bnf), parser = (0, _parser.parserFromRules)(Class, rules);
                return parser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                var rules = (0, _rules.rulesFromBNF)(bnf), parser = (0, _parser.parserFromRules)(Class, rules);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGUgZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmltcG9ydCB7IHJ1bGVzRnJvbUJORiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcbmltcG9ydCB7IHBhcnNlckZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIHRoaXMuc3RhcnRSdWxlID0gc3RhcnRSdWxlO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTdGFydFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRSdWxlO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IFN0YXRlLmZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgdGhpcy5ydWxlTWFwKSxcbiAgICAgICAgICBjYWxsYmFjayA9IG51bGwsXG4gICAgICAgICAgcnVsZU5vZGUgPSBydWxlLnBhcnNlKHN0YXRlLCBjYWxsYmFjayksXG4gICAgICAgICAgbm9kZSA9IHJ1bGVOb2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgY29uc3QgeyBibmYgfSA9IENsYXNzLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21CTkYoQ2xhc3MsIGJuZikge1xuICAgIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ29tbW9uUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJzdGF0ZSIsIlN0YXRlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwibm9kZSIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJibmYiLCJydWxlcyIsInJ1bGVzRnJvbUJORiIsInBhcnNlciIsInBhcnNlckZyb21SdWxlcyIsImZyb21CTkYiLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU9RQSxZQUFZOzs7MERBTGYsVUFBVTtxQkFFQyxvQkFBb0I7c0JBQ2pCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLFlBQVksaUJBQWxCO2FBQU1BLFlBQVksQ0FDbkJDLFNBQVMsRUFBRUMsT0FBTzs7UUFDNUIsSUFBSSxDQUFDRCxTQUFTLEdBQUdBLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTyxDQUFDOzs7O1lBR3pCQyxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksR0FBRztnQkFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUyxDQUFDO2FBQ3ZCOzs7WUFFREcsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsT0FBTyxJQUFJLENBQUNGLE9BQU8sQ0FBQzthQUNyQjs7O1lBRURHLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxNQUFNLEVBQXlCO29CQUF2QkMsSUFBSSxHQUFKQSwrQ0FBcUIsa0JBQWQsSUFBSSxDQUFDTixTQUFTO2dCQUNqQyxJQUFNTyxLQUFLLEdBQUdDLE1BQUssUUFBQSxDQUFDQyxvQkFBb0IsQ0FBQ0osTUFBTSxFQUFFLElBQUksQ0FBQ0osT0FBTyxDQUFDLEVBQ3hEUyxRQUFRLEdBQUcsSUFBSSxFQUNmQyxRQUFRLEdBQUdMLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxLQUFLLEVBQUVHLFFBQVEsQ0FBQyxFQUN0Q0UsSUFBSSxHQUFHRCxRQUFRLEFBQUMsRUFBQyxHQUFHO2dCQUUxQixPQUFPQyxJQUFJLENBQUM7YUFDYjs7OztZQUVNQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFO2dCQUN4QixJQUFNLEFBQUVDLEdBQUcsR0FBS0QsS0FBSyxDQUFiQyxHQUFHLEFBQVUsRUFDZkMsS0FBSyxHQUFHQyxJQUFBQSxNQUFZLGFBQUEsRUFBQ0YsR0FBRyxDQUFDLEVBQ3pCRyxNQUFNLEdBQUdDLElBQUFBLE9BQWUsZ0JBQUEsRUFBQ0wsS0FBSyxFQUFFRSxLQUFLLENBQUMsQUFBQztnQkFFN0MsT0FBT0UsTUFBTSxDQUFDO2FBQ2Y7OztZQUVNRSxHQUFPLEVBQVBBLFNBQU87bUJBQWQsU0FBT0EsT0FBTyxDQUFDTixLQUFLLEVBQUVDLEdBQUcsRUFBRTtnQkFDekIsSUFBTUMsS0FBSyxHQUFHQyxJQUFBQSxNQUFZLGFBQUEsRUFBQ0YsR0FBRyxDQUFDLEVBQ3pCRyxNQUFNLEdBQUdDLElBQUFBLE9BQWUsZ0JBQUEsRUFBQ0wsS0FBSyxFQUFFRSxLQUFLLENBQUMsQUFBQztnQkFFN0MsT0FBT0UsTUFBTSxDQUFDO2FBQ2Y7OztZQUVNRyxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ1AsS0FBSyxFQUFFRSxLQUFLLEVBQUU7Z0JBQzdCLElBQU1FLE1BQU0sR0FBR0MsSUFBQUEsT0FBZSxnQkFBQSxFQUFDTCxLQUFLLEVBQUVFLEtBQUssQ0FBQyxBQUFDO2dCQUU3QyxPQUFPRSxNQUFNLENBQUM7YUFDZjs7OztDQUNGLEVBQUEifQ==