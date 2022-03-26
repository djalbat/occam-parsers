"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _terminal = _interopRequireDefault(require("../node/bnf/part/terminal"));
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
        var name = _ruleNames.TerminalPartRuleName, wildcardRuleName = _ruleNames.WildcardRuleName, endOfLineRuleName = _ruleNames.EndOfLineRuleName, terminalSymbolRuleName = _ruleNames.TerminalSymbolRuleName, regularExpressionRuleName = _ruleNames.RegularExpressionRuleName, significantTokenTypeRuleName = _ruleNames.SignificantTokenTypeRuleName, wildcardRuleNameDefinition = new _ruleName.default(wildcardRuleName), endOfLineRuleNameDefinition = new _ruleName.default(endOfLineRuleName), terminalSymbolRuleNameDefinition = new _ruleName.default(terminalSymbolRuleName), regularExpressionRuleNameDefinition = new _ruleName.default(regularExpressionRuleName), significantTokenTypeRuleNameDefinition = new _ruleName.default(significantTokenTypeRuleName), ambiguous = false, definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            wildcardRuleNameDefinition
        ], Node = _terminal.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return TerminalPartRule;
}(_rule.default);
exports.default = TerminalPartRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsUGFydC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IFRlcm1pbmFsUGFydFJ1bGVOYW1lLCBSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLCBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLCBFbmRPZkxpbmVSdWxlTmFtZSwgV2lsZGNhcmRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gVGVybWluYWxQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgd2lsZGNhcmRSdWxlTmFtZSA9IFdpbGRjYXJkUnVsZU5hbWUsXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWUgPSBFbmRPZkxpbmVSdWxlTmFtZSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lID0gVGVybWluYWxTeW1ib2xSdWxlTmFtZSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lID0gUmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lID0gU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24od2lsZGNhcmRSdWxlTmFtZSksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihlbmRPZkxpbmVSdWxlTmFtZSksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsUGFydEJORk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnRSdWxlIiwibmFtZSIsIlRlcm1pbmFsUGFydFJ1bGVOYW1lIiwid2lsZGNhcmRSdWxlTmFtZSIsIldpbGRjYXJkUnVsZU5hbWUiLCJlbmRPZkxpbmVSdWxlTmFtZSIsIkVuZE9mTGluZVJ1bGVOYW1lIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZSIsIlRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwiUmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwid2lsZGNhcmRSdWxlTmFtZURlZmluaXRpb24iLCJSdWxlTmFtZURlZmluaXRpb24iLCJlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWVEZWZpbml0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZURlZmluaXRpb24iLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJUZXJtaW5hbFBhcnRCTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVpQixJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBO0FBQ00sSUFBQSxTQUEyQixrQ0FBM0IsMkJBQTJCLEVBQUE7QUFDNUIsSUFBQSxTQUF3QixrQ0FBeEIsd0JBQXdCLEVBQUE7QUFFb0csSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7S0FOeks7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFRZSxJQUFBLEFBQU1BLGdCQUFnQixpQkNSbEMsQURRWTtxQ0FSZjs7YUFRcUJBLGdCQUFnQjsrQ0FSckM7UUFVSSxJQUFNQyxJQUFJLEdBQUdDLFVBQW9CLHFCQUFBLEVBQzNCQyxnQkFBZ0IsR0FBR0MsVUFBZ0IsaUJBQUEsRUFDbkNDLGlCQUFpQixHQUFHQyxVQUFpQixrQkFBQSxFQUNyQ0Msc0JBQXNCLEdBQUdDLFVBQXNCLHVCQUFBLEVBQy9DQyx5QkFBeUIsR0FBR0MsVUFBeUIsMEJBQUEsRUFDckRDLDRCQUE0QixHQUFHQyxVQUE0Qiw2QkFBQSxFQUMzREMsMEJBQTBCLEdBQUcsSUFBSUMsU0FBa0IsU0FBQ1gsZ0JBQWdCLENBQUMsRUFDckVZLDJCQUEyQixHQUFHLElBQUlELFNBQWtCLFNBQUNULGlCQUFpQixDQUFDLEVBQ3ZFVyxnQ0FBZ0MsR0FBRyxJQUFJRixTQUFrQixTQUFDUCxzQkFBc0IsQ0FBQyxFQUNqRlUsbUNBQW1DLEdBQUcsSUFBSUgsU0FBa0IsU0FBQ0wseUJBQXlCLENBQUMsRUFDdkZTLHNDQUFzQyxHQUFHLElBQUlKLFNBQWtCLFNBQUNILDRCQUE0QixDQUFDLEVBQzdGUSxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsV0FBVyxHQUFHO1lBQ1pGLHNDQUFzQztZQUN0Q0QsbUNBQW1DO1lBQ25DRCxnQ0FBZ0M7WUFDaENELDJCQUEyQjtZQUMzQkYsMEJBQTBCO1NBQzNCLEVBQ0RRLElBQUksR0FBR0MsU0FBbUIsUUFBQSxBQUFDO2lDQUUzQnJCLElBQUksRUFBRWtCLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxJQUFJOzs7Q0FFM0MsQ0F6QjZDRSxLQUFJLFNBeUJqRDtrQkF6Qm9CdkIsZ0JBQWdCLEFBUnJDIn0=