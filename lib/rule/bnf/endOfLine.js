"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../../definition/stringLiteral"));
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
var endOfLine = _occamlexers.specialSymbols.endOfLine;
var EndOfLineBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(EndOfLineBNFRule, Rule);
    function EndOfLineBNFRule() {
        _class_call_check(this, EndOfLineBNFRule);
        return _call_super(this, EndOfLineBNFRule, arguments);
    }
    _create_class(EndOfLineBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = endOfLine, endOfLineStringLiteralDefinition = _stringLiteral.default.fromContent(content), name = _ruleNames.END_OF_LINE_RULE_NAME, opacity = null, definitions = [
                    endOfLineStringLiteralDefinition
                ], endOfLineRule = new EndOfLineBNFRule(name, opacity, definitions);
                return endOfLineRule;
            }
        }
    ]);
    return EndOfLineBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWxEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3N0cmluZ0xpdGVyYWxcIjtcblxuaW1wb3J0IHsgRU5EX09GX0xJTkVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGVuZE9mTGluZSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZUJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbmRPZkxpbmUsXG4gICAgICAgICAgZW5kT2ZMaW5lU3RyaW5nTGl0ZXJhbERlZmluaXRpb24gPSBTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbi5mcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gRU5EX09GX0xJTkVfUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVuZE9mTGluZVN0cmluZ0xpdGVyYWxEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZUJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFbmRPZkxpbmVCTkZSdWxlIiwiZW5kT2ZMaW5lIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsImNvbnRlbnQiLCJlbmRPZkxpbmVTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiIsIlN0cmluZ0xpdGVyYWxEZWZpbml0aW9uIiwiZnJvbUNvbnRlbnQiLCJuYW1lIiwiRU5EX09GX0xJTkVfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiZW5kT2ZMaW5lUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJCQVRVOzJEQUVkO29FQUNtQjt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNLEFBQUVDLFlBQWNDLDJCQUFjLENBQTVCRDtBQUVPLElBQUEsQUFBTUQsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsVUFBVUgsV0FDVkksbUNBQW1DQyxzQkFBdUIsQ0FBQ0MsV0FBVyxDQUFDSCxVQUN2RUksT0FBT0MsZ0NBQXFCLEVBQzVCQyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pOO2lCQUNELEVBQ0RPLGdCQUFnQixJQVRMWixpQkFTMEJRLE1BQU1FLFNBQVNDO2dCQUUxRCxPQUFPQztZQUNUOzs7V0FabUJaO0VBQXlCYSxhQUFJIn0=