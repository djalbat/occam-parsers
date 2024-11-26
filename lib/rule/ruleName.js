"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _name = /*#__PURE__*/ _interop_require_default(require("../definition/name"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../node/bnf/ruleName"));
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
var RuleNameRule = /*#__PURE__*/ function(Rule) {
    _inherits(RuleNameRule, Rule);
    function RuleNameRule() {
        _class_call_check(this, RuleNameRule);
        return _call_super(this, RuleNameRule, arguments);
    }
    _create_class(RuleNameRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var nameDefinition = _name.default.fromNothing(), name = _ruleNames.ruleNameRuleName, opacity = null, definitions = [
                    nameDefinition ///
                ], NonTerminalNode = _ruleName.default, ruleNameRule = new RuleNameRule(name, opacity, definitions, NonTerminalNode);
                return ruleNameRule;
            }
        }
    ]);
    return RuleNameRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IE5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL25hbWVcIjtcbmltcG9ydCBSdWxlTmFtZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZURlZmluaXRpb24gPSBOYW1lRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBuYW1lRGVmaW5pdGlvbiAgLy8vXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSdWxlTmFtZUJORk5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZURlZmluaXRpb24iLCJOYW1lRGVmaW5pdGlvbiIsIm5hbWUiLCJydWxlTmFtZVJ1bGVOYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiUnVsZU5hbWVCTkZOb2RlIiwicnVsZU5hbWVSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7MkRBQ1U7K0RBQ0M7eUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsaUJBQWlCQyxhQUFjLENBQUNGLFdBQVcsSUFDM0NHLE9BQU9DLDJCQUFnQixFQUN2QkMsVUFBVSxNQUNWQyxjQUFjO29CQUNaTCxlQUFnQixHQUFHO2lCQUNwQixFQUNETSxrQkFBa0JDLGlCQUFlLEVBQ2pDQyxlQUFlLElBVEpWLGFBU3FCSSxNQUFNRSxTQUFTQyxhQUFhQztnQkFFbEUsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUFxQlcsYUFBSSJ9