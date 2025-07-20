"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SignificantTokenTypeBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../../definition/significantTokenType"));
var _ruleNames = require("../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var typeType = _occamlexers.types.typeType;
var SignificantTokenTypeBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(SignificantTokenTypeBNFRule, Rule);
    function SignificantTokenTypeBNFRule() {
        _class_call_check(this, SignificantTokenTypeBNFRule);
        return _call_super(this, SignificantTokenTypeBNFRule, arguments);
    }
    _create_class(SignificantTokenTypeBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantTokenType = typeType, typeSignificantTokenTypeDefinition = _significantTokenType.default.fromSignificantTokenType(significantTokenType), name = _ruleNames.SIGNIFICANT_TOKEN_TYPE_RULE_NAME, opacity = null, definitions = [
                    typeSignificantTokenTypeDefinition
                ], significantTokenTypeRule = new SignificantTokenTypeBNFRule(name, opacity, definitions);
                return significantTokenTypeRule;
            }
        }
    ]);
    return SignificantTokenTypeBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IFNJR05JRklDQU5UX1RPS0VOX1RZUEVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHR5cGVUeXBlIH0gPSB0eXBlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZSA9IHR5cGVUeXBlLCAgLy8vXG4gICAgICAgICAgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbi5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGUoc2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSBTSUdOSUZJQ0FOVF9UT0tFTl9UWVBFX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZSdWxlIiwidHlwZVR5cGUiLCJ0eXBlcyIsImZyb21Ob3RoaW5nIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJ0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwiZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlIiwibmFtZSIsIlNJR05JRklDQU5UX1RPS0VOX1RZUEVfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MkJBVEM7MkRBRUw7MkVBQzBCO3lCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU0sQUFBRUMsV0FBYUMsa0JBQUssQ0FBbEJEO0FBRU8sSUFBQSxBQUFNRCw0Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyx1QkFBdUJILFVBQ3ZCSSxxQ0FBcUNDLDZCQUE4QixDQUFDQyx3QkFBd0IsQ0FBQ0gsdUJBQzdGSSxPQUFPQywyQ0FBZ0MsRUFDdkNDLFVBQVUsTUFDVkMsY0FBYztvQkFDWk47aUJBQ0QsRUFDRE8sMkJBQTJCLElBVGhCWiw0QkFTZ0RRLE1BQU1FLFNBQVNDO2dCQUVoRixPQUFPQztZQUNUOzs7V0FabUJaO0VBQW9DYSxhQUFJIn0=