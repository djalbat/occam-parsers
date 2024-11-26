"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../node/bnf/choiceOfParts"));
var _choiceOfParts1 = /*#__PURE__*/ _interop_require_default(require("../definition/choiceOfParts"));
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
var ChoiceOfPartsRule = /*#__PURE__*/ function(Rule) {
    _inherits(ChoiceOfPartsRule, Rule);
    function ChoiceOfPartsRule() {
        _class_call_check(this, ChoiceOfPartsRule);
        return _call_super(this, ChoiceOfPartsRule, arguments);
    }
    _create_class(ChoiceOfPartsRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.choiceOfPartsRuleName, choiceOfPartsDefinition = _choiceOfParts1.default.fromNothing(), opacity = null, definitions = [
                    choiceOfPartsDefinition
                ], NonTerminalNode = _choiceOfParts.default, choiceOfPartsRule = new ChoiceOfPartsRule(name, opacity, definitions, NonTerminalNode);
                return choiceOfPartsRule;
            }
        }
    ]);
    return ChoiceOfPartsRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2Nob2ljZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c0JORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9jaG9pY2VPZlBhcnRzXCI7XG5cbmltcG9ydCB7IGNob2ljZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBjaG9pY2VPZlBhcnRzUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uID0gQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBDaG9pY2VPZlBhcnRzQk5GTm9kZSwgLy8vXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1J1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c1J1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDaG9pY2VPZlBhcnRzUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsImNob2ljZU9mUGFydHNSdWxlTmFtZSIsImNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwiQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJDaG9pY2VPZlBhcnRzQk5GTm9kZSIsImNob2ljZU9mUGFydHNSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7b0VBQ2dCO3FFQUNHO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLGdDQUFxQixFQUM1QkMsMEJBQTBCQyx1QkFBdUIsQ0FBQ0osV0FBVyxJQUM3REssVUFBVSxNQUNWQyxjQUFjO29CQUNaSDtpQkFDRCxFQUNESSxrQkFBa0JDLHNCQUFvQixFQUN0Q0Msb0JBQW9CLElBVFRWLGtCQVMrQkUsTUFBTUksU0FBU0MsYUFBYUM7Z0JBRTVFLE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBMEJXLGFBQUkifQ==