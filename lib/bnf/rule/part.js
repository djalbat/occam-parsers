"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _part = _interopRequireDefault(require("../node/part"));
var _ruleName = _interopRequireDefault(require("../definition/ruleName"));
var _terminal = _interopRequireDefault(require("../definition/partRule/terminal"));
var _nonTerminal = _interopRequireDefault(require("../definition/partRule/nonTerminal"));
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
var PartRule = /*#__PURE__*/ function(Rule) {
    _inherits(PartRule, Rule);
    function PartRule() {
        _classCallCheck(this, PartRule);
        var name = _ruleNames.PartRuleName, terminalPartRuleDefinition = new _terminal.default(), nonTerminalPartRuleDefinition = new _nonTerminal.default(), noWhitespacePartRuleNameDefinition = new _ruleName.default(_ruleNames.NoWhitespacePartRuleName), definitions = [
            nonTerminalPartRuleDefinition,
            terminalPartRuleDefinition,
            noWhitespacePartRuleNameDefinition
        ], Node = _part.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(PartRule).call(this, name, definitions, Node));
    }
    return PartRule;
}(_rule.default);
exports.default = PartRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJQYXJ0Tm9kZSIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJQYXJ0UnVsZU5hbWUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUiLCJQYXJ0UnVsZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwibm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBQ0wsR0FBYyxDQUFkLEtBQWM7QUFDSixHQUF3QixDQUF4QixTQUF3QjtBQUNoQixHQUFpQyxDQUFqQyxTQUFpQztBQUM5QixHQUFvQyxDQUFwQyxZQUFvQztBQUV2QixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoRCxRQUFRLGlCQUFkLFFBQVE7Y0FBRixRQUFRO2FBQVIsUUFBUTs4QkFBUixRQUFRO1FBRXpCLEdBQUssQ0FBQyxJQUFJLEdBSnlDLFVBQWMsZUFLM0QsMEJBQTBCLEdBQUcsR0FBRyxDQVJILFNBQWlDLFlBUzlELDZCQUE2QixHQUFHLEdBQUcsQ0FSSCxZQUFvQyxZQVNwRSxrQ0FBa0MsR0FBRyxHQUFHLENBWG5CLFNBQXdCLFNBSUEsVUFBYyw0QkFRM0QsV0FBVyxHQUFHLENBQUM7WUFDYiw2QkFBNkI7WUFDN0IsMEJBQTBCO1lBQzFCLGtDQUFrQztRQUNwQyxDQUFDLEVBQ0QsSUFBSSxHQWxCTyxLQUFjO2dFQU9kLFFBQVEsYUFhbkIsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQWJaLFFBQVE7RUFSWixLQUFTO2tCQVFMLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBQYXJ0Tm9kZSBmcm9tIFwiLi4vbm9kZS9wYXJ0XCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcGFydFJ1bGUvdGVybWluYWxcIjtcbmltcG9ydCBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBQYXJ0UnVsZU5hbWUsIE5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdfQ==