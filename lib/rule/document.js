"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _document = /*#__PURE__*/ _interop_require_default(require("../node/bnf/document"));
var _document1 = /*#__PURE__*/ _interop_require_default(require("../definition/document"));
var _ruleNames = require("../ruleNames");
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
var DocumentRule = /*#__PURE__*/ function(Rule) {
    _inherits(DocumentRule, Rule);
    function DocumentRule() {
        _class_call_check(this, DocumentRule);
        return _call_super(this, DocumentRule, arguments);
    }
    _create_class(DocumentRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var documentDefinition = _document1.default.fromNothing(), name = _ruleNames.documentRuleName, opacity = null, definitions = [
                    documentDefinition
                ], NonTerminalNode = _document.default, documentRule = new DocumentRule(name, opacity, definitions, NonTerminalNode);
                return documentRule;
            }
        }
    ]);
    return DocumentRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERvY3VtZW50Qk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvZG9jdW1lbnRcIjtcbmltcG9ydCBEb2N1bWVudERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZG9jdW1lbnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBkb2N1bWVudERlZmluaXRpb24gPSBEb2N1bWVudERlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gZG9jdW1lbnRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZG9jdW1lbnREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBEb2N1bWVudEJORk5vZGUsICAvLy9cbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBuZXcgRG9jdW1lbnRSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50UnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50UnVsZSIsImZyb21Ob3RoaW5nIiwiZG9jdW1lbnREZWZpbml0aW9uIiwiRG9jdW1lbnREZWZpbml0aW9uIiwibmFtZSIsImRvY3VtZW50UnVsZU5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJEb2N1bWVudEJORk5vZGUiLCJkb2N1bWVudFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjsrREFDVztnRUFDRzt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMscUJBQXFCQyxrQkFBa0IsQ0FBQ0YsV0FBVyxJQUNuREcsT0FBT0MsMkJBQWdCLEVBQ3ZCQyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pMO2lCQUNELEVBQ0RNLGtCQUFrQkMsaUJBQWUsRUFDakNDLGVBQWUsSUFUSlYsYUFTcUJJLE1BQU1FLFNBQVNDLGFBQWFDO2dCQUVsRSxPQUFPRTtZQUNUOzs7V0FabUJWO0VBQXFCVyxhQUFJIn0=