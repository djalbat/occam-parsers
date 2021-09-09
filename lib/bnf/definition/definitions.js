"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));
var _zeroOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/zeroOrMoreParts"));
var _sequenceOfParts = _interopRequireDefault(require("../part/nonTerminal/sequenceOfParts"));
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
var verticalBar = _occamLexers.specialSymbols.verticalBar;
var DefinitionsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DefinitionsDefinition, Definition);
    function DefinitionsDefinition() {
        _classCallCheck(this, DefinitionsDefinition);
        var definitionRuleName = _ruleNames.DefinitionRuleName, verticalBarTerminalSymbolContent = verticalBar, definitionRuleNamePart = new _ruleName.default(definitionRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), verticalBarTerminalSymbolThenDefinitionRuleNameParts = [
            verticalBarTerminalSymbolPart,
            definitionRuleNamePart
        ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenDefinitionRuleNameParts), zeroOrMoreSequenceOfPartsPart = new _zeroOrMoreParts.default(sequenceOfPartsPart), parts = [
            definitionRuleNamePart,
            zeroOrMoreSequenceOfPartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsDefinition).call(this, parts));
    }
    return DefinitionsDefinition;
}(_definition.default);
exports.default = DefinitionsDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9kZWZpbml0aW9ucy5qcyJdLCJuYW1lcyI6WyJzcGVjaWFsU3ltYm9scyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIkRlZmluaXRpb25SdWxlTmFtZSIsInZlcnRpY2FsQmFyIiwiRGVmaW5pdGlvbnNEZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJkZWZpbml0aW9uUnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsImRlZmluaXRpb25SdWxlTmFtZVBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuRGVmaW5pdGlvblJ1bGVOYW1lUGFydHMiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFdEIsR0FBZSxDQUFmLFdBQWU7QUFDYixHQUE4QixDQUE5QixTQUE4QjtBQUN4QixHQUFpQyxDQUFqQyxlQUFpQztBQUNoQyxHQUFxQyxDQUFyQyxnQkFBcUM7QUFDckMsR0FBcUMsQ0FBckMsZ0JBQXFDO0FBRWxDLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELEdBQUssQ0FBRyxXQUFXLEdBVlksWUFBYyxnQkFVckMsV0FBVztJQUVFLHFCQUFxQixpQkFBM0IsUUFBUTtjQUFGLHFCQUFxQjthQUFyQixxQkFBcUI7OEJBQXJCLHFCQUFxQjtRQUV0QyxHQUFLLENBQUMsa0JBQWtCLEdBTk8sVUFBYyxxQkFPdkMsZ0NBQWdDLEdBQUcsV0FBVyxFQUM5QyxzQkFBc0IsR0FBRyxHQUFHLENBYmIsU0FBOEIsU0FhSCxrQkFBa0IsR0FDNUQsNkJBQTZCLEdBQUcsR0FBRyxDQWJkLGVBQWlDLFNBYUMsZ0NBQWdDLEdBQ3ZGLG9EQUFvRCxHQUFHLENBQUM7WUFDdEQsNkJBQTZCO1lBQzdCLHNCQUFzQjtRQUN4QixDQUFDLEVBQ0QsbUJBQW1CLEdBQUcsR0FBRyxDQWhCSCxnQkFBcUMsU0FnQmIsb0RBQW9ELEdBQ2xHLDZCQUE2QixHQUFHLEdBQUcsQ0FsQmIsZ0JBQXFDLFNBa0JILG1CQUFtQixHQUMzRSxLQUFLLEdBQUcsQ0FBQztZQUNQLHNCQUFzQjtZQUN0Qiw2QkFBNkI7UUFDL0IsQ0FBQztnRUFmVSxxQkFBcUIsYUFpQmhDLEtBQUs7O1dBakJNLHFCQUFxQjtFQVZuQixXQUFlO2tCQVVqQixxQkFBcUIifQ==