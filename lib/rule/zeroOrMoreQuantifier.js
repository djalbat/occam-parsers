"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _quantifier = _interopRequireDefault(require("../node/bnf/quantifier"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var asterisk = _occamLexers.specialSymbols.asterisk;
var ZeroOrMoreQuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(ZeroOrMoreQuantifierRule, Rule);
    var _super = _createSuper(ZeroOrMoreQuantifierRule);
    function ZeroOrMoreQuantifierRule() {
        _classCallCheck(this, ZeroOrMoreQuantifierRule);
        var name = _ruleNames.ZeroOrMoreQuantifierRuleName, zeroOrMoreQuantifierTerminalSymbolContent = asterisk, zeroOrMoreQuantifierRuleDefinition = new _quantifierRule.default(zeroOrMoreQuantifierTerminalSymbolContent), ambiguous = false, definitions = [
            zeroOrMoreQuantifierRuleDefinition
        ], Node = _quantifier.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return ZeroOrMoreQuantifierRule;
}(_rule.default);
exports.default = ZeroOrMoreQuantifierRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBRdWFudGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvcXVhbnRpZmllclwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gYXN0ZXJpc2ssIC8vL1xuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uKHplcm9Pck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBRdWFudGlmaWVyQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImFzdGVyaXNrIiwic3BlY2lhbFN5bWJvbHMiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJuYW1lIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsInplcm9Pck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50IiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIlF1YW50aWZpZXJCTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFNUIsSUFBQSxLQUFTLGtDQUFULFNBQVMsRUFBQTtBQUNJLElBQUEsV0FBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBQ2pCLElBQUEsZUFBOEIsa0NBQTlCLDhCQUE4QixFQUFBO0FBRXRCLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFBTSxBQUFFQSxRQUFRLEdBQUtDLFlBQWMsZUFBQSxDQUEzQkQsUUFBUSxBQUFtQixBQUFDO0FBRXJCLElBQUEsQUFBTUUsd0JBQXdCLGlCQ1oxQyxBRFlZOzs7YUFBTUEsd0JBQXdCOztRQUV6QyxJQUFNQyxJQUFJLEdBQUdDLFVBQTRCLDZCQUFBLEVBQ25DQyx5Q0FBeUMsR0FBR0wsUUFBUSxFQUNwRE0sa0NBQWtDLEdBQUcsSUFBSUMsZUFBd0IsUUFBQSxDQUFDRix5Q0FBeUMsQ0FBQyxFQUM1R0csU0FBUyxHQUFHLEtBQUssRUFDakJDLFdBQVcsR0FBRztZQUNaSCxrQ0FBa0M7U0FDbkMsRUFDREksSUFBSSxHQUFHQyxXQUFpQixRQUFBLEFBQUM7aUNBRXpCUixJQUFJLEVBQUVLLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxJQUFJOzs7Q0FFM0MsQ0FicURFLEtBQUksUUFBQSxDQWF6RDtrQkFib0JWLHdCQUF3QiJ9