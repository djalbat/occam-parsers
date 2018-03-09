'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    TerminalSymbolNode = require('../node/terminalSymbol'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var TerminalSymbolRuleName = ruleNames.TerminalSymbolRuleName;

var TerminalSymbolRule = function (_Rule) {
  _inherits(TerminalSymbolRule, _Rule);

  function TerminalSymbolRule() {
    _classCallCheck(this, TerminalSymbolRule);

    var stringSignificantTokenType = 'string',
        stringSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringSignificantTokenType),
        name = TerminalSymbolRuleName,
        definitions = [stringSignificantTokenTypeDefinition],
        Node = TerminalSymbolNode;

    return _possibleConstructorReturn(this, (TerminalSymbolRule.__proto__ || Object.getPrototypeOf(TerminalSymbolRule)).call(this, name, definitions, Node));
  }

  return TerminalSymbolRule;
}(Rule);

module.exports = TerminalSymbolRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlRlcm1pbmFsU3ltYm9sTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZSIsInN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLFlBQVlELFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjtBQUFBLElBR01HLGlDQUFpQ0gsUUFBUSxvQ0FBUixDQUh2Qzs7SUFLUUksc0IsR0FBMkJILFMsQ0FBM0JHLHNCOztJQUVGQyxrQjs7O0FBQ0osZ0NBQWM7QUFBQTs7QUFDWixRQUFNQyw2QkFBNkIsUUFBbkM7QUFBQSxRQUNNQyx1Q0FBdUMsSUFBSUosOEJBQUosQ0FBbUNHLDBCQUFuQyxDQUQ3QztBQUFBLFFBRU1FLE9BQU9KLHNCQUZiO0FBQUEsUUFHTUssY0FBYyxDQUNaRixvQ0FEWSxDQUhwQjtBQUFBLFFBTU1HLE9BQU9SLGtCQU5iOztBQURZLG1JQVNOTSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYOEJYLEk7O0FBY2pDWSxPQUFPQyxPQUFQLEdBQWlCUCxrQkFBakIiLCJmaWxlIjoidGVybWluYWxTeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY29uc3QgeyBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZSA9ICdzdHJpbmcnLFxuICAgICAgICAgIHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24oc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gVGVybWluYWxTeW1ib2xOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFJ1bGU7XG4iXX0=