"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _definition = _interopRequireDefault(require("../definition"));

var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));

var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));

var _zeroOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/zeroOrMoreParts"));

var _sequenceOfParts = _interopRequireDefault(require("../part/nonTerminal/sequenceOfParts"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var verticalBar = _occamLexers.specialSymbols.verticalBar;

var DefinitionsDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(DefinitionsDefinition, _Definition);

  var _super = _createSuper(DefinitionsDefinition);

  function DefinitionsDefinition() {
    _classCallCheck(this, DefinitionsDefinition);

    var definitionRuleName = _ruleNames.DefinitionRuleName,
        verticalBarTerminalSymbolContent = verticalBar,
        definitionRuleNamePart = new _ruleName["default"](definitionRuleName),
        verticalBarTerminalSymbolPart = new _terminalSymbol["default"](verticalBarTerminalSymbolContent),
        verticalBarTerminalSymbolThenDefinitionRuleNameParts = [verticalBarTerminalSymbolPart, definitionRuleNamePart],
        sequenceOfPartsPart = new _sequenceOfParts["default"](verticalBarTerminalSymbolThenDefinitionRuleNameParts),
        zeroOrMoreSequenceOfPartsPart = new _zeroOrMoreParts["default"](sequenceOfPartsPart),
        parts = [definitionRuleNamePart, zeroOrMoreSequenceOfPartsPart];
    return _super.call(this, parts);
  }

  return DefinitionsDefinition;
}(_definition["default"]);

exports["default"] = DefinitionsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbInZlcnRpY2FsQmFyIiwic3BlY2lhbFN5bWJvbHMiLCJEZWZpbml0aW9uc0RlZmluaXRpb24iLCJkZWZpbml0aW9uUnVsZU5hbWUiLCJEZWZpbml0aW9uUnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsImRlZmluaXRpb25SdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuRGVmaW5pdGlvblJ1bGVOYW1lUGFydHMiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsInplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxXLEdBQWdCQywyQixDQUFoQkQsVzs7SUFFYUUscUI7Ozs7O0FBQ25CLG1DQUFjO0FBQUE7O0FBQ1osUUFBTUMsa0JBQWtCLEdBQUdDLDZCQUEzQjtBQUFBLFFBQ01DLGdDQUFnQyxHQUFHTCxXQUR6QztBQUFBLFFBRU1NLHNCQUFzQixHQUFHLElBQUlDLG9CQUFKLENBQWlCSixrQkFBakIsQ0FGL0I7QUFBQSxRQUdNSyw2QkFBNkIsR0FBRyxJQUFJQywwQkFBSixDQUF1QkosZ0NBQXZCLENBSHRDO0FBQUEsUUFJTUssb0RBQW9ELEdBQUcsQ0FDckRGLDZCQURxRCxFQUVyREYsc0JBRnFELENBSjdEO0FBQUEsUUFRTUssbUJBQW1CLEdBQUcsSUFBSUMsMkJBQUosQ0FBd0JGLG9EQUF4QixDQVI1QjtBQUFBLFFBU01HLDZCQUE2QixHQUFHLElBQUlDLDJCQUFKLENBQXdCSCxtQkFBeEIsQ0FUdEM7QUFBQSxRQVVNSSxLQUFLLEdBQUcsQ0FDTlQsc0JBRE0sRUFFTk8sNkJBRk0sQ0FWZDtBQURZLDZCQWdCTkUsS0FoQk07QUFpQmI7OztFQWxCZ0RDLHNCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvblJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHZlcnRpY2FsQmFyIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbnNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25SdWxlTmFtZSA9IERlZmluaXRpb25SdWxlTmFtZSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHZlcnRpY2FsQmFyLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRlZmluaXRpb25SdWxlTmFtZSksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlbkRlZmluaXRpb25SdWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBkZWZpbml0aW9uUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5EZWZpbml0aW9uUnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChzZXF1ZW5jZU9mUGFydHNQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25SdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdfQ==