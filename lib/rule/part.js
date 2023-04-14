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
        var name = _ruleNames.partRuleName, terminalPartRuleDefinition = new _terminal.default(), nonTerminalPartRuleDefinition = new _nonTerminal.default(), noWhitespacePartRuleNameDefinition = new _ruleName.default(_ruleNames.noWhitespacePartRuleName), ambiguous = false, definitions = [
            nonTerminalPartRuleDefinition,
            terminalPartRuleDefinition,
            noWhitespacePartRuleNameDefinition
        ], Node = _part.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return PartRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3BhcnQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUGFydEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3BhcnRcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IHBhcnRSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gcGFydFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFBhcnRCTkZOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUGFydFJ1bGUiLCJuYW1lIiwicGFydFJ1bGVOYW1lIiwidGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiUGFydEJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjsyREFDTzsrREFDTzsrREFDUTtrRUFDRzt5QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBO1FBRWpCLElBQU1DLE9BQU9DLHVCQUFZLEVBQ25CQyw2QkFBNkIsSUFBSUMsaUJBQTBCLElBQzNEQyxnQ0FBZ0MsSUFBSUMsb0JBQTZCLElBQ2pFQyxxQ0FBcUMsSUFBSUMsaUJBQWtCLENBQUNDLG1DQUF3QixHQUNwRkMsWUFBWSxLQUFLLEVBQ2pCQyxjQUFjO1lBQ1pOO1lBQ0FGO1lBQ0FJO1NBQ0QsRUFDREssT0FBT0MsYUFBVztpQ0FFbEJaLE1BQU1TLFdBQVdDLGFBQWFDOztXQWRuQlo7RUFBaUJjLGFBQUkifQ==