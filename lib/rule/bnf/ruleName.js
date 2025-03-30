"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _name = /*#__PURE__*/ _interop_require_default(require("../../definition/name"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/ruleName"));
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
var RuleNameBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(RuleNameBNFRule, Rule);
    function RuleNameBNFRule() {
        _class_call_check(this, RuleNameBNFRule);
        return _call_super(this, RuleNameBNFRule, arguments);
    }
    _create_class(RuleNameBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var nameDefinition = _name.default.fromNothing(), name = _ruleNames.ruleNameRuleName, opacity = null, definitions = [
                    nameDefinition ///
                ], NonTerminalNode = _ruleName.default, ruleNameRule = new RuleNameBNFRule(name, opacity, definitions, NonTerminalNode);
                return ruleNameRule;
            }
        }
    ]);
    return RuleNameBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9uYW1lXCI7XG5pbXBvcnQgUnVsZU5hbWVCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9ydWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZUJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVEZWZpbml0aW9uID0gTmFtZURlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbmFtZURlZmluaXRpb24gIC8vL1xuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUnVsZU5hbWVCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlTmFtZVJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlTmFtZUJORlJ1bGUiLCJmcm9tTm90aGluZyIsIm5hbWVEZWZpbml0aW9uIiwiTmFtZURlZmluaXRpb24iLCJuYW1lIiwicnVsZU5hbWVSdWxlTmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlJ1bGVOYW1lQk5GTm9kZSIsInJ1bGVOYW1lUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5KOzJEQUNVOytEQUNDO3lCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLGlCQUFpQkMsYUFBYyxDQUFDRixXQUFXLElBQzNDRyxPQUFPQywyQkFBZ0IsRUFDdkJDLFVBQVUsTUFDVkMsY0FBYztvQkFDWkwsZUFBZ0IsR0FBRztpQkFDcEIsRUFDRE0sa0JBQWtCQyxpQkFBZSxFQUNqQ0MsZUFBZSxJQVRKVixnQkFTd0JJLE1BQU1FLFNBQVNDLGFBQWFDO2dCQUVyRSxPQUFPRTtZQUNUOzs7V0FabUJWO0VBQXdCVyxhQUFJIn0=