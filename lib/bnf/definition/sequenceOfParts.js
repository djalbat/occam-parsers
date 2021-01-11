"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _definition = _interopRequireDefault(require("../definition"));

var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));

var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));

var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var openBracket = _occamLexers.specialSymbols.openBracket,
    closeBracket = _occamLexers.specialSymbols.closeBracket;

var SequenceOfPartsDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(SequenceOfPartsDefinition, _Definition);

  var _super = _createSuper(SequenceOfPartsDefinition);

  function SequenceOfPartsDefinition() {
    _classCallCheck(this, SequenceOfPartsDefinition);

    var partRuleName = _ruleNames.PartRuleName,
        openBracketTerminalSymbolContent = openBracket,
        ///
    closeBracketTerminalSymbolContent = closeBracket,
        ///
    partRuleNamePart = new _ruleName["default"](partRuleName),
        openBracketTerminalSymbolPart = new _terminalSymbol["default"](openBracketTerminalSymbolContent),
        closeBracketTerminalSymbolPart = new _terminalSymbol["default"](closeBracketTerminalSymbolContent),
        oneOrMorePartRuleNamePartsPart = new _oneOrMoreParts["default"](partRuleNamePart),
        parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart];
    return _super.call(this, parts);
  }

  return SequenceOfPartsDefinition;
}(_definition["default"]);

exports["default"] = SequenceOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJvcGVuQnJhY2tldCIsInNwZWNpYWxTeW1ib2xzIiwiY2xvc2VCcmFja2V0IiwiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsInBhcnRSdWxlTmFtZSIsIlBhcnRSdWxlTmFtZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lUGFydCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwib25lT3JNb3JlUGFydFJ1bGVOYW1lUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFydHMiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFcsR0FBOEJDLDJCLENBQTlCRCxXO0lBQWFFLFksR0FBaUJELDJCLENBQWpCQyxZOztJQUVBQyx5Qjs7Ozs7QUFDbkIsdUNBQWM7QUFBQTs7QUFDWixRQUFNQyxZQUFZLEdBQUdDLHVCQUFyQjtBQUFBLFFBQ01DLGdDQUFnQyxHQUFHTixXQUR6QztBQUFBLFFBQ3NEO0FBQ2hETyxJQUFBQSxpQ0FBaUMsR0FBR0wsWUFGMUM7QUFBQSxRQUV3RDtBQUNsRE0sSUFBQUEsZ0JBQWdCLEdBQUcsSUFBSUMsb0JBQUosQ0FBaUJMLFlBQWpCLENBSHpCO0FBQUEsUUFJTU0sNkJBQTZCLEdBQUcsSUFBSUMsMEJBQUosQ0FBdUJMLGdDQUF2QixDQUp0QztBQUFBLFFBS01NLDhCQUE4QixHQUFHLElBQUlELDBCQUFKLENBQXVCSixpQ0FBdkIsQ0FMdkM7QUFBQSxRQU1NTSw4QkFBOEIsR0FBRyxJQUFJQywwQkFBSixDQUF1Qk4sZ0JBQXZCLENBTnZDO0FBQUEsUUFPTU8sS0FBSyxHQUFHLENBQ05MLDZCQURNLEVBRU5GLGdCQUZNLEVBR05LLDhCQUhNLEVBSU5ELDhCQUpNLENBUGQ7QUFEWSw2QkFlTkcsS0FmTTtBQWdCYjs7O0VBakJvREMsc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IFBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCwgLy8vXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gY2xvc2VCcmFja2V0LCAvLy9cbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydFJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0UnVsZU5hbWVQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdfQ==