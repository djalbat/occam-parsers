"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZeroOrMoreQuantifierRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _quantifier = /*#__PURE__*/ _interop_require_default(require("../node/bnf/quantifier"));
var _quantifierRule = /*#__PURE__*/ _interop_require_default(require("../definition/quantifierRule"));
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
var asterisk = _occamlexers.specialSymbols.asterisk;
var ZeroOrMoreQuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(ZeroOrMoreQuantifierRule, Rule);
    var _super = _create_super(ZeroOrMoreQuantifierRule);
    function ZeroOrMoreQuantifierRule() {
        _class_call_check(this, ZeroOrMoreQuantifierRule);
        return _super.apply(this, arguments);
    }
    _create_class(ZeroOrMoreQuantifierRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.zeroOrMoreQuantifierRuleName, specialSymbol = asterisk, zeroOrMoreQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), ambiguous = false, definitions = [
                    zeroOrMoreQuantifierRuleDefinition
                ], NonTerminalNode = _quantifier.default, zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierRule(name, ambiguous, definitions, NonTerminalNode);
                return zeroOrMoreQuantifierRule;
            }
        }
    ]);
    return ZeroOrMoreQuantifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBRdWFudGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvcXVhbnRpZmllclwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHNwZWNpYWxTeW1ib2wgPSBhc3RlcmlzaywgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbi5mcm9tU3BlY2lhbFN5bWJvbChzcGVjaWFsU3ltYm9sKSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFF1YW50aWZpZXJCTkZOb2RlLCAvLy9cbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVF1YW50aWZpZXJSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwiYXN0ZXJpc2siLCJzcGVjaWFsU3ltYm9scyIsImZyb21Ob3RoaW5nIiwibmFtZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJzcGVjaWFsU3ltYm9sIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImZyb21TcGVjaWFsU3ltYm9sIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJRdWFudGlmaWVyQk5GTm9kZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJCQVZVOzJEQUVkO2lFQUNhO3FFQUNPO3lCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU0sQUFBRUMsV0FBYUMsMkJBQWMsQ0FBM0JEO0FBRU8sSUFBQSxBQUFNRCx5Q0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyx1Q0FBNEIsRUFDbkNDLGdCQUFnQkwsVUFDaEJNLHFDQUFxQ0MsdUJBQXdCLENBQUNDLGlCQUFpQixDQUFDSCxnQkFDaEZJLFlBQVksT0FDWkMsY0FBYztvQkFDWko7aUJBQ0QsRUFDREssa0JBQWtCQyxtQkFBaUIsRUFDbkNDLDJCQUEyQixJQVZoQmQseUJBVTZDSSxNQUFNTSxXQUFXQyxhQUFhQztnQkFFNUYsT0FBT0U7WUFDVDs7O1dBYm1CZDtFQUFpQ2UsYUFBSSJ9