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
                var firstRule = (0, _array).first(rules), startRule = firstRule, ruleMap = rules.reduce(function(ruleMap1, rule) {
                    var ruleName = rule.getName();
                    ruleMap1[ruleName] = rule;
                    return ruleMap1;
                }, {
                }), parser = new Parser(startRule, ruleMap);
                return parser;
            }
        }
    ]);
    return CommonParser;
}();
exports.default = CommonParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IHRoaXMuc3RhcnRSdWxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IENvbnRleHQuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICAgIHJ1bGVOb2RlID0gcnVsZS5wYXJzZShjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gcnVsZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKFBhcnNlciwgcnVsZXMpIHtcbiAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgICAgc3RhcnRSdWxlID0gZmlyc3RSdWxlLCAgLy8vXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVzLnJlZHVjZSgocnVsZU1hcCwgcnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU1hcDtcbiAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgcGFyc2VyID0gbmV3IFBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVEsR0FBVyxDQUFYLFFBQVc7QUFFVCxHQUFvQixDQUFwQixNQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyQixZQUFZO2FBQVosWUFBWSxDQUNuQixTQUFTLEVBQUUsT0FBTzs4QkFEWCxZQUFZO2FBRXhCLFNBQVMsR0FBRyxTQUFTO2FBQ3JCLE9BQU8sR0FBRyxPQUFPOztpQkFITCxZQUFZOztZQU0vQixHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLEdBQUcsQ0FBQzs0QkFDRixTQUFTO1lBQ3ZCLENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsR0FBRyxDQUFDOzRCQUNBLE9BQU87WUFDckIsQ0FBQzs7O1lBRUQsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFxQixFQUFFLENBQUM7b0JBQXhCLElBQUksR0FBSixLQUFxQixtQkFBVCxTQUFTLEdBQXJCLEtBQXFCO2dCQUNqQyxHQUFLLENBQUMsT0FBTyxHQW5CRyxRQUFXLFNBbUJILG9CQUFvQixDQUFDLE1BQU0sT0FBTyxPQUFPLEdBQzNELFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FDN0IsSUFBSSxHQUFHLFFBQVEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRW5CLElBQUk7WUFDYixDQUFDOzs7O1lBRU0sR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDL0IsR0FBSyxDQUFDLFNBQVMsT0F6QkcsTUFBb0IsUUF5QmQsS0FBSyxHQUN2QixTQUFTLEdBQUcsU0FBUyxFQUNyQixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sVUFBRSxRQUFPLEVBQUUsSUFBSSxFQUFLLENBQUM7b0JBQ3pDLEdBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU87b0JBRTdCLFFBQU8sQ0FBQyxRQUFRLElBQUksSUFBSTsyQkFFakIsUUFBTztnQkFDaEIsQ0FBQztvQkFDRCxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTzt1QkFFckMsTUFBTTtZQUNmLENBQUM7OztXQW5Da0IsWUFBWTs7a0JBQVosWUFBWSJ9