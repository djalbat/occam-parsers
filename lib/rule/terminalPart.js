"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalPartRule;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _terminal = /*#__PURE__*/ _interopRequireDefault(require("../node/bnf/part/terminal"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../definition/ruleName"));
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
var TerminalPartRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalPartRule, Rule);
    var _super = _createSuper(TerminalPartRule);
    function TerminalPartRule() {
        _classCallCheck(this, TerminalPartRule);
        var name = _ruleNames.terminalPartRuleName, epsilonRuleNameDefinition = new _ruleName.default(_ruleNames.epsilonRuleName), wildcardRuleNameDefinition = new _ruleName.default(_ruleNames.wildcardRuleName), endOfLineRuleNameDefinition = new _ruleName.default(_ruleNames.endOfLineRuleName), terminalSymbolRuleNameDefinition = new _ruleName.default(_ruleNames.terminalSymbolRuleName), regularExpressionRuleNameDefinition = new _ruleName.default(_ruleNames.regularExpressionRuleName), significantTokenTypeRuleNameDefinition = new _ruleName.default(_ruleNames.significantTokenTypeRuleName), ambiguous = false, definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            wildcardRuleNameDefinition,
            epsilonRuleNameDefinition
        ], Node = _terminal.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return TerminalPartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsUGFydC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IGVwc2lsb25SdWxlTmFtZSxcbiAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWUsXG4gICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZSxcbiAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVOYW1lLFxuICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZSxcbiAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUsXG4gICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0ZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBlcHNpbG9uUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihlcHNpbG9uUnVsZU5hbWUpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbih3aWxkY2FyZFJ1bGVOYW1lKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGVuZE9mTGluZVJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24odGVybWluYWxTeW1ib2xSdWxlTmFtZSksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lKSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsUGFydEJORk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnRSdWxlIiwibmFtZSIsInRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsImVwc2lsb25SdWxlTmFtZSIsIndpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uIiwid2lsZGNhcmRSdWxlTmFtZSIsImVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbiIsImVuZE9mTGluZVJ1bGVOYW1lIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIiwicmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24iLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24iLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiVGVybWluYWxQYXJ0Qk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWNRQSxnQkFBZ0I7Ozt5REFacEIsU0FBUzs2REFDTSwyQkFBMkI7NkRBQzVCLHdCQUF3Qjt5QkFRVixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFBLEFBQU1BLGdCQUFnQixpQkFBdEI7Y0FBTUEsZ0JBQWdCOzhCQUFoQkEsZ0JBQWdCO2FBQWhCQSxnQkFBZ0I7OEJBQWhCQSxnQkFBZ0I7UUFFakMsSUFBTUMsSUFBSSxHQUFHQyxVQUFvQixxQkFBQSxFQUMzQkMseUJBQXlCLEdBQUcsSUFBSUMsU0FBa0IsUUFBQSxDQUFDQyxVQUFlLGdCQUFBLENBQUMsRUFDbkVDLDBCQUEwQixHQUFHLElBQUlGLFNBQWtCLFFBQUEsQ0FBQ0csVUFBZ0IsaUJBQUEsQ0FBQyxFQUNyRUMsMkJBQTJCLEdBQUcsSUFBSUosU0FBa0IsUUFBQSxDQUFDSyxVQUFpQixrQkFBQSxDQUFDLEVBQ3ZFQyxnQ0FBZ0MsR0FBRyxJQUFJTixTQUFrQixRQUFBLENBQUNPLFVBQXNCLHVCQUFBLENBQUMsRUFDakZDLG1DQUFtQyxHQUFHLElBQUlSLFNBQWtCLFFBQUEsQ0FBQ1MsVUFBeUIsMEJBQUEsQ0FBQyxFQUN2RkMsc0NBQXNDLEdBQUcsSUFBSVYsU0FBa0IsUUFBQSxDQUFDVyxVQUE0Qiw2QkFBQSxDQUFDLEVBQzdGQyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsV0FBVyxHQUFHO1lBQ1pILHNDQUFzQztZQUN0Q0YsbUNBQW1DO1lBQ25DRixnQ0FBZ0M7WUFDaENGLDJCQUEyQjtZQUMzQkYsMEJBQTBCO1lBQzFCSCx5QkFBeUI7U0FDMUIsRUFDRGUsSUFBSSxHQUFHQyxTQUFtQixRQUFBLEFBQUM7aUNBRTNCbEIsSUFBSSxFQUFFZSxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsSUFBSTs7V0FwQnZCbEIsZ0JBQWdCO0NBc0JwQyxDQXRCNkNvQixLQUFJLFFBQUEsQ0FzQmpEIn0=