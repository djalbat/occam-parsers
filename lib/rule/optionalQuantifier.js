"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OptionalQuantifierRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _quantifier = /*#__PURE__*/ _interop_require_default(require("../node/bnf/quantifier"));
var _quantifierRule = /*#__PURE__*/ _interop_require_default(require("../definition/quantifierRule"));
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
var questionMark = _occamlexers.specialSymbols.questionMark;
var OptionalQuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(OptionalQuantifierRule, Rule);
    var _super = _create_super(OptionalQuantifierRule);
    function OptionalQuantifierRule() {
        _class_call_check(this, OptionalQuantifierRule);
        var name = _ruleNames.optionalQuantifierRuleName, optionalQuantifierTerminalSymbolContent = questionMark, optionalQuantifierRuleDefinition = new _quantifierRule.default(optionalQuantifierTerminalSymbolContent), ambiguous = false, definitions = [
            optionalQuantifierRuleDefinition
        ], Node = _quantifier.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return OptionalQuantifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL29wdGlvbmFsUXVhbnRpZmllci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUXVhbnRpZmllckJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3F1YW50aWZpZXJcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcXVhbnRpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBxdWVzdGlvbk1hcmssIC8vL1xuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbihvcHRpb25hbFF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBRdWFudGlmaWVyQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIm5hbWUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiUXVhbnRpZmllckJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyQkFWVTsyREFFZDtpRUFDYTtxRUFDTzt5QkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTSxBQUFFQyxlQUFpQkMsMkJBQWMsQ0FBL0JEO0FBRU8sSUFBQSxBQUFNRCx1Q0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBO1FBRWpCLElBQU1HLE9BQU9DLHFDQUEwQixFQUNqQ0MsMENBQTBDSixjQUMxQ0ssbUNBQW1DLElBQUlDLHVCQUF3QixDQUFDRiwwQ0FDaEVHLFlBQVksS0FBSyxFQUNqQkMsY0FBYztZQUNaSDtTQUNELEVBQ0RJLE9BQU9DLG1CQUFpQjtpQ0FFeEJSLE1BQU1LLFdBQVdDLGFBQWFDOztXQVhuQlY7RUFBK0JZLGFBQUkifQ==