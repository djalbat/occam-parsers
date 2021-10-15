"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../../../definition"));
var _ruleName = _interopRequireDefault(require("../../../part/nonTerminal/ruleName"));
var _optionalPart = _interopRequireDefault(require("../../../part/nonTerminal/optionalPart"));
var _ruleNames = require("../../../ruleNames");
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
var RuleNameNonTerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleNameNonTerminalPartRuleDefinition, Definition);
    function RuleNameNonTerminalPartRuleDefinition() {
        _classCallCheck(this, RuleNameNonTerminalPartRuleDefinition);
        var ruleNameRuleName = _ruleNames.RuleNameRuleName, lookAheadModifierRuleName = _ruleNames.LookAheadModifierRuleName, ruleNameRuleNamePart = new _ruleName.default(ruleNameRuleName), lookAheadModifierRuleNamePart = new _ruleName.default(lookAheadModifierRuleName), optionalLookAheadRuleNamePartPart = new _optionalPart.default(lookAheadModifierRuleNamePart), parts = [
            ruleNameRuleNamePart,
            optionalLookAheadRuleNamePartPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameNonTerminalPartRuleDefinition).call(this, parts));
    }
    return RuleNameNonTerminalPartRuleDefinition;
}(_definition.default);
exports.default = RuleNameNonTerminalPartRuleDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIlJ1bGVOYW1lUnVsZU5hbWUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsImNvbnN0cnVjdG9yIiwicnVsZU5hbWVSdWxlTmFtZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUiLCJydWxlTmFtZVJ1bGVOYW1lUGFydCIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0Iiwib3B0aW9uYWxMb29rQWhlYWRSdWxlTmFtZVBhcnRQYXJ0IiwicGFydHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVcsR0FBcUIsQ0FBckIsV0FBcUI7QUFDbkIsR0FBb0MsQ0FBcEMsU0FBb0M7QUFDaEMsR0FBd0MsQ0FBeEMsYUFBd0M7QUFFVCxHQUFvQixDQUFwQixVQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzRCxxQ0FBcUMsaUJBQTNDLFFBQVE7Y0FBRixxQ0FBcUM7YUFBckMscUNBQXFDOzhCQUFyQyxxQ0FBcUM7UUFFdEQsR0FBSyxDQUFDLGdCQUFnQixHQUprQyxVQUFvQixtQkFLdEUseUJBQXlCLEdBTHlCLFVBQW9CLDRCQU10RSxvQkFBb0IsR0FBRyxHQUFHLENBVFgsU0FBb0MsU0FTWCxnQkFBZ0IsR0FDeEQsNkJBQTZCLEdBQUcsR0FBRyxDQVZwQixTQUFvQyxTQVVGLHlCQUF5QixHQUMxRSxpQ0FBaUMsR0FBRyxHQUFHLENBVnBCLGFBQXdDLFNBVUYsNkJBQTZCLEdBQ3RGLEtBQUssR0FBRyxDQUFDO1lBQ1Asb0JBQW9CO1lBQ3BCLGlDQUFpQztRQUNuQyxDQUFDO2dFQVZVLHFDQUFxQyxhQVloRCxLQUFLOztXQVpNLHFDQUFxQztFQU5uQyxXQUFxQjtrQkFNdkIscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi8uLi8uLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgT3B0aW9uYWxQYXJ0UGFydCBmcm9tIFwiLi4vLi4vLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnRcIjtcblxuaW1wb3J0IHsgUnVsZU5hbWVSdWxlTmFtZSwgTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBydWxlTmFtZVJ1bGVOYW1lID0gUnVsZU5hbWVSdWxlTmFtZSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWVSdWxlTmFtZSksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxMb29rQWhlYWRSdWxlTmFtZVBhcnRQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIl19