"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _context = _interopRequireDefault(require("../context"));
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
                var context = _context.default.fromTokensAndRuleMap(tokens, this.ruleMap), ruleNode = rule.parse(context), node = ruleNode; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIHRoaXMuc3RhcnRSdWxlID0gc3RhcnRSdWxlO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTdGFydFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRSdWxlO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gQ29udGV4dC5mcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHRoaXMucnVsZU1hcCksXG4gICAgICAgICAgcnVsZU5vZGUgPSBydWxlLnBhcnNlKGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBydWxlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGNvbnN0IHsgYm5mIH0gPSBDbGFzcyxcbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpLFxuICAgICAgICAgIHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKENsYXNzLCBibmYpIHtcbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpLFxuICAgICAgICAgIHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XG4gICAgY29uc3QgcGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tbW9uUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJjb250ZXh0IiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJydWxlTm9kZSIsIm5vZGUiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiYm5mIiwicnVsZXMiLCJwYXJzZXIiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVRLEdBQVksQ0FBWixRQUFZO0FBRWMsR0FBcUIsQ0FBckIsT0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUNBLFlBQVksaUJBQWxCLFFBQVE7YUFBRkEsWUFBWSxDQUNuQkMsU0FBUyxFQUFFQyxPQUFPOzhCQURYRixZQUFZO1FBRTdCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO1FBQzFCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPOztpQkFITEYsWUFBWTs7WUFNL0JHLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLEdBQUcsQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDRixTQUFTO1lBQ3ZCLENBQUM7OztZQUVERyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQ0YsT0FBTztZQUNyQixDQUFDOzs7WUFFREcsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsTUFBTSxFQUF5QixDQUFDO29CQUF4QkMsSUFBSSxvRUFBRyxJQUFJLENBQUNOLFNBQVM7Z0JBQ2pDLEdBQUssQ0FBQ08sT0FBTyxHQW5CRyxRQUFZLFNBbUJKQyxvQkFBb0IsQ0FBQ0gsTUFBTSxFQUFFLElBQUksQ0FBQ0osT0FBTyxHQUMzRFEsUUFBUSxHQUFHSCxJQUFJLENBQUNGLEtBQUssQ0FBQ0csT0FBTyxHQUM3QkcsSUFBSSxHQUFHRCxRQUFRLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUUxQixNQUFNLENBQUNDLElBQUk7WUFDYixDQUFDOzs7O1lBRU1DLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUN6QixHQUFLLENBQUdDLEdBQUcsR0FBS0QsS0FBSyxDQUFiQyxHQUFHLEVBQ0xDLEtBQUssT0ExQitCLE9BQXFCLGVBMEJwQ0QsR0FBRyxHQUN4QkUsTUFBTSxPQTNCOEIsT0FBcUIsa0JBMkJoQ0gsS0FBSyxFQUFFRSxLQUFLO2dCQUUzQyxNQUFNLENBQUNDLE1BQU07WUFDZixDQUFDOzs7WUFFTUMsR0FBTyxFQUFQQSxDQUFPO21CQUFkLFFBQVEsQ0FBREEsT0FBTyxDQUFDSixLQUFLLEVBQUVDLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixHQUFLLENBQUNDLEtBQUssT0FqQytCLE9BQXFCLGVBaUNwQ0QsR0FBRyxHQUN4QkUsTUFBTSxPQWxDOEIsT0FBcUIsa0JBa0NoQ0gsS0FBSyxFQUFFRSxLQUFLO2dCQUUzQyxNQUFNLENBQUNDLE1BQU07WUFDZixDQUFDOzs7WUFFTUUsR0FBUyxFQUFUQSxDQUFTO21CQUFoQixRQUFRLENBQURBLFNBQVMsQ0FBQ0wsS0FBSyxFQUFFRSxLQUFLLEVBQUUsQ0FBQztnQkFDOUIsR0FBSyxDQUFDQyxNQUFNLE9BeEM4QixPQUFxQixrQkF3Q2hDSCxLQUFLLEVBQUVFLEtBQUs7Z0JBRTNDLE1BQU0sQ0FBQ0MsTUFBTTtZQUNmLENBQUM7OztXQXpDa0JoQixZQUFZOztrQkFBWkEsWUFBWSJ9