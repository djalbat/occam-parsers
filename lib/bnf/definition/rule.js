"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var ruleNames = require("../ruleNames"),
    Definition = require("../definition"),
    RuleNamePart = require("../part/nonTerminal/ruleName"),
    TerminalSymbolPart = require("../part/terminal/terminalSymbol");

var specialSymbols = lexers.specialSymbols,
    separator = specialSymbols.separator,
    terminator = specialSymbols.terminator,
    NameRuleName = ruleNames.NameRuleName,
    DefinitionsRuleName = ruleNames.DefinitionsRuleName;

var RuleDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RuleDefinition, _Definition);

  function RuleDefinition() {
    _classCallCheck(this, RuleDefinition);

    var separatorTerminalSymbolContent = separator,
        terminatorTerminalSymbolContent = terminator,
        nameRuleName = NameRuleName,
        definitionsRuleName = DefinitionsRuleName,
        nameRuleNamePart = new RuleNamePart(nameRuleName),
        separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
        definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
        terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
        parts = [nameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(RuleDefinition).call(this, parts));
  }

  return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJzcGVjaWFsU3ltYm9scyIsInNlcGFyYXRvciIsInRlcm1pbmF0b3IiLCJOYW1lUnVsZU5hbWUiLCJEZWZpbml0aW9uc1J1bGVOYW1lIiwiUnVsZURlZmluaXRpb24iLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwibmFtZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnNSdWxlTmFtZSIsIm5hbWVSdWxlTmFtZVBhcnQiLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJkZWZpbml0aW9uc1J1bGVOYW1lUGFydCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUUsVUFBVSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUQxQjtBQUFBLElBRU1HLFlBQVksR0FBR0gsT0FBTyxDQUFDLDhCQUFELENBRjVCO0FBQUEsSUFHTUksa0JBQWtCLEdBQUdKLE9BQU8sQ0FBQyxpQ0FBRCxDQUhsQzs7QUFLTSxJQUFFSyxjQUFGLEdBQXFCTixNQUFyQixDQUFFTSxjQUFGO0FBQUEsSUFDRUMsU0FERixHQUM0QkQsY0FENUIsQ0FDRUMsU0FERjtBQUFBLElBQ2FDLFVBRGIsR0FDNEJGLGNBRDVCLENBQ2FFLFVBRGI7QUFBQSxJQUVFQyxZQUZGLEdBRXdDUCxTQUZ4QyxDQUVFTyxZQUZGO0FBQUEsSUFFZ0JDLG1CQUZoQixHQUV3Q1IsU0FGeEMsQ0FFZ0JRLG1CQUZoQjs7SUFJQUMsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyw4QkFBOEIsR0FBR0wsU0FBdkM7QUFBQSxRQUNNTSwrQkFBK0IsR0FBR0wsVUFEeEM7QUFBQSxRQUVNTSxZQUFZLEdBQUdMLFlBRnJCO0FBQUEsUUFHTU0sbUJBQW1CLEdBQUdMLG1CQUg1QjtBQUFBLFFBSU1NLGdCQUFnQixHQUFHLElBQUlaLFlBQUosQ0FBaUJVLFlBQWpCLENBSnpCO0FBQUEsUUFLTUcsMkJBQTJCLEdBQUcsSUFBSVosa0JBQUosQ0FBdUJPLDhCQUF2QixDQUxwQztBQUFBLFFBTU1NLHVCQUF1QixHQUFHLElBQUlkLFlBQUosQ0FBaUJXLG1CQUFqQixDQU5oQztBQUFBLFFBT01JLDRCQUE0QixHQUFHLElBQUlkLGtCQUFKLENBQXVCUSwrQkFBdkIsQ0FQckM7QUFBQSxRQVFNTyxLQUFLLEdBQUcsQ0FDTkosZ0JBRE0sRUFFTkMsMkJBRk0sRUFHTkMsdUJBSE0sRUFJTkMsNEJBSk0sQ0FSZDtBQURZLHVGQWdCTkMsS0FoQk07QUFpQmI7OztFQWxCMEJqQixVOztBQXFCN0JrQixNQUFNLENBQUNDLE9BQVAsR0FBaUJYLGNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIik7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoXCIuLi9ydWxlTmFtZXNcIiksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb25cIiksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCIpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IHNlcGFyYXRvciwgdGVybWluYXRvciB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IE5hbWVSdWxlTmFtZSwgRGVmaW5pdGlvbnNSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBzZXBhcmF0b3IsXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHRlcm1pbmF0b3IsXG4gICAgICAgICAgbmFtZVJ1bGVOYW1lID0gTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWUgPSBEZWZpbml0aW9uc1J1bGVOYW1lLFxuICAgICAgICAgIG5hbWVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KG5hbWVSdWxlTmFtZSksXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChkZWZpbml0aW9uc1J1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5hbWVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZURlZmluaXRpb247XG4iXX0=