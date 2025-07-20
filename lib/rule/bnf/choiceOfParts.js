"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../../definition/choiceOfParts"));
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
var ChoiceOfPartsBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(ChoiceOfPartsBNFRule, Rule);
    function ChoiceOfPartsBNFRule() {
        _class_call_check(this, ChoiceOfPartsBNFRule);
        return _call_super(this, ChoiceOfPartsBNFRule, arguments);
    }
    _create_class(ChoiceOfPartsBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.CHOICE_OF_PARTS_RULE_NAME, choiceOfPartsDefinition = _choiceOfParts.default.fromNothing(), opacity = null, definitions = [
                    choiceOfPartsDefinition
                ], choiceOfPartsRule = new ChoiceOfPartsBNFRule(name, opacity, definitions);
                return choiceOfPartsRule;
            }
        }
    ]);
    return ChoiceOfPartsBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9jaG9pY2VPZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgQ0hPSUNFX09GX1BBUlRTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c0JORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBDSE9JQ0VfT0ZfUEFSVFNfUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiA9IENob2ljZU9mUGFydHNEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c0JORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c0JORlJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJDSE9JQ0VfT0ZfUEFSVFNfUlVMRV9OQU1FIiwiY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImNob2ljZU9mUGFydHNSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEo7b0VBQ21CO3lCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0Msb0NBQXlCLEVBQ2hDQywwQkFBMEJDLHNCQUF1QixDQUFDSixXQUFXLElBQzdESyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pIO2lCQUNELEVBQ0RJLG9CQUFvQixJQVJUUixxQkFRa0NFLE1BQU1JLFNBQVNDO2dCQUVsRSxPQUFPQztZQUNUOzs7V0FYbUJSO0VBQTZCUyxhQUFJIn0=