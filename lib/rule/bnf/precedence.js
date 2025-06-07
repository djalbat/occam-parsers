"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrecedenceBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _precedence = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/precedence"));
var _precedence1 = /*#__PURE__*/ _interop_require_default(require("../../definition/precedence"));
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
var PrecedenceBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(PrecedenceBNFRule, Rule);
    function PrecedenceBNFRule() {
        _class_call_check(this, PrecedenceBNFRule);
        return _call_super(this, PrecedenceBNFRule, arguments);
    }
    _create_class(PrecedenceBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.precedenceRuleName, precedenceDefinition = _precedence1.default.fromNothing(), opacity = null, definitions = [
                    precedenceDefinition
                ], NonTerminalNode = _precedence.default, precedenceRule = new PrecedenceBNFRule(name, opacity, definitions, NonTerminalNode);
                return precedenceRule;
            }
        }
    ]);
    return PrecedenceBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9wcmVjZWRlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFByZWNlZGVuY2VCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgUHJlY2VkZW5jZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcHJlY2VkZW5jZVwiO1xuXG5pbXBvcnQgeyBwcmVjZWRlbmNlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWNlZGVuY2VCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gcHJlY2VkZW5jZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJlY2VkZW5jZURlZmluaXRpb24gPSBQcmVjZWRlbmNlRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcHJlY2VkZW5jZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFByZWNlZGVuY2VCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgcHJlY2VkZW5jZVJ1bGUgPSBuZXcgUHJlY2VkZW5jZUJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcHJlY2VkZW5jZVJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVjZWRlbmNlQk5GUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsInByZWNlZGVuY2VSdWxlTmFtZSIsInByZWNlZGVuY2VEZWZpbml0aW9uIiwiUHJlY2VkZW5jZURlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJQcmVjZWRlbmNlQk5GTm9kZSIsInByZWNlZGVuY2VSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7aUVBQ2E7a0VBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyw2QkFBa0IsRUFDekJDLHVCQUF1QkMsb0JBQW9CLENBQUNKLFdBQVcsSUFDdkRLLFVBQVUsTUFDVkMsY0FBYztvQkFDWkg7aUJBQ0QsRUFDREksa0JBQWtCQyxtQkFBaUIsRUFDbkNDLGlCQUFpQixJQVROVixrQkFTNEJFLE1BQU1JLFNBQVNDLGFBQWFDO2dCQUV6RSxPQUFPRTtZQUNUOzs7V0FabUJWO0VBQTBCVyxhQUFJIn0=