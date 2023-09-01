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
var questionMark = _occamlexers.specialSymbols.questionMark;
var OptionalQuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(OptionalQuantifierRule, Rule);
    var _super = _create_super(OptionalQuantifierRule);
    function OptionalQuantifierRule() {
        _class_call_check(this, OptionalQuantifierRule);
        return _super.apply(this, arguments);
    }
    _create_class(OptionalQuantifierRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.optionalQuantifierRuleName, specialSymbol = questionMark, optionalQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), ambiguous = false, definitions = [
                    optionalQuantifierRuleDefinition
                ], NonTerminalNode = _quantifier.default, optionalQuantifierRule = new OptionalQuantifierRule(name, ambiguous, definitions, NonTerminalNode);
                return optionalQuantifierRule;
            }
        }
    ]);
    return OptionalQuantifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL29wdGlvbmFsUXVhbnRpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUXVhbnRpZmllckJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3F1YW50aWZpZXJcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcXVhbnRpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3BlY2lhbFN5bWJvbCA9IHF1ZXN0aW9uTWFyaywgLy8vXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSBRdWFudGlmaWVyUnVsZURlZmluaXRpb24uZnJvbVNwZWNpYWxTeW1ib2woc3BlY2lhbFN5bWJvbCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUXVhbnRpZmllckJORk5vZGUsICAvLy9cbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gbmV3IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBvcHRpb25hbFF1YW50aWZpZXJSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsInF1ZXN0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJzcGVjaWFsU3ltYm9sIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJmcm9tU3BlY2lhbFN5bWJvbCIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiUXVhbnRpZmllckJORk5vZGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVlU7MkRBRWQ7aUVBQ2E7cUVBQ087eUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTSxBQUFFQyxlQUFpQkMsMkJBQWMsQ0FBL0JEO0FBRU8sSUFBQSxBQUFNRCx1Q0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxxQ0FBMEIsRUFDakNDLGdCQUFnQkwsY0FDaEJNLG1DQUFtQ0MsdUJBQXdCLENBQUNDLGlCQUFpQixDQUFDSCxnQkFDOUVJLFlBQVksT0FDWkMsY0FBYztvQkFDWko7aUJBQ0QsRUFDREssa0JBQWtCQyxtQkFBaUIsRUFDbkNDLHlCQUF5QixJQVZkZCx1QkFVeUNJLE1BQU1NLFdBQVdDLGFBQWFDO2dCQUV4RixPQUFPRTtZQUNUOzs7V0FibUJkO0VBQStCZSxhQUFJIn0=