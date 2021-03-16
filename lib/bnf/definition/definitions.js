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
var DefinitionsDefinition = function(Definition) {
    _inherits(DefinitionsDefinition, _definition.default);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9kZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdmVydGljYWxCYXIgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uc0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvblJ1bGVOYW1lID0gRGVmaW5pdGlvblJ1bGVOYW1lLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50ID0gdmVydGljYWxCYXIsXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZGVmaW5pdGlvblJ1bGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuRGVmaW5pdGlvblJ1bGVOYW1lUGFydHMgPSBbXG4gICAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIGRlZmluaXRpb25SdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlbkRlZmluaXRpb25SdWxlTmFtZVBhcnRzKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvblJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsWUFBQTtJQUVBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFFQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsV0FBQSxHQVZBLFlBQUEsZ0JBVUEsV0FBQTtJQUVBLHFCQUFBLFlBQUEsVUFBQTtjQUFBLHFCQUFBLEVBVkEsV0FBQTthQVVBLHFCQUFBOzhCQUFBLHFCQUFBO1lBRUEsa0JBQUEsR0FOQSxVQUFBLHFCQU9BLGdDQUFBLEdBQUEsV0FBQSxFQUNBLHNCQUFBLE9BYkEsU0FBQSxTQWFBLGtCQUFBLEdBQ0EsNkJBQUEsT0FiQSxlQUFBLFNBYUEsZ0NBQUEsR0FDQSxvREFBQTtBQUNBLHlDQUFBO0FBQ0Esa0NBQUE7V0FFQSxtQkFBQSxPQWhCQSxnQkFBQSxTQWdCQSxvREFBQSxHQUNBLDZCQUFBLE9BbEJBLGdCQUFBLFNBa0JBLG1CQUFBLEdBQ0EsS0FBQTtBQUNBLGtDQUFBO0FBQ0EseUNBQUE7O2dFQWRBLHFCQUFBLGFBaUJBLEtBQUE7O1dBakJBLHFCQUFBO0VBVkEsV0FBQTtrQkFVQSxxQkFBQSJ9