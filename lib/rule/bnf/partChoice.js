"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartChoiceBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _partChoice = /*#__PURE__*/ _interop_require_default(require("../../definition/partChoice"));
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
var PartChoiceBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(PartChoiceBNFRule, Rule);
    function PartChoiceBNFRule() {
        _class_call_check(this, PartChoiceBNFRule);
        return _call_super(this, PartChoiceBNFRule, arguments);
    }
    _create_class(PartChoiceBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.PART_CHOICE_RULE_NAME, partChoiceDefinition = _partChoice.default.fromNothing(), opacity = null, definitions = [
                    partChoiceDefinition
                ], definitionRule = new PartChoiceBNFRule(name, opacity, definitions);
                return definitionRule;
            }
        }
    ]);
    return PartChoiceBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9wYXJ0Q2hvaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFBhcnRDaG9pY2VEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3BhcnRDaG9pY2VcIjtcblxuaW1wb3J0IHsgUEFSVF9DSE9JQ0VfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Q2hvaWNlQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IFBBUlRfQ0hPSUNFX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIHBhcnRDaG9pY2VEZWZpbml0aW9uID0gUGFydENob2ljZURlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHBhcnRDaG9pY2VEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBQYXJ0Q2hvaWNlQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvblJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYXJ0Q2hvaWNlQk5GUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsIlBBUlRfQ0hPSUNFX1JVTEVfTkFNRSIsInBhcnRDaG9pY2VEZWZpbml0aW9uIiwiUGFydENob2ljZURlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKO2lFQUNnQjt5QkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLGdDQUFxQixFQUM1QkMsdUJBQXVCQyxtQkFBb0IsQ0FBQ0osV0FBVyxJQUN2REssVUFBVSxNQUNWQyxjQUFjO29CQUNaSDtpQkFDRCxFQUNESSxpQkFBaUIsSUFSTlIsa0JBUTRCRSxNQUFNSSxTQUFTQztnQkFFNUQsT0FBT0M7WUFDVDs7O1dBWG1CUjtFQUEwQlMsYUFBSSJ9