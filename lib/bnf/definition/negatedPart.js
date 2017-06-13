'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var NegatedPartDefinition = function (_Definition) {
  _inherits(NegatedPartDefinition, _Definition);

  function NegatedPartDefinition() {
    _classCallCheck(this, NegatedPartDefinition);

    var partProductionName = 'part',
        partProductionNameNoWhitespace = true,
        exclamationMarkTerminalSymbolContent = '!',
        exclamationMarkTerminalSymbolPart = new TerminalSymbolPart(exclamationMarkTerminalSymbolContent),
        partProductionNamePart = new ProductionNamePart(partProductionName, partProductionNameNoWhitespace),
        parts = [exclamationMarkTerminalSymbolPart, partProductionNamePart];

    return _possibleConstructorReturn(this, (NegatedPartDefinition.__proto__ || Object.getPrototypeOf(NegatedPartDefinition)).call(this, parts));
  }

  return NegatedPartDefinition;
}(Definition);

module.exports = NegatedPartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9uZWdhdGVkUGFydC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIk5lZ2F0ZWRQYXJ0RGVmaW5pdGlvbiIsInBhcnRQcm9kdWN0aW9uTmFtZSIsInBhcnRQcm9kdWN0aW9uTmFtZU5vV2hpdGVzcGFjZSIsImV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsImV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRQcm9kdWN0aW9uTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxrQ0FBUixDQUQzQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSxrQ0FBUixDQUYzQjs7SUFJTUcscUI7OztBQUNKLG1DQUFjO0FBQUE7O0FBQ1osUUFBTUMscUJBQXFCLE1BQTNCO0FBQUEsUUFDTUMsaUNBQWlDLElBRHZDO0FBQUEsUUFFTUMsdUNBQXVDLEdBRjdDO0FBQUEsUUFHTUMsb0NBQW9DLElBQUlOLGtCQUFKLENBQXVCSyxvQ0FBdkIsQ0FIMUM7QUFBQSxRQUlNRSx5QkFBeUIsSUFBSU4sa0JBQUosQ0FBdUJFLGtCQUF2QixFQUEyQ0MsOEJBQTNDLENBSi9CO0FBQUEsUUFLTUksUUFBUSxDQUNORixpQ0FETSxFQUVOQyxzQkFGTSxDQUxkOztBQURZLHlJQVdOQyxLQVhNO0FBWWI7OztFQWJpQ1YsVTs7QUFnQnBDVyxPQUFPQyxPQUFQLEdBQWlCUixxQkFBakIiLCJmaWxlIjoibmVnYXRlZFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgTmVnYXRlZFBhcnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVOb1doaXRlc3BhY2UgPSB0cnVlLFxuICAgICAgICAgIGV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9ICchJyxcbiAgICAgICAgICBleGNsYW1hdGlvbk1hcmtUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lLCBwYXJ0UHJvZHVjdGlvbk5hbWVOb1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZXhjbGFtYXRpb25NYXJrVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOZWdhdGVkUGFydERlZmluaXRpb247XG4iXX0=