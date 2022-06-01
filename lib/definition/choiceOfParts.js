"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));
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
var verticalBar = _occamLexers.specialSymbols.verticalBar, openBracket = _occamLexers.specialSymbols.openBracket, closeBracket = _occamLexers.specialSymbols.closeBracket;
var ChoiceOfPartsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ChoiceOfPartsDefinition, Definition);
    var _super = _createSuper(ChoiceOfPartsDefinition);
    function ChoiceOfPartsDefinition() {
        _classCallCheck(this, ChoiceOfPartsDefinition);
        var partRuleName = _ruleNames.PartRuleName, verticalBarTerminalSymbolContent = verticalBar, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(partRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), verticalBarTerminalSymbolThenPartRuleNameParts = [
            verticalBarTerminalSymbolPart,
            partRuleNamePart
        ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenPartRuleNameParts), oneOrMoreSequenceOfPartsPart = new _oneOrMoreParts.default(sequenceOfPartsPart), parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMoreSequenceOfPartsPart,
            closeBracketTerminalSymbolPart
        ];
        return _super.call(this, parts);
    }
    return ChoiceOfPartsDefinition;
}(_definition.default);
exports.default = ChoiceOfPartsDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvc2VxdWVuY2VPZlBhcnRzXCI7XG5cbmltcG9ydCB7IFBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB2ZXJ0aWNhbEJhciwgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2ljZU9mUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHZlcnRpY2FsQmFyLCAvLy9cbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IG9wZW5CcmFja2V0LCAvLy9cbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsIC8vL1xuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5QYXJ0UnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgb25lT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQoc2VxdWVuY2VPZlBhcnRzUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbInZlcnRpY2FsQmFyIiwic3BlY2lhbFN5bWJvbHMiLCJvcGVuQnJhY2tldCIsImNsb3NlQnJhY2tldCIsIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwicGFydFJ1bGVOYW1lIiwiUGFydFJ1bGVOYW1lIiwidmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsImNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCIsInBhcnRSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwidmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5QYXJ0UnVsZU5hbWVQYXJ0cyIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0Iiwib25lT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFdEIsSUFBQSxXQUFlLGtDQUFmLGVBQWUsRUFBQTtBQUNiLElBQUEsU0FBOEIsa0NBQTlCLDhCQUE4QixFQUFBO0FBQ3hCLElBQUEsZUFBb0Msa0NBQXBDLG9DQUFvQyxFQUFBO0FBQ3BDLElBQUEsZUFBaUMsa0NBQWpDLGlDQUFpQyxFQUFBO0FBQ2hDLElBQUEsZ0JBQXFDLGtDQUFyQyxxQ0FBcUMsRUFBQTtBQUV4QyxJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQVFBLFdBQVcsR0FBZ0NDLFlBQWMsZUFBQSxDQUF6REQsV0FBVyxFQUFFRSxXQUFXLEdBQW1CRCxZQUFjLGVBQUEsQ0FBNUNDLFdBQVcsRUFBRUMsWUFBWSxHQUFLRixZQUFjLGVBQUEsQ0FBL0JFLFlBQVksQUFBb0I7QUFFbkQsSUFBQSxBQUFNQyx1QkFBdUIsaUJBQTdCOzs7YUFBTUEsdUJBQXVCOztRQUV4QyxJQUFNQyxZQUFZLEdBQUdDLFVBQVksYUFBQSxFQUMzQkMsZ0NBQWdDLEdBQUdQLFdBQVcsRUFDOUNRLGdDQUFnQyxHQUFHTixXQUFXLEVBQzlDTyxpQ0FBaUMsR0FBR04sWUFBWSxFQUNoRE8sZ0JBQWdCLEdBQUcsSUFBSUMsU0FBWSxRQUFBLENBQUNOLFlBQVksQ0FBQyxFQUNqRE8sNkJBQTZCLEdBQUcsSUFBSUMsZUFBa0IsUUFBQSxDQUFDTixnQ0FBZ0MsQ0FBQyxFQUN4Rk8sNkJBQTZCLEdBQUcsSUFBSUQsZUFBa0IsUUFBQSxDQUFDTCxnQ0FBZ0MsQ0FBQyxFQUN4Rk8sOEJBQThCLEdBQUcsSUFBSUYsZUFBa0IsUUFBQSxDQUFDSixpQ0FBaUMsQ0FBQyxFQUMxRk8sOENBQThDLEdBQUc7WUFDL0NKLDZCQUE2QjtZQUM3QkYsZ0JBQWdCO1NBQ2pCLEVBQ0RPLG1CQUFtQixHQUFHLElBQUlDLGdCQUFtQixRQUFBLENBQUNGLDhDQUE4QyxDQUFDLEVBQzdGRyw0QkFBNEIsR0FBRyxJQUFJQyxlQUFrQixRQUFBLENBQUNILG1CQUFtQixDQUFDLEVBQzFFSSxLQUFLLEdBQUc7WUFDTlAsNkJBQTZCO1lBQzdCSixnQkFBZ0I7WUFDaEJTLDRCQUE0QjtZQUM1QkosOEJBQThCO1NBQy9CLEFBQUM7aUNBRUZNLEtBQUs7OztDQUVkLENBekJvREMsV0FBVSxRQUFBLENBeUI5RDtrQkF6Qm9CbEIsdUJBQXVCIn0=