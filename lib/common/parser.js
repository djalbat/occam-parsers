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
var CommonParser = function() {
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
                var firstRule = _array.first(rules), startRule = firstRule, ruleMap = rules.reduce(function(ruleMap1, rule) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IHRoaXMuc3RhcnRSdWxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IENvbnRleHQuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICAgIHJ1bGVOb2RlID0gcnVsZS5wYXJzZShjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gcnVsZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKFBhcnNlciwgcnVsZXMpIHtcbiAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgICAgc3RhcnRSdWxlID0gZmlyc3RSdWxlLCAgLy8vXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVzLnJlZHVjZSgocnVsZU1hcCwgcnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU1hcDtcbiAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgcGFyc2VyID0gbmV3IFBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsUUFBQTtJQUVBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxZQUFBO2FBQUEsWUFBQSxDQUNBLFNBQUEsRUFBQSxPQUFBOzhCQURBLFlBQUE7YUFFQSxTQUFBLEdBQUEsU0FBQTthQUNBLE9BQUEsR0FBQSxPQUFBOztpQkFIQSxZQUFBOztBQU1BLGVBQUEsR0FBQSxZQUFBOzRCQUFBLFlBQUE7NEJBQ0EsU0FBQTs7OztBQUdBLGVBQUEsR0FBQSxVQUFBOzRCQUFBLFVBQUE7NEJBQ0EsT0FBQTs7OztBQUdBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsS0FBQTtvQkFBQSxJQUFBLEdBQUEsS0FBQSxtQkFBQSxTQUFBLEdBQUEsS0FBQTtvQkFDQSxPQUFBLEdBbkJBLFFBQUEsU0FtQkEsb0JBQUEsQ0FBQSxNQUFBLE9BQUEsT0FBQSxHQUNBLFFBQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLE9BQUEsR0FDQSxJQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3VCQUVBLElBQUE7Ozs7O0FBR0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxLQUFBO29CQUNBLFNBQUEsR0F6QkEsTUFBQSxPQXlCQSxLQUFBLEdBQ0EsU0FBQSxHQUFBLFNBQUEsRUFDQSxPQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsVUFBQSxRQUFBLEVBQUEsSUFBQTt3QkFDQSxRQUFBLEdBQUEsSUFBQSxDQUFBLE9BQUE7QUFFQSw0QkFBQSxDQUFBLFFBQUEsSUFBQSxJQUFBOzJCQUVBLFFBQUE7O29CQUVBLE1BQUEsT0FBQSxNQUFBLENBQUEsU0FBQSxFQUFBLE9BQUE7dUJBRUEsTUFBQTs7OztXQWxDQSxZQUFBOztrQkFBQSxZQUFBIn0=