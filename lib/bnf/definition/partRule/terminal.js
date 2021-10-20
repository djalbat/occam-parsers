"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../../definition"));
var _ruleName = _interopRequireDefault(require("../../part/nonTerminal/ruleName"));
var _zeroOrMoreParts = _interopRequireDefault(require("../../part/nonTerminal/zeroOrMoreParts"));
var _ruleNames = require("../../ruleNames");
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
var TerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(TerminalPartRuleDefinition, Definition);
    function TerminalPartRuleDefinition() {
        _classCallCheck(this, TerminalPartRuleDefinition);
        var quantifierRuleName = _ruleNames.QuantifierRuleName, terminalPartRuleName = _ruleNames.TerminalPartRuleName, quantifierRuleNamePart = new _ruleName.default(quantifierRuleName), terminalPartRuleNamePart = new _ruleName.default(terminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts.default(quantifierRuleNamePart), parts = [
            terminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalPartRuleDefinition).call(this, parts));
    }
    return TerminalPartRuleDefinition;
}(_definition.default);
exports.default = TerminalPartRuleDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBaZXJvT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBRdWFudGlmaWVyUnVsZU5hbWUsIFRlcm1pbmFsUGFydFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWUgPSBRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZU5hbWUgPSBUZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChxdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQodGVybWluYWxQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChxdWFudGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXSwibmFtZXMiOlsiVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJxdWFudGlmaWVyUnVsZU5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZSIsInF1YW50aWZpZXJSdWxlTmFtZVBhcnQiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0IiwicGFydHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVcsR0FBa0IsQ0FBbEIsV0FBa0I7QUFDaEIsR0FBaUMsQ0FBakMsU0FBaUM7QUFDMUIsR0FBd0MsQ0FBeEMsZ0JBQXdDO0FBRWYsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckRBLDBCQUEwQixpQkFBaEMsUUFBUTtjQUFGQSwwQkFBMEI7YUFBMUJBLDBCQUEwQjs4QkFBMUJBLDBCQUEwQjtRQUUzQyxHQUFLLENBQUNDLGtCQUFrQixHQUo2QixVQUFpQixxQkFLaEVDLG9CQUFvQixHQUwyQixVQUFpQix1QkFNaEVDLHNCQUFzQixHQUFHLEdBQUcsQ0FUYixTQUFpQyxTQVNORixrQkFBa0IsR0FDNURHLHdCQUF3QixHQUFHLEdBQUcsQ0FWZixTQUFpQyxTQVVKRixvQkFBb0IsR0FDaEVHLHFDQUFxQyxHQUFHLEdBQUcsQ0FWckIsZ0JBQXdDLFNBVUVGLHNCQUFzQixHQUN0RkcsS0FBSyxHQUFHLENBQUM7WUFDUEYsd0JBQXdCO1lBQ3hCQyxxQ0FBcUM7UUFDdkMsQ0FBQztnRUFWVUwsMEJBQTBCLGFBWXJDTSxLQUFLOztXQVpNTiwwQkFBMEI7RUFOeEIsV0FBa0I7a0JBTXBCQSwwQkFBMEIifQ==