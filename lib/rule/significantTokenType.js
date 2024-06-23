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
var typeType = _occamlexers.types.typeType;
var SignificantTokenTypeRule = /*#__PURE__*/ function(Rule) {
    _inherits(SignificantTokenTypeRule, Rule);
    var _super = _create_super(SignificantTokenTypeRule);
    function SignificantTokenTypeRule() {
        _class_call_check(this, SignificantTokenTypeRule);
        return _super.apply(this, arguments);
    }
    _create_class(SignificantTokenTypeRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantTokenType = typeType, typeSignificantTokenTypeDefinition = _significantTokenType1.default.fromSignificantTokenType(significantTokenType), name = _ruleNames.significantTokenTypeRuleName, opacity = null, definitions = [
                    typeSignificantTokenTypeDefinition
                ], NonTerminalNode = _significantTokenType.default, significantTokenTypeRule = new SignificantTokenTypeRule(name, opacity, definitions, NonTerminalNode);
                return significantTokenTypeRule;
            }
        }
    ]);
    return SignificantTokenTypeRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdHlwZVR5cGUgfSA9IHR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gdHlwZVR5cGUsICAvLy9cbiAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uLmZyb21TaWduaWZpY2FudFRva2VuVHlwZShzaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHR5cGVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFNpZ25pZmljYW50VG9rZW5UeXBlQk5GTm9kZSwgIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwidHlwZVR5cGUiLCJ0eXBlcyIsImZyb21Ob3RoaW5nIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJ0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlIiwibmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZUJORk5vZGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyQkFWQzsyREFFTDsyRUFDdUI7NEVBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTSxBQUFFQyxXQUFhQyxrQkFBSyxDQUFsQkQ7QUFFTyxJQUFBLEFBQU1ELHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsdUJBQXVCSCxVQUN2QkkscUNBQXFDQyw4QkFBOEIsQ0FBQ0Msd0JBQXdCLENBQUNILHVCQUM3RkksT0FBT0MsdUNBQTRCLEVBQ25DQyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pOO2lCQUNELEVBQ0RPLGtCQUFrQkMsNkJBQTJCLEVBQzdDQywyQkFBMkIsSUFWaEJkLHlCQVU2Q1EsTUFBTUUsU0FBU0MsYUFBYUM7Z0JBRTFGLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBaUNlLGFBQUkifQ==