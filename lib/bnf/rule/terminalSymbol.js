'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    TerminalSymbolNode = require('../node/terminalSymbol'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var types = lexers.types,
    stringLiteralType = types.stringLiteralType,
    TerminalSymbolRuleName = ruleNames.TerminalSymbolRuleName;

var TerminalSymbolRule = function (_Rule) {
      _inherits(TerminalSymbolRule, _Rule);

      function TerminalSymbolRule() {
            _classCallCheck(this, TerminalSymbolRule);

            var stringLiteralSignificantTokenType = stringLiteralType,
                ///
            stringLiteralSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringLiteralSignificantTokenType),
                name = TerminalSymbolRuleName,
                definitions = [stringLiteralSignificantTokenTypeDefinition],
                Node = TerminalSymbolNode;

            return _possibleConstructorReturn(this, (TerminalSymbolRule.__proto__ || Object.getPrototypeOf(TerminalSymbolRule)).call(this, name, definitions, Node));
      }

      return TerminalSymbolRule;
}(Rule);

module.exports = TerminalSymbolRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZSIsInJ1bGVOYW1lcyIsIlRlcm1pbmFsU3ltYm9sTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsInR5cGVzIiwic3RyaW5nTGl0ZXJhbFR5cGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIiwiVGVybWluYWxTeW1ib2xSdWxlIiwic3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlIiwic3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUYzQjtBQUFBLElBR01JLGlDQUFpQ0osUUFBUSxvQ0FBUixDQUh2Qzs7QUFLTSxJQUFFSyxLQUFGLEdBQVlOLE1BQVosQ0FBRU0sS0FBRjtBQUFBLElBQ0VDLGlCQURGLEdBQ3dCRCxLQUR4QixDQUNFQyxpQkFERjtBQUFBLElBRUVDLHNCQUZGLEdBRTZCTCxTQUY3QixDQUVFSyxzQkFGRjs7SUFJQUMsa0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLG9DQUFvQ0gsaUJBQTFDO0FBQUEsZ0JBQThEO0FBQ3hESSwwREFBOEMsSUFBSU4sOEJBQUosQ0FBbUNLLGlDQUFuQyxDQURwRDtBQUFBLGdCQUVNRSxPQUFPSixzQkFGYjtBQUFBLGdCQUdNSyxjQUFjLENBQ1pGLDJDQURZLENBSHBCO0FBQUEsZ0JBTU1HLE9BQU9WLGtCQU5iOztBQURZLDJJQVNOUSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYOEJaLEk7O0FBY2pDYSxPQUFPQyxPQUFQLEdBQWlCUCxrQkFBakIiLCJmaWxlIjoidGVybWluYWxTeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNvbnN0IHsgdHlwZXMgfSA9IGxleGVycyxcbiAgICAgIHsgc3RyaW5nTGl0ZXJhbFR5cGUgfSA9IHR5cGVzLFxuICAgICAgeyBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzdHJpbmdMaXRlcmFsVHlwZSwgIC8vL1xuICAgICAgICAgIHN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKHN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9IFRlcm1pbmFsU3ltYm9sUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gVGVybWluYWxTeW1ib2xOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFJ1bGU7XG4iXX0=