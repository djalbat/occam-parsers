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
    GroupOfPartsPart = require("../part/nonTerminal/groupOfParts"),
    OneOrMorePartsPart = require("../part/nonTerminal/oneOrMoreParts"),
    TerminalSymbolPart = require("../part/terminal/terminalSymbol");

var PartRuleName = ruleNames.PartRuleName,
    specialSymbols = lexers.specialSymbols,
    verticalBar = specialSymbols.verticalBar,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket;

var ChoiceOfPartsDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(ChoiceOfPartsDefinition, _Definition);

  function ChoiceOfPartsDefinition() {
    _classCallCheck(this, ChoiceOfPartsDefinition);

    var partRuleName = PartRuleName,
        verticalBarTerminalSymbolContent = verticalBar,
        ///
    openBracketTerminalSymbolContent = openBracket,
        ///
    closeBracketTerminalSymbolContent = closeBracket,
        ///
    partRuleNamePart = new RuleNamePart(partRuleName),
        verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
        openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
        closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
        verticalBarTerminalSymbolThenPartRuleNameParts = [verticalBarTerminalSymbolPart, partRuleNamePart],
        groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenPartRuleNameParts),
        oneOrMoreGroupOfPartsPart = new OneOrMorePartsPart(groupOfPartsPart),
        parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMoreGroupOfPartsPart, closeBracketTerminalSymbolPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsDefinition).call(this, parts));
  }

  return ChoiceOfPartsDefinition;
}(Definition);

module.exports = ChoiceOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJHcm91cE9mUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUGFydFJ1bGVOYW1lIiwic3BlY2lhbFN5bWJvbHMiLCJ2ZXJ0aWNhbEJhciIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJwYXJ0UnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzIiwiZ3JvdXBPZlBhcnRzUGFydCIsIm9uZU9yTW9yZUdyb3VwT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUUsVUFBVSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUQxQjtBQUFBLElBRU1HLFlBQVksR0FBR0gsT0FBTyxDQUFDLDhCQUFELENBRjVCO0FBQUEsSUFHTUksZ0JBQWdCLEdBQUdKLE9BQU8sQ0FBQyxrQ0FBRCxDQUhoQztBQUFBLElBSU1LLGtCQUFrQixHQUFHTCxPQUFPLENBQUMsb0NBQUQsQ0FKbEM7QUFBQSxJQUtNTSxrQkFBa0IsR0FBR04sT0FBTyxDQUFDLGlDQUFELENBTGxDOztBQU9NLElBQUVPLFlBQUYsR0FBbUJOLFNBQW5CLENBQUVNLFlBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCVCxNQURyQixDQUNFUyxjQURGO0FBQUEsSUFFRUMsV0FGRixHQUU2Q0QsY0FGN0MsQ0FFRUMsV0FGRjtBQUFBLElBRWVDLFdBRmYsR0FFNkNGLGNBRjdDLENBRWVFLFdBRmY7QUFBQSxJQUU0QkMsWUFGNUIsR0FFNkNILGNBRjdDLENBRTRCRyxZQUY1Qjs7SUFJQUMsdUI7OztBQUNKLHFDQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxHQUFHTixZQUFyQjtBQUFBLFFBQ01PLGdDQUFnQyxHQUFHTCxXQUR6QztBQUFBLFFBQ3NEO0FBQ2hETSxJQUFBQSxnQ0FBZ0MsR0FBR0wsV0FGekM7QUFBQSxRQUVzRDtBQUNoRE0sSUFBQUEsaUNBQWlDLEdBQUdMLFlBSDFDO0FBQUEsUUFHd0Q7QUFDbERNLElBQUFBLGdCQUFnQixHQUFHLElBQUlkLFlBQUosQ0FBaUJVLFlBQWpCLENBSnpCO0FBQUEsUUFLTUssNkJBQTZCLEdBQUcsSUFBSVosa0JBQUosQ0FBdUJRLGdDQUF2QixDQUx0QztBQUFBLFFBTU1LLDZCQUE2QixHQUFHLElBQUliLGtCQUFKLENBQXVCUyxnQ0FBdkIsQ0FOdEM7QUFBQSxRQU9NSyw4QkFBOEIsR0FBRyxJQUFJZCxrQkFBSixDQUF1QlUsaUNBQXZCLENBUHZDO0FBQUEsUUFRTUssOENBQThDLEdBQUcsQ0FDL0NILDZCQUQrQyxFQUUvQ0QsZ0JBRitDLENBUnZEO0FBQUEsUUFZTUssZ0JBQWdCLEdBQUcsSUFBSWxCLGdCQUFKLENBQXFCaUIsOENBQXJCLENBWnpCO0FBQUEsUUFhTUUseUJBQXlCLEdBQUcsSUFBSWxCLGtCQUFKLENBQXVCaUIsZ0JBQXZCLENBYmxDO0FBQUEsUUFjTUUsS0FBSyxHQUFHLENBQ05MLDZCQURNLEVBRU5GLGdCQUZNLEVBR05NLHlCQUhNLEVBSU5ILDhCQUpNLENBZGQ7QUFEWSxnR0FzQk5JLEtBdEJNO0FBdUJiOzs7RUF4Qm1DdEIsVTs7QUEyQnRDdUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCx1QkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZShcIm9jY2FtLWxleGVyc1wiKTtcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZShcIi4uL3J1bGVOYW1lc1wiKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvblwiKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCIpLFxuICAgICAgR3JvdXBPZlBhcnRzUGFydCA9IHJlcXVpcmUoXCIuLi9wYXJ0L25vblRlcm1pbmFsL2dyb3VwT2ZQYXJ0c1wiKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCIpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZShcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIik7XG5cbmNvbnN0IHsgUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IHZlcnRpY2FsQmFyLCBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50ID0gdmVydGljYWxCYXIsIC8vL1xuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsIC8vL1xuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCwgLy8vXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuUGFydFJ1bGVOYW1lUGFydHMgPSBbXG4gICAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1BhcnQgPSBuZXcgR3JvdXBPZlBhcnRzUGFydCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVHcm91cE9mUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChncm91cE9mUGFydHNQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZUdyb3VwT2ZQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==