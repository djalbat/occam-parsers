"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _rule1 = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/rule"));
var _rule2 = /*#__PURE__*/ _interop_require_default(require("../../definition/rule"));
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
var RuleBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(RuleBNFRule, Rule);
    function RuleBNFRule() {
        _class_call_check(this, RuleBNFRule);
        return _call_super(this, RuleBNFRule, arguments);
    }
    _create_class(RuleBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var ruleDefinition = _rule2.default.fromNothing(), name = _ruleNames.ruleRuleName, opacity = null, definitions = [
                    ruleDefinition
                ], NonTerminalNode = _rule1.default, ruleRule = new RuleBNFRule(name, opacity, definitions, NonTerminalNode);
                return ruleRule;
            }
        }
    ]);
    return RuleBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFJ1bGVCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9ydWxlXCI7XG5pbXBvcnQgUnVsZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcnVsZVwiO1xuXG5pbXBvcnQgeyBydWxlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBydWxlRGVmaW5pdGlvbiA9IFJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJ1bGVCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZUJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZVJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlQk5GUnVsZSIsImZyb21Ob3RoaW5nIiwicnVsZURlZmluaXRpb24iLCJSdWxlRGVmaW5pdGlvbiIsIm5hbWUiLCJydWxlUnVsZU5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJSdWxlQk5GTm9kZSIsInJ1bGVSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7NERBQ087NERBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxpQkFBaUJDLGNBQWMsQ0FBQ0YsV0FBVyxJQUMzQ0csT0FBT0MsdUJBQVksRUFDbkJDLFVBQVUsTUFDVkMsY0FBYztvQkFDWkw7aUJBQ0QsRUFDRE0sa0JBQWtCQyxjQUFXLEVBQzdCQyxXQUFXLElBVEFWLFlBU2dCSSxNQUFNRSxTQUFTQyxhQUFhQztnQkFFN0QsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUFvQlcsYUFBSSJ9