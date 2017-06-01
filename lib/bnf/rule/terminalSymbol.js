'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    SignificantTokenTypePart = require('../part/significantTokenType');

var TerminalSymbolRule = function (_Rule) {
  _inherits(TerminalSymbolRule, _Rule);

  function TerminalSymbolRule() {
    _classCallCheck(this, TerminalSymbolRule);

    var noWhitespace = false,
        stringSignificantTokenType = 'string',
        stringSignificantTokenTypePart = new SignificantTokenTypePart(stringSignificantTokenType, noWhitespace),
        parts = [stringSignificantTokenTypePart];

    return _possibleConstructorReturn(this, (TerminalSymbolRule.__proto__ || Object.getPrototypeOf(TerminalSymbolRule)).call(this, parts));
  }

  return TerminalSymbolRule;
}(Rule);

module.exports = TerminalSymbolRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vV2hpdGVzcGFjZSIsInN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlIiwic3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLDJCQUEyQkQsUUFBUSw4QkFBUixDQURqQzs7SUFHTUUsa0I7OztBQUNKLGdDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLDZCQUE2QixRQURuQztBQUFBLFFBRU1DLGlDQUFpQyxJQUFJSix3QkFBSixDQUE2QkcsMEJBQTdCLEVBQXlERCxZQUF6RCxDQUZ2QztBQUFBLFFBR01HLFFBQVEsQ0FDTkQsOEJBRE0sQ0FIZDs7QUFEWSxtSUFRTkMsS0FSTTtBQVNiOzs7RUFWOEJQLEk7O0FBYWpDUSxPQUFPQyxPQUFQLEdBQWlCTixrQkFBakIiLCJmaWxlIjoidGVybWluYWxTeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZSA9ICdzdHJpbmcnLFxuICAgICAgICAgIHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZVBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFJ1bGU7XG4iXX0=