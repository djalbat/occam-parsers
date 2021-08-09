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
        ], Node1 = _nonTerminal.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRule).call(this, name, definitions, Node1));
    }
    return NonTerminalPartRule;
}(_rule.default);
exports.default = NonTerminalPartRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9ub25UZXJtaW5hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0Tm9kZSBmcm9tIFwiLi4vbm9kZS9wYXJ0L25vblRlcm1pbmFsXCI7XG5pbXBvcnQgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSwgQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLCBTZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lID0gQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lID0gU2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lKSxcbiAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSksXG4gICAgICAgICAgcnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgcnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBQ0ssR0FBd0IsQ0FBeEIsU0FBd0I7QUFDdkIsR0FBMEIsQ0FBMUIsWUFBMEI7QUFDUixHQUE2QyxDQUE3QyxVQUE2QztBQUVQLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpGLG1CQUFtQjtjQUFuQixtQkFBbUI7YUFBbkIsbUJBQW1COzhCQUFuQixtQkFBbUI7UUFFcEMsR0FBSyxDQUFDLElBQUksR0FKMEUsVUFBYywwQkFLNUYscUJBQXFCLEdBTHlELFVBQWMsd0JBTTVGLHVCQUF1QixHQU51RCxVQUFjLDBCQU81RiwrQkFBK0IsR0FBRyxHQUFHLENBWGhCLFNBQXdCLFNBV1kscUJBQXFCLEdBQ2hGLGlDQUFpQyxHQUFHLEdBQUcsQ0FaaEIsU0FBd0IsU0FZWSx1QkFBdUIsR0FDaEYscUNBQXFDLEdBQUcsR0FBRyxDQVhILFVBQTZDLFlBWXJGLFdBQVc7WUFDVCwrQkFBK0I7WUFDL0IsaUNBQWlDO1lBQ2pDLHFDQUFxQztXQUV2QyxLQUFJLEdBbEJrQixZQUEwQjtnRUFLckMsbUJBQW1CLGFBZTlCLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSTs7V0FmWixtQkFBbUI7RUFQdkIsS0FBUztrQkFPTCxtQkFBbUIifQ==