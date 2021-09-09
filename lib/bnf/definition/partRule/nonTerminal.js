"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../../definition"));
var _ruleName = _interopRequireDefault(require("../../part/nonTerminal/ruleName"));
var _zeroOrMoreParts = _interopRequireDefault(require("../../part/nonTerminal/zeroOrMoreParts"));
var _ruleNames = require("../../ruleNames");
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
var NonTerminalPartRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(NonTerminalPartRuleDefinition, Definition);
    function NonTerminalPartRuleDefinition() {
        _classCallCheck(this, NonTerminalPartRuleDefinition);
        var quantifierRuleName = _ruleNames.QuantifierRuleName, nonTerminalPartRuleName = _ruleNames.NonTerminalPartRuleName, quantifierRuleNamePart = new _ruleName.default(quantifierRuleName), nonTerminalPartRuleNamePart = new _ruleName.default(nonTerminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts.default(quantifierRuleNamePart), parts = [
            nonTerminalPartRuleNamePart,
            zeroOrMoreQuantifierRuleNamePartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRuleDefinition).call(this, parts));
    }
    return NonTerminalPartRuleDefinition;
}(_definition.default);
exports.default = NonTerminalPartRuleDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9wYXJ0UnVsZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIk5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIiwiTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJjb25zdHJ1Y3RvciIsInF1YW50aWZpZXJSdWxlTmFtZSIsIm5vblRlcm1pbmFsUGFydFJ1bGVOYW1lIiwicXVhbnRpZmllclJ1bGVOYW1lUGFydCIsIm5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVQYXJ0c1BhcnQiLCJwYXJ0cyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVyxHQUFrQixDQUFsQixXQUFrQjtBQUNoQixHQUFpQyxDQUFqQyxTQUFpQztBQUMxQixHQUF3QyxDQUF4QyxnQkFBd0M7QUFFWixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4RCw2QkFBNkIsaUJBQW5DLFFBQVE7Y0FBRiw2QkFBNkI7YUFBN0IsNkJBQTZCOzhCQUE3Qiw2QkFBNkI7UUFFOUMsR0FBSyxDQUFDLGtCQUFrQixHQUpnQyxVQUFpQixxQkFLbkUsdUJBQXVCLEdBTDJCLFVBQWlCLDBCQU1uRSxzQkFBc0IsR0FBRyxHQUFHLENBVGIsU0FBaUMsU0FTTixrQkFBa0IsR0FDNUQsMkJBQTJCLEdBQUcsR0FBRyxDQVZsQixTQUFpQyxTQVVELHVCQUF1QixHQUN0RSxxQ0FBcUMsR0FBRyxHQUFHLENBVnJCLGdCQUF3QyxTQVVFLHNCQUFzQixHQUN0RixLQUFLLEdBQUcsQ0FBQztZQUNQLDJCQUEyQjtZQUMzQixxQ0FBcUM7UUFDdkMsQ0FBQztnRUFWVSw2QkFBNkIsYUFZeEMsS0FBSzs7V0FaTSw2QkFBNkI7RUFOM0IsV0FBa0I7a0JBTXBCLDZCQUE2QiJ9