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
var questionMark = _occamLexers.specialSymbols.questionMark;
var OptionalQuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(OptionalQuantifierRule, Rule);
    function OptionalQuantifierRule() {
        _classCallCheck(this, OptionalQuantifierRule);
        var name = _ruleNames.OptionalQuantifierRuleName, optionalQuantifierTerminalSymbolContent = questionMark, optionalQuantifierRuleDefinition = new _quantifierRule.default(optionalQuantifierTerminalSymbolContent), definitions = [
            optionalQuantifierRuleDefinition
        ], Node = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(OptionalQuantifierRule).call(this, name, definitions, Node));
    }
    return OptionalQuantifierRule;
}(_rule.default);
exports.default = OptionalQuantifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9vcHRpb25hbFF1YW50aWZpZXIuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJSdWxlIiwiRGVmaW5pdGlvbk5vZGUiLCJRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsInF1ZXN0aW9uTWFyayIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJvcHRpb25hbFF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFNUIsR0FBUyxDQUFULEtBQVM7QUFDQyxHQUFvQixDQUFwQixXQUFvQjtBQUNWLEdBQThCLENBQTlCLGVBQThCO0FBRXhCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELEdBQUssQ0FBRyxZQUFZLEdBUlcsWUFBYyxnQkFRckMsWUFBWTtJQUVDLHNCQUFzQixpQkFBNUIsUUFBUTtjQUFGLHNCQUFzQjthQUF0QixzQkFBc0I7OEJBQXRCLHNCQUFzQjtRQUV2QyxHQUFLLENBQUMsSUFBSSxHQU42QixVQUFjLDZCQU8vQyx1Q0FBdUMsR0FBRyxZQUFZLEVBQ3RELGdDQUFnQyxHQUFHLEdBQUcsQ0FWWCxlQUE4QixTQVVPLHVDQUF1QyxHQUN2RyxXQUFXLEdBQUcsQ0FBQztZQUNiLGdDQUFnQztRQUNsQyxDQUFDLEVBQ0QsSUFBSSxHQWZhLFdBQW9CO2dFQU8xQixzQkFBc0IsYUFVakMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVZaLHNCQUFzQjtFQVIxQixLQUFTO2tCQVFMLHNCQUFzQiJ9