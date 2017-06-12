'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ProductionNamePart = require('../../common/part/productionName'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol');

var RightRecursiveOptionalPartDefinition = function (_Definition) {
  _inherits(RightRecursiveOptionalPartDefinition, _Definition);

  function RightRecursiveOptionalPartDefinition() {
    _classCallCheck(this, RightRecursiveOptionalPartDefinition);

    var noWhitespace = true,
        questionMarkTerminalSymbolContent = '?',
        rightRecursiveOptionalPartProductionName = 'rightRecursiveOptionalPart',
        questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, noWhitespace),
        rightRecursiveOptionalPartProductionNamePart = new ProductionNamePart(rightRecursiveOptionalPartProductionName),
        parts = [questionMarkTerminalSymbolPart, rightRecursiveOptionalPartProductionNamePart];

    return _possibleConstructorReturn(this, (RightRecursiveOptionalPartDefinition.__proto__ || Object.getPrototypeOf(RightRecursiveOptionalPartDefinition)).call(this, parts));
  }

  return RightRecursiveOptionalPartDefinition;
}(Definition);

module.exports = RightRecursiveOptionalPartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZU9wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlJpZ2h0UmVjdXJzaXZlT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZSIsInF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsInJpZ2h0UmVjdXJzaXZlT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWUiLCJxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbFBhcnQiLCJyaWdodFJlY3Vyc2l2ZU9wdGlvbmFsUGFydFByb2R1Y3Rpb25OYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtDQUFSLENBRDNCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLGtDQUFSLENBRjNCOztJQUlNRyxvQzs7O0FBQ0osa0RBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLElBQXJCO0FBQUEsUUFDTUMsb0NBQW9DLEdBRDFDO0FBQUEsUUFFTUMsMkNBQTJDLDRCQUZqRDtBQUFBLFFBR01DLGlDQUFpQyxJQUFJTCxrQkFBSixDQUF1QkcsaUNBQXZCLEVBQTBERCxZQUExRCxDQUh2QztBQUFBLFFBSU1JLCtDQUErQyxJQUFJUCxrQkFBSixDQUF1Qkssd0NBQXZCLENBSnJEO0FBQUEsUUFLTUcsUUFBUSxDQUNORiw4QkFETSxFQUVOQyw0Q0FGTSxDQUxkOztBQURZLHVLQVdOQyxLQVhNO0FBWWI7OztFQWJnRFYsVTs7QUFnQm5EVyxPQUFPQyxPQUFQLEdBQWlCUixvQ0FBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgcXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50ID0gJz8nLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWUgPSAncmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnQnLFxuICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQocXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChyaWdodFJlY3Vyc2l2ZU9wdGlvbmFsUGFydFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnREZWZpbml0aW9uO1xuIl19