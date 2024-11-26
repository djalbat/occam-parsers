"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OpacityModifierRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _opacityModifier = /*#__PURE__*/ _interop_require_default(require("../node/bnf/opacityModifier"));
var _opacityModifierRule = /*#__PURE__*/ _interop_require_default(require("../definition/opacityModifierRule"));
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
var OpacityModifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(OpacityModifierRule, Rule);
    function OpacityModifierRule() {
        _class_call_check(this, OpacityModifierRule);
        return _call_super(this, OpacityModifierRule, arguments);
    }
    _create_class(OpacityModifierRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.opacityModifierRuleName, opacityModifierRuleDefinition = _opacityModifierRule.default.fromNothing(), opacity = null, definitions = [
                    opacityModifierRuleDefinition
                ], NonTerminalNode = _opacityModifier.default, opacityModifierRule = new OpacityModifierRule(name, opacity, definitions, NonTerminalNode);
                return opacityModifierRule;
            }
        }
    ]);
    return OpacityModifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL29wYWNpdHlNb2RpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBPcGFjaXR5TW9kaWZpZXJCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9vcGFjaXR5TW9kaWZpZXJcIjtcbmltcG9ydCBPcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9vcGFjaXR5TW9kaWZpZXJSdWxlXCI7XG5cbmltcG9ydCB7IG9wYWNpdHlNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGFjaXR5TW9kaWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gb3BhY2l0eU1vZGlmaWVyUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIG9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uID0gT3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBPcGFjaXR5TW9kaWZpZXJCTkZOb2RlLFxuICAgICAgICAgIG9wYWNpdHlNb2RpZmllclJ1bGUgPSBuZXcgT3BhY2l0eU1vZGlmaWVyUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBvcGFjaXR5TW9kaWZpZXJSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT3BhY2l0eU1vZGlmaWVyUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsIm9wYWNpdHlNb2RpZmllclJ1bGVOYW1lIiwib3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJPcGFjaXR5TW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIk9wYWNpdHlNb2RpZmllckJORk5vZGUiLCJvcGFjaXR5TW9kaWZpZXJSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7c0VBQ2tCOzBFQUNPO3lCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLGtDQUF1QixFQUM5QkMsZ0NBQWdDQyw0QkFBNkIsQ0FBQ0osV0FBVyxJQUN6RUssVUFBVSxNQUNWQyxjQUFjO29CQUNaSDtpQkFDRCxFQUNESSxrQkFBa0JDLHdCQUFzQixFQUN4Q0Msc0JBQXNCLElBVFhWLG9CQVNtQ0UsTUFBTUksU0FBU0MsYUFBYUM7Z0JBRWhGLE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBNEJXLGFBQUkifQ==