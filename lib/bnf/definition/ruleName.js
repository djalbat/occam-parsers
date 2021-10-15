"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
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
var RuleNameDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleNameDefinition, Definition);
    function RuleNameDefinition(ruleName) {
        _classCallCheck(this, RuleNameDefinition);
        var ruleNameRuleNamePart = new _ruleName.default(ruleName), parts = [
            ruleNameRuleNamePart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameDefinition).call(this, parts));
    }
    return RuleNameDefinition;
}(_definition.default);
exports.default = RuleNameDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJydWxlTmFtZSIsInJ1bGVOYW1lUnVsZU5hbWVQYXJ0IiwicGFydHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVcsR0FBZSxDQUFmLFdBQWU7QUFDYixHQUE4QixDQUE5QixTQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsQyxrQkFBa0IsaUJBQXhCLFFBQVE7Y0FBRixrQkFBa0I7YUFBbEIsa0JBQWtCLENBQ3pCLFFBQVE7OEJBREQsa0JBQWtCO1FBRW5DLEdBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBSlgsU0FBOEIsU0FJTCxRQUFRLEdBQ2hELEtBQUssR0FBRyxDQUFDO1lBQ1Asb0JBQW9CO1FBQ3RCLENBQUM7Z0VBTFUsa0JBQWtCLGFBTzdCLEtBQUs7O1dBUE0sa0JBQWtCO0VBSGhCLFdBQWU7a0JBR2pCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXX0=