"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _definition = _interopRequireDefault(require("../node/bnf/definition"));
var _quantifierRule = _interopRequireDefault(require("../definition/quantifierRule"));
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var questionMark = _occamLexers.specialSymbols.questionMark;
var OptionalQuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(OptionalQuantifierRule, Rule);
    var _super = _createSuper(OptionalQuantifierRule);
    function OptionalQuantifierRule() {
        _classCallCheck(this, OptionalQuantifierRule);
        var name = _ruleNames.OptionalQuantifierRuleName, optionalQuantifierTerminalSymbolContent = questionMark, optionalQuantifierRuleDefinition = new _quantifierRule.default(optionalQuantifierTerminalSymbolContent), definitions = [
            optionalQuantifierRuleDefinition
        ], Node = _definition.default;
        return _super.call(this, name, definitions, Node);
    }
    return OptionalQuantifierRule;
}(_rule.default);
exports.default = OptionalQuantifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL29wdGlvbmFsUXVhbnRpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbkJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL2RlZmluaXRpb25cIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcXVhbnRpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gcXVlc3Rpb25NYXJrLCAvLy9cbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24ob3B0aW9uYWxRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbkJORk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJuYW1lIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbFF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIkRlZmluaXRpb25CTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRStCLEdBQWMsQ0FBZCxZQUFjO0FBRTVCLEdBQVMsQ0FBVCxLQUFTO0FBQ0ksR0FBd0IsQ0FBeEIsV0FBd0I7QUFDakIsR0FBOEIsQ0FBOUIsZUFBOEI7QUFFeEIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7OztLQVJ6RDs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQVVBLEdBQUssQ0FBR0EsWUFBWSxHQUFLQyxZQUFjLGdCQUEvQkQsWUFBWTtBQUVMLEdBQUssQ0FBQ0Usc0JBQXNCLGlCQUE1QixRQUFROzJDQVp2Qjs7YUFZcUJBLHNCQUFzQjtxREFaM0M7UUFjSSxHQUFLLENBQUNDLElBQUksR0FBR0MsVUFBMEIsNkJBQ2pDQyx1Q0FBdUMsR0FBR0wsWUFBWSxFQUN0RE0sZ0NBQWdDLEdBQUcsR0FBRyxDQUFDQyxlQUF3QixTQUFDRix1Q0FBdUMsR0FDdkdHLFdBQVcsR0FBRyxDQUFDO1lBQ2JGLGdDQUFnQztRQUNsQyxDQUFDLEVBQ0RHLElBQUksR0FBR0MsV0FBaUI7aUNBRXhCUCxJQUFJLEVBQUVLLFdBQVcsRUFBRUMsSUFBSTs7O0VBVm1CRSxLQUFJO2tCQUFuQ1Qsc0JBQXNCLEFBWjNDIn0=