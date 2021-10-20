"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _ruleName = _interopRequireDefault(require("../definition/ruleName"));
var _nonTerminal = _interopRequireDefault(require("../node/part/nonTerminal"));
var _ruleName1 = _interopRequireDefault(require("../definition/partRule/nonTerminal/ruleName"));
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var NonTerminalPartRule = /*#__PURE__*/ function(Rule) {
    _inherits(NonTerminalPartRule, Rule);
    function NonTerminalPartRule() {
        _classCallCheck(this, NonTerminalPartRule);
        var name = _ruleNames.NonTerminalPartRuleName, choiceOfPartsRuleName = _ruleNames.ChoiceOfPartsRuleName, sequenceOfPartsRuleName = _ruleNames.SequenceOfPartsRuleName, choiceOfPartsRuleNameDefinition = new _ruleName.default(choiceOfPartsRuleName), sequenceOfPartsRuleNameDefinition = new _ruleName.default(sequenceOfPartsRuleName), ruleNameNonTerminalPartRuleDefinition = new _ruleName1.default(), definitions = [
            choiceOfPartsRuleNameDefinition,
            sequenceOfPartsRuleNameDefinition,
            ruleNameNonTerminalPartRuleDefinition
        ], Node = _nonTerminal.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRule).call(this, name, definitions, Node));
    }
    return NonTerminalPartRule;
}(_rule.default);
exports.default = NonTerminalPartRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9ub25UZXJtaW5hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0Tm9kZSBmcm9tIFwiLi4vbm9kZS9wYXJ0L25vblRlcm1pbmFsXCI7XG5pbXBvcnQgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSwgQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLCBTZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lID0gQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lID0gU2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJuYW1lIiwiY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwic2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUiLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwic2VxdWVuY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uIiwicnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNLLEdBQXdCLENBQXhCLFNBQXdCO0FBQ3ZCLEdBQTBCLENBQTFCLFlBQTBCO0FBQ1IsR0FBNkMsQ0FBN0MsVUFBNkM7QUFFUCxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqRkEsbUJBQW1CLGlCQUF6QixRQUFRO2NBQUZBLG1CQUFtQjthQUFuQkEsbUJBQW1COzhCQUFuQkEsbUJBQW1CO1FBRXBDLEdBQUssQ0FBQ0MsSUFBSSxHQUowRSxVQUFjLDBCQUs1RkMscUJBQXFCLEdBTHlELFVBQWMsd0JBTTVGQyx1QkFBdUIsR0FOdUQsVUFBYywwQkFPNUZDLCtCQUErQixHQUFHLEdBQUcsQ0FYaEIsU0FBd0IsU0FXWUYscUJBQXFCLEdBQzlFRyxpQ0FBaUMsR0FBRyxHQUFHLENBWmxCLFNBQXdCLFNBWWNGLHVCQUF1QixHQUNsRkcscUNBQXFDLEdBQUcsR0FBRyxDQVhILFVBQTZDLFlBWXJGQyxXQUFXLEdBQUcsQ0FBQztZQUNiSCwrQkFBK0I7WUFDL0JDLGlDQUFpQztZQUNqQ0MscUNBQXFDO1FBQ3ZDLENBQUMsRUFDREUsSUFBSSxHQWxCa0IsWUFBMEI7Z0VBS3JDUixtQkFBbUIsYUFlOUJDLElBQUksRUFBRU0sV0FBVyxFQUFFQyxJQUFJOztXQWZaUixtQkFBbUI7RUFQdkIsS0FBUztrQkFPTEEsbUJBQW1CIn0=