"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StringLiteralBNFRule;
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
var stringLiteralType = _occamlexers.types.stringLiteralType;
var StringLiteralBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(StringLiteralBNFRule, Rule);
    function StringLiteralBNFRule() {
        _class_call_check(this, StringLiteralBNFRule);
        return _call_super(this, StringLiteralBNFRule, arguments);
    }
    _create_class(StringLiteralBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantTokenType = stringLiteralType, stringLiteralSignificantTokenTypeDefinition = _significantTokenType.default.fromSignificantTokenType(significantTokenType), name = _ruleNames.STRING_LITERAL_RULE_NAME, opacity = null, definitions = [
                    stringLiteralSignificantTokenTypeDefinition
                ], stringLiteralRule = new StringLiteralBNFRule(name, opacity, definitions);
                return stringLiteralRule;
            }
        }
    ]);
    return StringLiteralBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9zdHJpbmdMaXRlcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuaW1wb3J0IHsgU1RSSU5HX0xJVEVSQUxfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHN0cmluZ0xpdGVyYWxUeXBlIH0gPSB0eXBlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nTGl0ZXJhbEJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gc3RyaW5nTGl0ZXJhbFR5cGUsICAvLy9cbiAgICAgICAgICBzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uLmZyb21TaWduaWZpY2FudFRva2VuVHlwZShzaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9IFNUUklOR19MSVRFUkFMX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbFJ1bGUgPSBuZXcgU3RyaW5nTGl0ZXJhbEJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZ0xpdGVyYWxSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RyaW5nTGl0ZXJhbEJORlJ1bGUiLCJzdHJpbmdMaXRlcmFsVHlwZSIsInR5cGVzIiwiZnJvbU5vdGhpbmciLCJzaWduaWZpY2FudFRva2VuVHlwZSIsInN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJuYW1lIiwiU1RSSU5HX0xJVEVSQUxfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwic3RyaW5nTGl0ZXJhbFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsyQkFUQzsyREFFTDsyRUFDMEI7eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxvQkFBc0JDLGtCQUFLLENBQTNCRDtBQUVPLElBQUEsQUFBTUQscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsdUJBQXVCSCxtQkFDdkJJLDhDQUE4Q0MsNkJBQThCLENBQUNDLHdCQUF3QixDQUFDSCx1QkFDdEdJLE9BQU9DLG1DQUF3QixFQUMvQkMsVUFBVSxNQUNWQyxjQUFjO29CQUNaTjtpQkFDRCxFQUNETyxvQkFBb0IsSUFUVFoscUJBU2tDUSxNQUFNRSxTQUFTQztnQkFFbEUsT0FBT0M7WUFDVDs7O1dBWm1CWjtFQUE2QmEsYUFBSSJ9