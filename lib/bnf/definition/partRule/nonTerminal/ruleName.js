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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var RuleNameNonTerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleNameNonTerminalPartRuleDefinition, Definition);
    var _super = _createSuper(RuleNameNonTerminalPartRuleDefinition);
    function RuleNameNonTerminalPartRuleDefinition() {
        _classCallCheck(this, RuleNameNonTerminalPartRuleDefinition);
        var ruleNameRuleName = _ruleNames.RuleNameRuleName, lookAheadModifierRuleName = _ruleNames.LookAheadModifierRuleName, ruleNameRuleNamePart = new _ruleName.default(ruleNameRuleName), lookAheadModifierRuleNamePart = new _ruleName.default(lookAheadModifierRuleName), optionalLookAheadRuleNamePartPart = new _optionalPart.default(lookAheadModifierRuleNamePart), parts = [
            ruleNameRuleNamePart,
            optionalLookAheadRuleNamePartPart
        ];
        return _super.call(this, parts);
    }
    return RuleNameNonTerminalPartRuleDefinition;
}(_definition.default);
exports.default = RuleNameNonTerminalPartRuleDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uLy4uLy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBPcHRpb25hbFBhcnRQYXJ0IGZyb20gXCIuLi8uLi8uLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydFwiO1xuXG5pbXBvcnQgeyBSdWxlTmFtZVJ1bGVOYW1lLCBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZU5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUnVsZU5hbWUgPSBSdWxlTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZVJ1bGVOYW1lKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQobG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxMb29rQWhlYWRSdWxlTmFtZVBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQobG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvcHRpb25hbExvb2tBaGVhZFJ1bGVOYW1lUGFydFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsInJ1bGVOYW1lUnVsZU5hbWUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCIsIm9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydCIsInBhcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVXLEdBQXFCLENBQXJCLFdBQXFCO0FBQ25CLEdBQW9DLENBQXBDLFNBQW9DO0FBQ2hDLEdBQXdDLENBQXhDLGFBQXdDO0FBRVQsR0FBb0IsQ0FBcEIsVUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTNEQSxxQ0FBcUMsaUJBQTNDLFFBQVE7Y0FBRkEscUNBQXFDOzhCQUFyQ0EscUNBQXFDO2FBQXJDQSxxQ0FBcUM7OEJBQXJDQSxxQ0FBcUM7UUFFdEQsR0FBSyxDQUFDQyxnQkFBZ0IsR0FKa0MsVUFBb0IsbUJBS3RFQyx5QkFBeUIsR0FMeUIsVUFBb0IsNEJBTXRFQyxvQkFBb0IsR0FBRyxHQUFHLENBVFgsU0FBb0MsU0FTWEYsZ0JBQWdCLEdBQ3hERyw2QkFBNkIsR0FBRyxHQUFHLENBVnBCLFNBQW9DLFNBVUZGLHlCQUF5QixHQUMxRUcsaUNBQWlDLEdBQUcsR0FBRyxDQVZwQixhQUF3QyxTQVVGRCw2QkFBNkIsR0FDdEZFLEtBQUssR0FBRyxDQUFDO1lBQ1BILG9CQUFvQjtZQUNwQkUsaUNBQWlDO1FBQ25DLENBQUM7aUNBRURDLEtBQUs7O1dBWk1OLHFDQUFxQztFQU5uQyxXQUFxQjtrQkFNdkJBLHFDQUFxQyJ9