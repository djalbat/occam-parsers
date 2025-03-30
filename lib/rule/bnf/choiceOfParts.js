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
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/choiceOfParts"));
var _choiceOfParts1 = /*#__PURE__*/ _interop_require_default(require("../../definition/choiceOfParts"));
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
                var name = _ruleNames.choiceOfPartsRuleName, choiceOfPartsDefinition = _choiceOfParts1.default.fromNothing(), opacity = null, definitions = [
                    choiceOfPartsDefinition
                ], NonTerminalNode = _choiceOfParts.default, choiceOfPartsRule = new ChoiceOfPartsBNFRule(name, opacity, definitions, NonTerminalNode);
                return choiceOfPartsRule;
            }
        }
    ]);
    return ChoiceOfPartsBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9jaG9pY2VPZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vY2hvaWNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBjaG9pY2VPZlBhcnRzUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2ljZU9mUGFydHNCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLCAvLy9cbiAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiA9IENob2ljZU9mUGFydHNEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gQ2hvaWNlT2ZQYXJ0c0JORk5vZGUsIC8vL1xuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c0JORlJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiQ2hvaWNlT2ZQYXJ0c0JORk5vZGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5KO29FQUNnQjtxRUFDRzt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxnQ0FBcUIsRUFDNUJDLDBCQUEwQkMsdUJBQXVCLENBQUNKLFdBQVcsSUFDN0RLLFVBQVUsTUFDVkMsY0FBYztvQkFDWkg7aUJBQ0QsRUFDREksa0JBQWtCQyxzQkFBb0IsRUFDdENDLG9CQUFvQixJQVRUVixxQkFTa0NFLE1BQU1JLFNBQVNDLGFBQWFDO2dCQUUvRSxPQUFPRTtZQUNUOzs7V0FabUJWO0VBQTZCVyxhQUFJIn0=