"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SignificantTokenTypeRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../node/bnf/significantTokenType"));
var _significantTokenType1 = /*#__PURE__*/ _interop_require_default(require("../definition/significantTokenType"));
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
var typeType = _occamlexers.types.typeType;
var SignificantTokenTypeRule = /*#__PURE__*/ function(Rule) {
    _inherits(SignificantTokenTypeRule, Rule);
    var _super = _create_super(SignificantTokenTypeRule);
    function SignificantTokenTypeRule() {
        _class_call_check(this, SignificantTokenTypeRule);
        var typeSignificantTokenType = typeType, typeSignificantTokenTypeDefinition = new _significantTokenType1.default(typeSignificantTokenType), name = _ruleNames.significantTokenTypeRuleName, ambiguous = false, definitions = [
            typeSignificantTokenTypeDefinition
        ], Node = _significantTokenType.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return SignificantTokenTypeRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdHlwZVR5cGUgfSA9IHR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlID0gdHlwZVR5cGUsICAvLy9cbiAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbih0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwidHlwZVR5cGUiLCJ0eXBlcyIsInR5cGVTaWduaWZpY2FudFRva2VuVHlwZSIsInR5cGVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlQk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJCQVZDOzJEQUVMOzJFQUN1Qjs0RUFDRzt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTSxBQUFFQyxXQUFhQyxtQkFBYkQ7QUFFTyxJQUFBLEFBQU1ELHlDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7UUFFakIsSUFBTUcsMkJBQTJCRixVQUMzQkcscUNBQXFDLElBQUlDLCtCQUErQkYsMkJBQ3hFRyxPQUFPQyx5Q0FDUEMsWUFBWSxPQUNaQyxjQUFjO1lBQ1pMO1NBQ0QsRUFDRE0sT0FBT0M7aUNBRVBMLE1BQU1FLFdBQVdDLGFBQWFDOztXQVhuQlY7RUFBaUNZIn0=