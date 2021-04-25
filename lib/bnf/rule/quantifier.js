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
var QuantifierRule = function(Rule) {
    _inherits(QuantifierRule, Rule);
    function QuantifierRule() {
        _classCallCheck(this, QuantifierRule);
        var name = _ruleNames.QuantifierRuleName, optionalQuantifierRuleName = _ruleNames.OptionalQuantifierRuleName, oneOrMoreQuantifierRuleName = _ruleNames.OneOrMoreQuantifierRuleName, zeroOrMoreQuantifierRuleName = _ruleNames.ZeroOrMoreQuantifierRuleName, optionalQuantifierRuleNameDefinition = new _ruleName.default(optionalQuantifierRuleName), oneOrMoreQuantifierRuleNameDefinition = new _ruleName.default(oneOrMoreQuantifierRuleName), zeroOrMoreQuantifierRuleNameDefinition = new _ruleName.default(zeroOrMoreQuantifierRuleName), definitions = [
            optionalQuantifierRuleNameDefinition,
            oneOrMoreQuantifierRuleNameDefinition,
            zeroOrMoreQuantifierRuleNameDefinition
        ], Node1 = _part.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(QuantifierRule).call(this, name, definitions, Node1));
    }
    return QuantifierRule;
}(_rule.default);
exports.default = QuantifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9xdWFudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFBhcnROb2RlIGZyb20gXCIuLi9ub2RlL3BhcnRcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcblxuaW1wb3J0IHsgUXVhbnRpZmllclJ1bGVOYW1lLCBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lID0gT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgPSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ob3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVLLEtBQVM7SUFDTCxLQUFjO0lBQ0osU0FBd0I7SUFFbUUsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuSCxjQUFjO2NBQWQsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYztZQUV6QixJQUFJLEdBSjRHLFVBQWMscUJBSzlILDBCQUEwQixHQUxzRixVQUFjLDZCQU05SCwyQkFBMkIsR0FOcUYsVUFBYyw4QkFPOUgsNEJBQTRCLEdBUG9GLFVBQWMsK0JBUTlILG9DQUFvQyxPQVZmLFNBQXdCLFNBVWlCLDBCQUEwQixHQUN4RixxQ0FBcUMsT0FYaEIsU0FBd0IsU0FXa0IsMkJBQTJCLEdBQzFGLHNDQUFzQyxPQVpqQixTQUF3QixTQVltQiw0QkFBNEIsR0FDNUYsV0FBVztZQUNULG9DQUFvQztZQUNwQyxxQ0FBcUM7WUFDckMsc0NBQXNDO1dBRXhDLEtBQUksR0FuQk8sS0FBYztnRUFLZCxjQUFjLGFBZ0J6QixJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUk7O1dBaEJaLGNBQWM7RUFObEIsS0FBUztrQkFNTCxjQUFjIn0=