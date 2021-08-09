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
var NonTerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(NonTerminalPartRuleDefinition, Definition);
    function NonTerminalPartRuleDefinition() {
        _classCallCheck(this, NonTerminalPartRuleDefinition);
        var quantifierRuleName = _ruleNames.QuantifierRuleName, nonTerminalPartRuleName = _ruleNames.NonTerminalPartRuleName, quantifierRuleNamePart = new _ruleName.default(quantifierRuleName), nonTerminalPartRuleNamePart = new _ruleName.default(nonTerminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts.default(quantifierRuleNamePart), parts = [
            nonTerminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRuleDefinition).call(this, parts));
    }
    return NonTerminalPartRuleDefinition;
}(_definition.default);
exports.default = NonTerminalPartRuleDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBaZXJvT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBRdWFudGlmaWVyUnVsZU5hbWUsIE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWUgPSBRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZU5hbWUgPSBOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChxdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQobm9uVGVybWluYWxQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChxdWFudGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVyxHQUFrQixDQUFsQixXQUFrQjtBQUNoQixHQUFpQyxDQUFqQyxTQUFpQztBQUMxQixHQUF3QyxDQUF4QyxnQkFBd0M7QUFFWixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4RCw2QkFBNkI7Y0FBN0IsNkJBQTZCO2FBQTdCLDZCQUE2Qjs4QkFBN0IsNkJBQTZCO1FBRTlDLEdBQUssQ0FBQyxrQkFBa0IsR0FKZ0MsVUFBaUIscUJBS25FLHVCQUF1QixHQUwyQixVQUFpQiwwQkFNbkUsc0JBQXNCLEdBQUcsR0FBRyxDQVRiLFNBQWlDLFNBU04sa0JBQWtCLEdBQzVELDJCQUEyQixHQUFHLEdBQUcsQ0FWbEIsU0FBaUMsU0FVRCx1QkFBdUIsR0FDdEUscUNBQXFDLEdBQUcsR0FBRyxDQVZyQixnQkFBd0MsU0FVRSxzQkFBc0IsR0FDdEYsS0FBSztZQUNILDJCQUEyQjtZQUMzQixxQ0FBcUM7O2dFQVQ1Qiw2QkFBNkIsYUFZeEMsS0FBSzs7V0FaTSw2QkFBNkI7RUFOM0IsV0FBa0I7a0JBTXBCLDZCQUE2QiJ9