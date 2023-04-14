"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameNonTerminalPartRuleDefinition;
    }
});
var _definition = /*#__PURE__*/ _interop_require_default(require("../../../definition"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../../../part/nonTerminal/ruleName"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../../../part/nonTerminal/optionalPart"));
var _ruleNames = require("../../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var RuleNameNonTerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleNameNonTerminalPartRuleDefinition, Definition);
    var _super = _create_super(RuleNameNonTerminalPartRuleDefinition);
    function RuleNameNonTerminalPartRuleDefinition() {
        _class_call_check(this, RuleNameNonTerminalPartRuleDefinition);
        var ruleNameRuleNamePart = new _ruleName.default(_ruleNames.ruleNameRuleName), lookAheadModifierRuleNamePart = new _ruleName.default(_ruleNames.lookAheadModifierRuleName), optionalLookAheadRuleNamePartPart = new _optionalPart.default(lookAheadModifierRuleNamePart), parts = [
            ruleNameRuleNamePart,
            optionalLookAheadRuleNamePartPart
        ];
        return _super.call(this, parts);
    }
    return RuleNameNonTerminalPartRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUnVsZU5hbWUsIGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lUnVsZU5hbWUpLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICBvcHRpb25hbExvb2tBaGVhZFJ1bGVOYW1lUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUnVsZU5hbWVOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsInJ1bGVOYW1lUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVSdWxlTmFtZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWVQYXJ0IiwibG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsTG9va0FoZWFkUnVsZU5hbWVQYXJ0UGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0cyIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O2lFQU5FOytEQUNFO21FQUNJO3lCQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBQSxBQUFNQSxzREFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBO1FBRWpCLElBQU1DLHVCQUF1QixJQUFJQyxpQkFBWSxDQUFDQywyQkFBZ0IsR0FDeERDLGdDQUFnQyxJQUFJRixpQkFBWSxDQUFDRyxvQ0FBeUIsR0FDMUVDLG9DQUFvQyxJQUFJQyxxQkFBZ0IsQ0FBQ0gsZ0NBQ3pESSxRQUFRO1lBQ05QO1lBQ0FLO1NBQ0Q7aUNBRURFOztXQVZXUjtFQUE4Q1MsbUJBQVUifQ==