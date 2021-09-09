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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9ub25UZXJtaW5hbFBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsUGFydE5vZGUiLCJSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJDaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJTZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSIsImNob2ljZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZURlZmluaXRpb24iLCJydWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBQ0ssR0FBd0IsQ0FBeEIsU0FBd0I7QUFDdkIsR0FBMEIsQ0FBMUIsWUFBMEI7QUFDUixHQUE2QyxDQUE3QyxVQUE2QztBQUVQLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpGLG1CQUFtQixpQkFBekIsUUFBUTtjQUFGLG1CQUFtQjthQUFuQixtQkFBbUI7OEJBQW5CLG1CQUFtQjtRQUVwQyxHQUFLLENBQUMsSUFBSSxHQUowRSxVQUFjLDBCQUs1RixxQkFBcUIsR0FMeUQsVUFBYyx3QkFNNUYsdUJBQXVCLEdBTnVELFVBQWMsMEJBTzVGLCtCQUErQixHQUFHLEdBQUcsQ0FYaEIsU0FBd0IsU0FXWSxxQkFBcUIsR0FDOUUsaUNBQWlDLEdBQUcsR0FBRyxDQVpsQixTQUF3QixTQVljLHVCQUF1QixHQUNsRixxQ0FBcUMsR0FBRyxHQUFHLENBWEgsVUFBNkMsWUFZckYsV0FBVyxHQUFHLENBQUM7WUFDYiwrQkFBK0I7WUFDL0IsaUNBQWlDO1lBQ2pDLHFDQUFxQztRQUN2QyxDQUFDLEVBQ0QsSUFBSSxHQWxCa0IsWUFBMEI7Z0VBS3JDLG1CQUFtQixhQWU5QixJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUk7O1dBZlosbUJBQW1CO0VBUHZCLEtBQVM7a0JBT0wsbUJBQW1CIn0=