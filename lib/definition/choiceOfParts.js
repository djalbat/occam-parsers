"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsDefinition;
    }
});
var _occamLexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../definition"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _oneOrMoreParts = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
var _terminalSymbol = /*#__PURE__*/ _interopRequireDefault(require("../part/terminal/terminalSymbol"));
var _sequenceOfParts = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/sequenceOfParts"));
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
var verticalBar = _occamLexers.specialSymbols.verticalBar, openBracket = _occamLexers.specialSymbols.openBracket, closeBracket = _occamLexers.specialSymbols.closeBracket;
var ChoiceOfPartsDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ChoiceOfPartsDefinition, Definition);
    var _super = _createSuper(ChoiceOfPartsDefinition);
    function ChoiceOfPartsDefinition() {
        _classCallCheck(this, ChoiceOfPartsDefinition);
        var verticalBarTerminalSymbolContent = verticalBar, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(_ruleNames.partRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), verticalBarTerminalSymbolThenPartRuleNameParts = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvc2VxdWVuY2VPZlBhcnRzXCI7XG5cbmltcG9ydCB7IHBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB2ZXJ0aWNhbEJhciwgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2ljZU9mUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50ID0gdmVydGljYWxCYXIsIC8vL1xuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCwgLy8vXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuUGFydFJ1bGVOYW1lUGFydHMgPSBbXG4gICAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChzZXF1ZW5jZU9mUGFydHNQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJ2ZXJ0aWNhbEJhciIsInNwZWNpYWxTeW1ib2xzIiwib3BlbkJyYWNrZXQiLCJjbG9zZUJyYWNrZXQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsInBhcnRSdWxlTmFtZSIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJvbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFydHMiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFjUUEsdUJBQXVCOzs7MkJBWmIsY0FBYzsrREFFdEIsZUFBZTs2REFDYiw4QkFBOEI7bUVBQ3hCLG9DQUFvQzttRUFDcEMsaUNBQWlDO29FQUNoQyxxQ0FBcUM7eUJBRXhDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQVFDLFdBQVcsR0FBZ0NDLFlBQWMsZUFBQSxDQUF6REQsV0FBVyxFQUFFRSxXQUFXLEdBQW1CRCxZQUFjLGVBQUEsQ0FBNUNDLFdBQVcsRUFBRUMsWUFBWSxHQUFLRixZQUFjLGVBQUEsQ0FBL0JFLFlBQVksQUFBb0I7QUFFbkQsSUFBQSxBQUFNSix1QkFBdUIsaUJBQTdCOzs7YUFBTUEsdUJBQXVCOztRQUV4QyxJQUFNSyxnQ0FBZ0MsR0FBR0osV0FBVyxFQUM5Q0ssZ0NBQWdDLEdBQUdILFdBQVcsRUFDOUNJLGlDQUFpQyxHQUFHSCxZQUFZLEVBQ2hESSxnQkFBZ0IsR0FBRyxJQUFJQyxTQUFZLFFBQUEsQ0FBQ0MsVUFBWSxhQUFBLENBQUMsRUFDakRDLDZCQUE2QixHQUFHLElBQUlDLGVBQWtCLFFBQUEsQ0FBQ1AsZ0NBQWdDLENBQUMsRUFDeEZRLDZCQUE2QixHQUFHLElBQUlELGVBQWtCLFFBQUEsQ0FBQ04sZ0NBQWdDLENBQUMsRUFDeEZRLDhCQUE4QixHQUFHLElBQUlGLGVBQWtCLFFBQUEsQ0FBQ0wsaUNBQWlDLENBQUMsRUFDMUZRLDhDQUE4QyxHQUFHO1lBQy9DSiw2QkFBNkI7WUFDN0JILGdCQUFnQjtTQUNqQixFQUNEUSxtQkFBbUIsR0FBRyxJQUFJQyxnQkFBbUIsUUFBQSxDQUFDRiw4Q0FBOEMsQ0FBQyxFQUM3RkcsNEJBQTRCLEdBQUcsSUFBSUMsZUFBa0IsUUFBQSxDQUFDSCxtQkFBbUIsQ0FBQyxFQUMxRUksS0FBSyxHQUFHO1lBQ05QLDZCQUE2QjtZQUM3QkwsZ0JBQWdCO1lBQ2hCVSw0QkFBNEI7WUFDNUJKLDhCQUE4QjtTQUMvQixBQUFDO2lDQUVGTSxLQUFLOzs7Q0FFZCxDQXhCb0RDLFdBQVUsUUFBQSxDQXdCOUQifQ==