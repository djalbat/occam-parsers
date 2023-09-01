"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _part = /*#__PURE__*/ _interop_require_default(require("../node/bnf/part"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../definition/ruleName"));
var _terminal = /*#__PURE__*/ _interop_require_default(require("../definition/partRule/terminal"));
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../definition/partRule/nonTerminal"));
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
var PartRule = /*#__PURE__*/ function(Rule) {
    _inherits(PartRule, Rule);
    var _super = _create_super(PartRule);
    function PartRule() {
        _class_call_check(this, PartRule);
        return _super.apply(this, arguments);
    }
    _create_class(PartRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.partRuleName, terminalPartRuleDefinition = _terminal.default.fromNothing(), nonTerminalPartRuleDefinition = _nonTerminal.default.fromNothing(), noWhitespacePartRuleNameDefinition = _ruleName.default.fromRuleName(_ruleNames.noWhitespacePartRuleName), ambiguous = false, definitions = [
                    nonTerminalPartRuleDefinition,
                    terminalPartRuleDefinition,
                    noWhitespacePartRuleNameDefinition
                ], NonTerminalNode = _part.default, partRule = new PartRule(name, ambiguous, definitions, NonTerminalNode);
                return partRule;
            }
        }
    ]);
    return PartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3BhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUGFydEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3BhcnRcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IHBhcnRSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IHBhcnRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUobm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBQYXJ0Qk5GTm9kZSwgIC8vL1xuICAgICAgICAgIHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcGFydFJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYXJ0UnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsInBhcnRSdWxlTmFtZSIsInRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiUGFydEJORk5vZGUiLCJwYXJ0UnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzJEQVJKOzJEQUNPOytEQUNPOytEQUNRO2tFQUNHO3lCQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsdUJBQVksRUFDbkJDLDZCQUE2QkMsaUJBQTBCLENBQUNKLFdBQVcsSUFDbkVLLGdDQUFnQ0Msb0JBQTZCLENBQUNOLFdBQVcsSUFDekVPLHFDQUFxQ0MsaUJBQWtCLENBQUNDLFlBQVksQ0FBQ0MsbUNBQXdCLEdBQzdGQyxZQUFZLE9BQ1pDLGNBQWM7b0JBQ1pQO29CQUNBRjtvQkFDQUk7aUJBQ0QsRUFDRE0sa0JBQWtCQyxhQUFXLEVBQzdCQyxXQUFXLElBYkFoQixTQWFhRSxNQUFNVSxXQUFXQyxhQUFhQztnQkFFNUQsT0FBT0U7WUFDVDs7O1dBaEJtQmhCO0VBQWlCaUIsYUFBSSJ9