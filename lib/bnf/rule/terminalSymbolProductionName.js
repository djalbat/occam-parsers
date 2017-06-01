'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ProductionNamePart = require('../part/productionName');

var TerminalSybmolProductionNameRule = function (_Rule) {
  _inherits(TerminalSybmolProductionNameRule, _Rule);

  function TerminalSybmolProductionNameRule() {
    _classCallCheck(this, TerminalSybmolProductionNameRule);

    var noWhitespace = false,
        terminalSymbolProductionName = 'terminalSymbol',
        terminalSymbolProductionNamePart = new ProductionNamePart(terminalSymbolProductionName, noWhitespace),
        parts = [terminalSymbolProductionNamePart];

    return _possibleConstructorReturn(this, (TerminalSybmolProductionNameRule.__proto__ || Object.getPrototypeOf(TerminalSybmolProductionNameRule)).call(this, parts));
  }

  return TerminalSybmolProductionNameRule;
}(Rule);

module.exports = TerminalSybmolProductionNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS90ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiVGVybWluYWxTeWJtb2xQcm9kdWN0aW9uTmFtZVJ1bGUiLCJub1doaXRlc3BhY2UiLCJ0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCOztJQUdNRSxnQzs7O0FBQ0osOENBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsK0JBQStCLGdCQURyQztBQUFBLFFBRU1DLG1DQUFtQyxJQUFJSixrQkFBSixDQUF1QkcsNEJBQXZCLEVBQXFERCxZQUFyRCxDQUZ6QztBQUFBLFFBR01HLFFBQVEsQ0FDTkQsZ0NBRE0sQ0FIZDs7QUFEWSwrSkFRTkMsS0FSTTtBQVNiOzs7RUFWNENQLEk7O0FBYS9DUSxPQUFPQyxPQUFQLEdBQWlCTixnQ0FBakIiLCJmaWxlIjoidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgVGVybWluYWxTeWJtb2xQcm9kdWN0aW9uTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZSA9ICd0ZXJtaW5hbFN5bWJvbCcsXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5Ym1vbFByb2R1Y3Rpb25OYW1lUnVsZTtcbiJdfQ==