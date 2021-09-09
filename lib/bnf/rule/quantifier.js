"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _part = _interopRequireDefault(require("../node/part"));
var _ruleName = _interopRequireDefault(require("../definition/ruleName"));
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
var QuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(QuantifierRule, Rule);
    function QuantifierRule() {
        _classCallCheck(this, QuantifierRule);
        var name = _ruleNames.QuantifierRuleName, optionalQuantifierRuleName = _ruleNames.OptionalQuantifierRuleName, oneOrMoreQuantifierRuleName = _ruleNames.OneOrMoreQuantifierRuleName, zeroOrMoreQuantifierRuleName = _ruleNames.ZeroOrMoreQuantifierRuleName, optionalQuantifierRuleNameDefinition = new _ruleName.default(optionalQuantifierRuleName), oneOrMoreQuantifierRuleNameDefinition = new _ruleName.default(oneOrMoreQuantifierRuleName), zeroOrMoreQuantifierRuleNameDefinition = new _ruleName.default(zeroOrMoreQuantifierRuleName), definitions = [
            optionalQuantifierRuleNameDefinition,
            oneOrMoreQuantifierRuleNameDefinition,
            zeroOrMoreQuantifierRuleNameDefinition
        ], Node = _part.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(QuantifierRule).call(this, name, definitions, Node));
    }
    return QuantifierRule;
}(_rule.default);
exports.default = QuantifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9xdWFudGlmaWVyLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJQYXJ0Tm9kZSIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlF1YW50aWZpZXJSdWxlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBQ0wsR0FBYyxDQUFkLEtBQWM7QUFDSixHQUF3QixDQUF4QixTQUF3QjtBQUVtRSxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuSCxjQUFjLGlCQUFwQixRQUFRO2NBQUYsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYztRQUUvQixHQUFLLENBQUMsSUFBSSxHQUo0RyxVQUFjLHFCQUs5SCwwQkFBMEIsR0FMc0YsVUFBYyw2QkFNOUgsMkJBQTJCLEdBTnFGLFVBQWMsOEJBTzlILDRCQUE0QixHQVBvRixVQUFjLCtCQVE5SCxvQ0FBb0MsR0FBRyxHQUFHLENBVnJCLFNBQXdCLFNBVWlCLDBCQUEwQixHQUN4RixxQ0FBcUMsR0FBRyxHQUFHLENBWHRCLFNBQXdCLFNBV2tCLDJCQUEyQixHQUMxRixzQ0FBc0MsR0FBRyxHQUFHLENBWnZCLFNBQXdCLFNBWW1CLDRCQUE0QixHQUM1RixXQUFXLEdBQUcsQ0FBQztZQUNiLG9DQUFvQztZQUNwQyxxQ0FBcUM7WUFDckMsc0NBQXNDO1FBQ3hDLENBQUMsRUFDRCxJQUFJLEdBbkJPLEtBQWM7Z0VBS2QsY0FBYyxhQWdCekIsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQWhCWixjQUFjO0VBTmxCLEtBQVM7a0JBTUwsY0FBYyJ9