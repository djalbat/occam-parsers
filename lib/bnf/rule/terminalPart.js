"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _terminal = _interopRequireDefault(require("../node/part/terminal"));
var _ruleName = _interopRequireDefault(require("../../definition/ruleName"));
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
        var name = _ruleNames.TerminalPartRuleName, epsilonRuleName = _ruleNames.EpsilonRuleName, wildcardRuleName = _ruleNames.WildcardRuleName, endOfLineRuleName = _ruleNames.EndOfLineRuleName, terminalSymbolRuleName = _ruleNames.TerminalSymbolRuleName, regularExpressionRuleName = _ruleNames.RegularExpressionRuleName, significantTokenTypeRuleName = _ruleNames.SignificantTokenTypeRuleName, epsilonRuleNameDefinition = new _ruleName.default(epsilonRuleName), wildcardRuleNameDefinition = new _ruleName.default(wildcardRuleName), endOfLineRuleNameDefinition = new _ruleName.default(endOfLineRuleName), terminalSymbolRuleNameDefinition = new _ruleName.default(terminalSymbolRuleName), regularExpressionRuleNameDefinition = new _ruleName.default(regularExpressionRuleName), significantTokenTypeRuleNameDefinition = new _ruleName.default(significantTokenTypeRuleName), definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            epsilonRuleNameDefinition,
            wildcardRuleNameDefinition
        ], Node = _terminal.default;
        return _super.call(this, name, definitions, Node);
    }
    return TerminalPartRule;
}(_rule.default);
exports.default = TerminalPartRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS90ZXJtaW5hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0Tm9kZSBmcm9tIFwiLi4vbm9kZS9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IFRlcm1pbmFsUGFydFJ1bGVOYW1lLCBSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lLCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLCBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLCBFbmRPZkxpbmVSdWxlTmFtZSwgRXBzaWxvblJ1bGVOYW1lLCBXaWxkY2FyZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBUZXJtaW5hbFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBlcHNpbG9uUnVsZU5hbWUgPSBFcHNpbG9uUnVsZU5hbWUsXG4gICAgICAgICAgd2lsZGNhcmRSdWxlTmFtZSA9IFdpbGRjYXJkUnVsZU5hbWUsXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWUgPSBFbmRPZkxpbmVSdWxlTmFtZSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lID0gVGVybWluYWxTeW1ib2xSdWxlTmFtZSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lID0gUmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lID0gU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSxcbiAgICAgICAgICBlcHNpbG9uUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihlcHNpbG9uUnVsZU5hbWUpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbih3aWxkY2FyZFJ1bGVOYW1lKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKGVuZE9mTGluZVJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24odGVybWluYWxTeW1ib2xSdWxlTmFtZSksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVuZE9mTGluZVJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVwc2lsb25SdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnRSdWxlIiwibmFtZSIsIlRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiZXBzaWxvblJ1bGVOYW1lIiwiRXBzaWxvblJ1bGVOYW1lIiwid2lsZGNhcmRSdWxlTmFtZSIsIldpbGRjYXJkUnVsZU5hbWUiLCJlbmRPZkxpbmVSdWxlTmFtZSIsIkVuZE9mTGluZVJ1bGVOYW1lIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZSIsIlRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwiUmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwiZXBzaWxvblJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIndpbGRjYXJkUnVsZU5hbWVEZWZpbml0aW9uIiwiZW5kT2ZMaW5lUnVsZU5hbWVEZWZpbml0aW9uIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZURlZmluaXRpb24iLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lRGVmaW5pdGlvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiVGVybWluYWxQYXJ0Tm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUssR0FBUyxDQUFULEtBQVM7QUFDRyxHQUF1QixDQUF2QixTQUF1QjtBQUNyQixHQUEyQixDQUEzQixTQUEyQjtBQUVrSCxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcktBLGdCQUFnQixpQkFBdEIsUUFBUTs7O2FBQUZBLGdCQUFnQjs7UUFFakMsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLFVBQW9CLHVCQUMzQkMsZUFBZSxHQUFHQyxVQUFlLGtCQUNqQ0MsZ0JBQWdCLEdBQUdDLFVBQWdCLG1CQUNuQ0MsaUJBQWlCLEdBQUdDLFVBQWlCLG9CQUNyQ0Msc0JBQXNCLEdBQUdDLFVBQXNCLHlCQUMvQ0MseUJBQXlCLEdBQUdDLFVBQXlCLDRCQUNyREMsNEJBQTRCLEdBQUdDLFVBQTRCLCtCQUMzREMseUJBQXlCLEdBQUcsR0FBRyxDQUFDQyxTQUFrQixTQUFDYixlQUFlLEdBQ2xFYywwQkFBMEIsR0FBRyxHQUFHLENBQUNELFNBQWtCLFNBQUNYLGdCQUFnQixHQUNwRWEsMkJBQTJCLEdBQUcsR0FBRyxDQUFDRixTQUFrQixTQUFDVCxpQkFBaUIsR0FDdEVZLGdDQUFnQyxHQUFHLEdBQUcsQ0FBQ0gsU0FBa0IsU0FBQ1Asc0JBQXNCLEdBQ2hGVyxtQ0FBbUMsR0FBRyxHQUFHLENBQUNKLFNBQWtCLFNBQUNMLHlCQUF5QixHQUN0RlUsc0NBQXNDLEdBQUcsR0FBRyxDQUFDTCxTQUFrQixTQUFDSCw0QkFBNEIsR0FDNUZTLFdBQVcsR0FBRyxDQUFDO1lBQ2JELHNDQUFzQztZQUN0Q0QsbUNBQW1DO1lBQ25DRCxnQ0FBZ0M7WUFDaENELDJCQUEyQjtZQUMzQkgseUJBQXlCO1lBQ3pCRSwwQkFBMEI7UUFDNUIsQ0FBQyxFQUNETSxJQUFJLEdBQUdDLFNBQWdCO2lDQUV2QnZCLElBQUksRUFBRXFCLFdBQVcsRUFBRUMsSUFBSTs7O0VBekJhRSxLQUFJO2tCQUE3QnpCLGdCQUFnQiJ9