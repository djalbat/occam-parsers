"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _context = _interopRequireDefault(require("./context"));
var _array = require("../utilities/array");
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
            value: function parse(tokens, param) {
                var rule = param === void 0 ? this.startRule : param;
                var context = _context.default.fromTokensAndRuleMap(tokens, this.ruleMap), ruleNode = rule.parse(context), node = ruleNode; ///
                return node;
            }
        }
    ], [
        {
            key: "fromRules",
            value: function fromRules(Parser, rules) {
                var firstRule = (0, _array).first(rules), startRule = firstRule, ruleMap = rules.reduce(function(ruleMap, rule) {
                    var ruleName = rule.getName();
                    ruleMap[ruleName] = rule;
                    return ruleMap;
                }, {
                }), parser = new Parser(startRule, ruleMap);
                return parser;
            }
        }
    ]);
    return CommonParser;
}();
exports.default = CommonParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IHRoaXMuc3RhcnRSdWxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IENvbnRleHQuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICAgIHJ1bGVOb2RlID0gcnVsZS5wYXJzZShjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gcnVsZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKFBhcnNlciwgcnVsZXMpIHtcbiAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgICAgc3RhcnRSdWxlID0gZmlyc3RSdWxlLCAgLy8vXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVzLnJlZHVjZSgocnVsZU1hcCwgcnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU1hcDtcbiAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgcGFyc2VyID0gbmV3IFBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJnZXRTdGFydFJ1bGUiLCJnZXRSdWxlTWFwIiwicGFyc2UiLCJ0b2tlbnMiLCJydWxlIiwiY29udGV4dCIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwicnVsZU5vZGUiLCJub2RlIiwiZnJvbVJ1bGVzIiwiUGFyc2VyIiwicnVsZXMiLCJmaXJzdFJ1bGUiLCJyZWR1Y2UiLCJydWxlTmFtZSIsImdldE5hbWUiLCJwYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVEsR0FBVyxDQUFYLFFBQVc7QUFFVCxHQUFvQixDQUFwQixNQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyQkEsWUFBWSxpQkFBbEIsUUFBUTthQUFGQSxZQUFZLENBQ25CQyxTQUFTLEVBQUVDLE9BQU87OEJBRFhGLFlBQVk7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVM7UUFDMUIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87O2lCQUhMRixZQUFZOztZQU0vQkcsR0FBWSxFQUFaQSxDQUFZO21CQUFaQSxRQUFRLENBQVJBLFlBQVksR0FBRyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUNGLFNBQVM7WUFDdkIsQ0FBQzs7O1lBRURHLEdBQVUsRUFBVkEsQ0FBVTttQkFBVkEsUUFBUSxDQUFSQSxVQUFVLEdBQUcsQ0FBQztnQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDRixPQUFPO1lBQ3JCLENBQUM7OztZQUVERyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxNQUFNLEVBQUVDLEtBQXFCLEVBQUUsQ0FBQztvQkFBeEJBLElBQUksR0FBSkEsS0FBcUIsY0FBZCxJQUFJLENBQUNOLFNBQVMsR0FBckJNLEtBQXFCO2dCQUNqQyxHQUFLLENBQUNDLE9BQU8sR0FuQkcsUUFBVyxTQW1CSEMsb0JBQW9CLENBQUNILE1BQU0sRUFBRSxJQUFJLENBQUNKLE9BQU8sR0FDM0RRLFFBQVEsR0FBR0gsSUFBSSxDQUFDRixLQUFLLENBQUNHLE9BQU8sR0FDN0JHLElBQUksR0FBR0QsUUFBUSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFMUIsTUFBTSxDQUFDQyxJQUFJO1lBQ2IsQ0FBQzs7OztZQUVNQyxHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxDQUFDO2dCQUMvQixHQUFLLENBQUNDLFNBQVMsT0F6QkcsTUFBb0IsUUF5QmRELEtBQUssR0FDdkJiLFNBQVMsR0FBR2MsU0FBUyxFQUNyQmIsT0FBTyxHQUFHWSxLQUFLLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQVBkLE9BQU8sRUFBRUssSUFBSSxFQUFLLENBQUM7b0JBQ3pDLEdBQUssQ0FBQ1UsUUFBUSxHQUFHVixJQUFJLENBQUNXLE9BQU87b0JBRTdCaEIsT0FBTyxDQUFDZSxRQUFRLElBQUlWLElBQUk7b0JBRXhCLE1BQU0sQ0FBQ0wsT0FBTztnQkFDaEIsQ0FBQyxFQUFFLENBQUM7Z0JBQUEsQ0FBQyxHQUNMaUIsTUFBTSxHQUFHLEdBQUcsQ0FBQ04sTUFBTSxDQUFDWixTQUFTLEVBQUVDLE9BQU87Z0JBRTVDLE1BQU0sQ0FBQ2lCLE1BQU07WUFDZixDQUFDOzs7V0FuQ2tCbkIsWUFBWTs7a0JBQVpBLFlBQVkifQ==