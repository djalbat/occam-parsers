"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartChoiceRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _partChoice = /*#__PURE__*/ _interop_require_default(require("../node/bnf/partChoice"));
var _partChoice1 = /*#__PURE__*/ _interop_require_default(require("../definition/partChoice"));
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
var PartChoiceRule = /*#__PURE__*/ function(Rule) {
    _inherits(PartChoiceRule, Rule);
    function PartChoiceRule() {
        _class_call_check(this, PartChoiceRule);
        return _call_super(this, PartChoiceRule, arguments);
    }
    _create_class(PartChoiceRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.partChoiceRuleName, partChoiceDefinition = _partChoice1.default.fromNothing(), opacity = null, definitions = [
                    partChoiceDefinition
                ], NonTerminalNode = _partChoice.default, definitionRule = new PartChoiceRule(name, opacity, definitions, NonTerminalNode);
                return definitionRule;
            }
        }
    ]);
    return PartChoiceRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3BhcnRDaG9pY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUGFydENob2ljZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3BhcnRDaG9pY2VcIjtcbmltcG9ydCBQYXJ0Q2hvaWNlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0Q2hvaWNlXCI7XG5cbmltcG9ydCB7IHBhcnRDaG9pY2VSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydENob2ljZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBwYXJ0Q2hvaWNlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBwYXJ0Q2hvaWNlRGVmaW5pdGlvbiA9IFBhcnRDaG9pY2VEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBwYXJ0Q2hvaWNlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUGFydENob2ljZUJORk5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBQYXJ0Q2hvaWNlUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhcnRDaG9pY2VSdWxlIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwicGFydENob2ljZVJ1bGVOYW1lIiwicGFydENob2ljZURlZmluaXRpb24iLCJQYXJ0Q2hvaWNlRGVmaW5pdGlvbiIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnRDaG9pY2VCTkZOb2RlIiwiZGVmaW5pdGlvblJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjtpRUFDYTtrRUFDRzt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsNkJBQWtCLEVBQ3pCQyx1QkFBdUJDLG9CQUFvQixDQUFDSixXQUFXLElBQ3ZESyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pIO2lCQUNELEVBQ0RJLGtCQUFrQkMsbUJBQWlCLEVBQ25DQyxpQkFBaUIsSUFUTlYsZUFTeUJFLE1BQU1JLFNBQVNDLGFBQWFDO2dCQUV0RSxPQUFPRTtZQUNUOzs7V0FabUJWO0VBQXVCVyxhQUFJIn0=