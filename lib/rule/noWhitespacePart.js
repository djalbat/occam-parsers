"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespacePartRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _noWhitespacePart = /*#__PURE__*/ _interop_require_default(require("../node/bnf/noWhitespacePart"));
var _noWhitespacePart1 = /*#__PURE__*/ _interop_require_default(require("../definition/noWhitespacePart"));
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
var NoWhitespacePartRule = /*#__PURE__*/ function(Rule) {
    _inherits(NoWhitespacePartRule, Rule);
    var _super = _create_super(NoWhitespacePartRule);
    function NoWhitespacePartRule() {
        _class_call_check(this, NoWhitespacePartRule);
        return _super.apply(this, arguments);
    }
    _create_class(NoWhitespacePartRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var noWhitespacePartDefinition = _noWhitespacePart1.default.fromNothing(), name = _ruleNames.noWhitespacePartRuleName, ambiguous = false, definitions = [
                    noWhitespacePartDefinition
                ], NonTerminalNode = _noWhitespacePart.default, noWhitespacePartRule = new NoWhitespacePartRule(name, ambiguous, definitions, NonTerminalNode);
                return noWhitespacePartRule;
            }
        }
    ]);
    return NoWhitespacePartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL25vV2hpdGVzcGFjZVBhcnQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL25vV2hpdGVzcGFjZVBhcnRcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9ub1doaXRlc3BhY2VQYXJ0XCI7XG5cbmltcG9ydCB7IG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uID0gTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTm9XaGl0ZXNwYWNlUGFydEJORk5vZGUsICAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiZnJvbU5vdGhpbmciLCJub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIk5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwibmFtZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiTm9XaGl0ZXNwYWNlUGFydEJORk5vZGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5KO3VFQUNtQjt3RUFDRzt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLDZCQUE2QkMsMEJBQTBCLENBQUNGLFdBQVcsSUFDbkVHLE9BQU9DLG1DQUF3QixFQUMvQkMsWUFBWSxPQUNaQyxjQUFjO29CQUNaTDtpQkFDRCxFQUNETSxrQkFBa0JDLHlCQUF1QixFQUN6Q0MsdUJBQXVCLElBVFpWLHFCQVNxQ0ksTUFBTUUsV0FBV0MsYUFBYUM7Z0JBRXBGLE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBNkJXLGFBQUkifQ==