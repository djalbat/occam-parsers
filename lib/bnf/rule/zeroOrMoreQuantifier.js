"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _definition = _interopRequireDefault(require("../node/definition"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var asterisk = _occamLexers.specialSymbols.asterisk;
var ZeroOrMoreQuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(ZeroOrMoreQuantifierRule, Rule);
    function ZeroOrMoreQuantifierRule() {
        _classCallCheck(this, ZeroOrMoreQuantifierRule);
        var name = _ruleNames.ZeroOrMoreQuantifierRuleName, zeroOrMoreQuantifierTerminalSymbolContent = asterisk, zeroOrMoreQuantifierRuleDefinition = new _quantifierRule.default(zeroOrMoreQuantifierTerminalSymbolContent), definitions = [
            zeroOrMoreQuantifierRuleDefinition
        ], Node = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(ZeroOrMoreQuantifierRule).call(this, name, definitions, Node));
    }
    return ZeroOrMoreQuantifierRule;
}(_rule.default);
exports.default = ZeroOrMoreQuantifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS96ZXJvT3JNb3JlUXVhbnRpZmllci5qcyJdLCJuYW1lcyI6WyJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJEZWZpbml0aW9uTm9kZSIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJhc3RlcmlzayIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInplcm9Pck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50IiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFNUIsR0FBUyxDQUFULEtBQVM7QUFDQyxHQUFvQixDQUFwQixXQUFvQjtBQUNWLEdBQThCLENBQTlCLGVBQThCO0FBRXRCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNELEdBQUssQ0FBRyxRQUFRLEdBUmUsWUFBYyxnQkFRckMsUUFBUTtJQUVLLHdCQUF3QixpQkFBOUIsUUFBUTtjQUFGLHdCQUF3QjthQUF4Qix3QkFBd0I7OEJBQXhCLHdCQUF3QjtRQUV6QyxHQUFLLENBQUMsSUFBSSxHQU4rQixVQUFjLCtCQU9qRCx5Q0FBeUMsR0FBRyxRQUFRLEVBQ3BELGtDQUFrQyxHQUFHLEdBQUcsQ0FWYixlQUE4QixTQVVTLHlDQUF5QyxHQUMzRyxXQUFXLEdBQUcsQ0FBQztZQUNiLGtDQUFrQztRQUNwQyxDQUFDLEVBQ0QsSUFBSSxHQWZhLFdBQW9CO2dFQU8xQix3QkFBd0IsYUFVbkMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVZaLHdCQUF3QjtFQVI1QixLQUFTO2tCQVFMLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBEZWZpbml0aW9uTm9kZSBmcm9tIFwiLi4vbm9kZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlXCI7XG5cbmltcG9ydCB7IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgYXN0ZXJpc2sgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBhc3RlcmlzaywgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24oemVyb09yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXX0=