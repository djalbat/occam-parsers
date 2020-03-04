'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers');

var ruleNames = require('../ruleNames'),
    Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName'),
    GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJHcm91cE9mUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUGFydFJ1bGVOYW1lIiwic3BlY2lhbFN5bWJvbHMiLCJ2ZXJ0aWNhbEJhciIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJwYXJ0UnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzIiwiZ3JvdXBPZlBhcnRzUGFydCIsIm9uZU9yTW9yZUdyb3VwT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUUsVUFBVSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUQxQjtBQUFBLElBRU1HLFlBQVksR0FBR0gsT0FBTyxDQUFDLDhCQUFELENBRjVCO0FBQUEsSUFHTUksZ0JBQWdCLEdBQUdKLE9BQU8sQ0FBQyxrQ0FBRCxDQUhoQztBQUFBLElBSU1LLGtCQUFrQixHQUFHTCxPQUFPLENBQUMsb0NBQUQsQ0FKbEM7QUFBQSxJQUtNTSxrQkFBa0IsR0FBR04sT0FBTyxDQUFDLGlDQUFELENBTGxDOztBQU9NLElBQUVPLFlBQUYsR0FBbUJOLFNBQW5CLENBQUVNLFlBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCVCxNQURyQixDQUNFUyxjQURGO0FBQUEsSUFFRUMsV0FGRixHQUU2Q0QsY0FGN0MsQ0FFRUMsV0FGRjtBQUFBLElBRWVDLFdBRmYsR0FFNkNGLGNBRjdDLENBRWVFLFdBRmY7QUFBQSxJQUU0QkMsWUFGNUIsR0FFNkNILGNBRjdDLENBRTRCRyxZQUY1Qjs7SUFJQUMsdUI7OztBQUNKLHFDQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxHQUFHTixZQUFyQjtBQUFBLFFBQ01PLGdDQUFnQyxHQUFHTCxXQUR6QztBQUFBLFFBQ3NEO0FBQ2hETSxJQUFBQSxnQ0FBZ0MsR0FBR0wsV0FGekM7QUFBQSxRQUVzRDtBQUNoRE0sSUFBQUEsaUNBQWlDLEdBQUdMLFlBSDFDO0FBQUEsUUFHd0Q7QUFDbERNLElBQUFBLGdCQUFnQixHQUFHLElBQUlkLFlBQUosQ0FBaUJVLFlBQWpCLENBSnpCO0FBQUEsUUFLTUssNkJBQTZCLEdBQUcsSUFBSVosa0JBQUosQ0FBdUJRLGdDQUF2QixDQUx0QztBQUFBLFFBTU1LLDZCQUE2QixHQUFHLElBQUliLGtCQUFKLENBQXVCUyxnQ0FBdkIsQ0FOdEM7QUFBQSxRQU9NSyw4QkFBOEIsR0FBRyxJQUFJZCxrQkFBSixDQUF1QlUsaUNBQXZCLENBUHZDO0FBQUEsUUFRTUssOENBQThDLEdBQUcsQ0FDL0NILDZCQUQrQyxFQUUvQ0QsZ0JBRitDLENBUnZEO0FBQUEsUUFZTUssZ0JBQWdCLEdBQUcsSUFBSWxCLGdCQUFKLENBQXFCaUIsOENBQXJCLENBWnpCO0FBQUEsUUFhTUUseUJBQXlCLEdBQUcsSUFBSWxCLGtCQUFKLENBQXVCaUIsZ0JBQXZCLENBYmxDO0FBQUEsUUFjTUUsS0FBSyxHQUFHLENBQ05MLDZCQURNLEVBRU5GLGdCQUZNLEVBR05NLHlCQUhNLEVBSU5ILDhCQUpNLENBZGQ7QUFEWSxnR0FzQk5JLEtBdEJNO0FBdUJiOzs7RUF4Qm1DdEIsVTs7QUEyQnRDdUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCx1QkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBHcm91cE9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ncm91cE9mUGFydHMnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgdmVydGljYWxCYXIsIG9wZW5CcmFja2V0LCBjbG9zZUJyYWNrZXQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWUgPSBQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB2ZXJ0aWNhbEJhciwgLy8vXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCwgLy8vXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gY2xvc2VCcmFja2V0LCAvLy9cbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5QYXJ0UnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUGFydCA9IG5ldyBHcm91cE9mUGFydHNQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuUGFydFJ1bGVOYW1lUGFydHMpLFxuICAgICAgICAgIG9uZU9yTW9yZUdyb3VwT2ZQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGdyb3VwT2ZQYXJ0c1BhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgb25lT3JNb3JlR3JvdXBPZlBhcnRzUGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNEZWZpbml0aW9uO1xuIl19