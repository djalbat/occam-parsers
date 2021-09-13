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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIlRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJjb25zdHJ1Y3RvciIsInF1YW50aWZpZXJSdWxlTmFtZSIsInRlcm1pbmFsUGFydFJ1bGVOYW1lIiwicXVhbnRpZmllclJ1bGVOYW1lUGFydCIsInRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVyxHQUFrQixDQUFsQixXQUFrQjtBQUNoQixHQUFpQyxDQUFqQyxTQUFpQztBQUMxQixHQUF3QyxDQUF4QyxnQkFBd0M7QUFFZixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyRCwwQkFBMEIsaUJBQWhDLFFBQVE7Y0FBRiwwQkFBMEI7YUFBMUIsMEJBQTBCOzhCQUExQiwwQkFBMEI7UUFFM0MsR0FBSyxDQUFDLGtCQUFrQixHQUo2QixVQUFpQixxQkFLaEUsb0JBQW9CLEdBTDJCLFVBQWlCLHVCQU1oRSxzQkFBc0IsR0FBRyxHQUFHLENBVGIsU0FBaUMsU0FTTixrQkFBa0IsR0FDNUQsd0JBQXdCLEdBQUcsR0FBRyxDQVZmLFNBQWlDLFNBVUosb0JBQW9CLEdBQ2hFLHFDQUFxQyxHQUFHLEdBQUcsQ0FWckIsZ0JBQXdDLFNBVUUsc0JBQXNCLEdBQ3RGLEtBQUssR0FBRyxDQUFDO1lBQ1Asd0JBQXdCO1lBQ3hCLHFDQUFxQztRQUN2QyxDQUFDO2dFQVZVLDBCQUEwQixhQVlyQyxLQUFLOztXQVpNLDBCQUEwQjtFQU54QixXQUFrQjtrQkFNcEIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgUXVhbnRpZmllclJ1bGVOYW1lLCBUZXJtaW5hbFBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcXVhbnRpZmllclJ1bGVOYW1lID0gUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lID0gVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHRlcm1pbmFsUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocXVhbnRpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIl19