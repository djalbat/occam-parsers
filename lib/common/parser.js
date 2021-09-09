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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsImNvbnN0cnVjdG9yIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJjb250ZXh0IiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJydWxlTm9kZSIsIm5vZGUiLCJmcm9tUnVsZXMiLCJQYXJzZXIiLCJydWxlcyIsImZpcnN0UnVsZSIsInJlZHVjZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInBhcnNlciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUSxHQUFXLENBQVgsUUFBVztBQUVULEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJCLFlBQVksaUJBQWxCLFFBQVE7YUFBRixZQUFZLENBQ25CLFNBQVMsRUFBRSxPQUFPOzhCQURYLFlBQVk7UUFFN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTzs7aUJBSEwsWUFBWTs7WUFNL0IsR0FBWSxHQUFaLFlBQVk7bUJBQVosUUFBUSxDQUFSLFlBQVksR0FBRyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN2QixDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTttQkFBVixRQUFRLENBQVIsVUFBVSxHQUFHLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3JCLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLO21CQUFMLFFBQVEsQ0FBUixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQXFCLEVBQUUsQ0FBQztvQkFBeEIsSUFBSSxHQUFKLEtBQXFCLGNBQWQsSUFBSSxDQUFDLFNBQVMsR0FBckIsS0FBcUI7Z0JBQ2pDLEdBQUssQ0FBQyxPQUFPLEdBbkJHLFFBQVcsU0FtQkgsb0JBQW9CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQzNELFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FDN0IsSUFBSSxHQUFHLFFBQVEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTFCLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQzs7OztZQUVNLEdBQVMsR0FBVCxTQUFTO21CQUFoQixRQUFRLENBQUQsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDL0IsR0FBSyxDQUFDLFNBQVMsT0F6QkcsTUFBb0IsUUF5QmQsS0FBSyxHQUN2QixTQUFTLEdBQUcsU0FBUyxFQUNyQixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsT0FBTyxFQUFFLElBQUksRUFBSyxDQUFDO29CQUN6QyxHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPO29CQUU3QixPQUFPLENBQUMsUUFBUSxJQUFJLElBQUk7b0JBRXhCLE1BQU0sQ0FBQyxPQUFPO2dCQUNoQixDQUFDLEVBQUUsQ0FBQztnQkFBQSxDQUFDLEdBQ0wsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU87Z0JBRTVDLE1BQU0sQ0FBQyxNQUFNO1lBQ2YsQ0FBQzs7O1dBbkNrQixZQUFZOztrQkFBWixZQUFZIn0=