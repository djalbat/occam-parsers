"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LookAheadModifierRuleDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../part/terminal/noWhitespace"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
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
var ellipsis = _occamlexers.specialSymbols.ellipsis;
var LookAheadModifierRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(LookAheadModifierRuleDefinition, Definition);
    var _super = _create_super(LookAheadModifierRuleDefinition);
    function LookAheadModifierRuleDefinition() {
        _class_call_check(this, LookAheadModifierRuleDefinition);
        var content = ellipsis, noWhitespacePart = new _noWhitespace.default(), terminalSymbolPart = new _terminalSymbol.default(content), parts = [
            noWhitespacePart,
            terminalSymbolPart
        ];
        return _super.call(this, parts);
    }
    return LookAheadModifierRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2xvb2tBaGVhZE1vZGlmaWVyUnVsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9ub1doaXRlc3BhY2VcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcblxuY29uc3QgeyBlbGxpcHNpcyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVsbGlwc2lzLCAgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0KCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsImVsbGlwc2lzIiwic3BlY2lhbFN5bWJvbHMiLCJjb250ZW50Iiwibm9XaGl0ZXNwYWNlUGFydCIsIk5vV2hpdGVzcGFjZVBhcnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzJCQVJVO2lFQUVSO21FQUNNO3FFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLFdBQWFDLDJCQUFjLENBQTNCRDtBQUVPLElBQUEsQUFBTUQsZ0RBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTtRQUVqQixJQUFNRyxVQUFVRixVQUNWRyxtQkFBbUIsSUFBSUMscUJBQWdCLElBQ3ZDQyxxQkFBcUIsSUFBSUMsdUJBQWtCLENBQUNKLFVBQzVDSyxRQUFRO1lBQ05KO1lBQ0FFO1NBQ0Q7aUNBRURFOztXQVZXUjtFQUF3Q1MsbUJBQVUifQ==