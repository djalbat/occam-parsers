"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalSymbolRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../node/bnf/terminalSymbol"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../definition/significantTokenType"));
var _ruleNames = require("../ruleNames");
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var stringLiteralType = _occamlexers.types.stringLiteralType;
var TerminalSymbolRule = /*#__PURE__*/ function(Rule) {
    _inherits(TerminalSymbolRule, Rule);
    var _super = _create_super(TerminalSymbolRule);
    function TerminalSymbolRule() {
        _class_call_check(this, TerminalSymbolRule);
        return _super.apply(this, arguments);
    }
    _create_class(TerminalSymbolRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantTokenType = stringLiteralType, stringLiteralSignificantTokenTypeDefinition = _significantTokenType.default.fromSignificantTokenType(significantTokenType), name = _ruleNames.terminalSymbolRuleName, ambiguous = false, definitions = [
                    stringLiteralSignificantTokenTypeDefinition
                ], NonTerminalNode = _terminalSymbol.default, terminalSymbolRule = new TerminalSymbolRule(name, ambiguous, definitions, NonTerminalNode);
                return terminalSymbolRule;
            }
        }
    ]);
    return TerminalSymbolRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Rlcm1pbmFsU3ltYm9sLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSA9IHR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFN5bWJvbFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gc3RyaW5nTGl0ZXJhbFR5cGUsICAvLy9cbiAgICAgICAgICBzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uLmZyb21TaWduaWZpY2FudFRva2VuVHlwZShzaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9IHRlcm1pbmFsU3ltYm9sUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsU3ltYm9sQk5GTm9kZSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlRlcm1pbmFsU3ltYm9sUnVsZSIsInN0cmluZ0xpdGVyYWxUeXBlIiwidHlwZXMiLCJmcm9tTm90aGluZyIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwic3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsImZyb21TaWduaWZpY2FudFRva2VuVHlwZSIsIm5hbWUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJUZXJtaW5hbFN5bWJvbEJORk5vZGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyQkFWQzsyREFFTDtxRUFDaUI7MkVBQ1M7eUJBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBTSxBQUFFQyxvQkFBc0JDLGtCQUFLLENBQTNCRDtBQUVPLElBQUEsQUFBTUQsbUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsdUJBQXVCSCxtQkFDdkJJLDhDQUE4Q0MsNkJBQThCLENBQUNDLHdCQUF3QixDQUFDSCx1QkFDdEdJLE9BQU9DLGlDQUFzQixFQUM3QkMsWUFBWSxPQUNaQyxjQUFjO29CQUNaTjtpQkFDRCxFQUNETyxrQkFBa0JDLHVCQUFxQixFQUN2Q0MscUJBQXFCLElBVlZkLG1CQVVpQ1EsTUFBTUUsV0FBV0MsYUFBYUM7Z0JBRWhGLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBMkJlLGFBQUkifQ==