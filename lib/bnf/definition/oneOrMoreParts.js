'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OptionalPartPart = require('../../common/part/optionalPart'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var OneOrMorePartsDefinition = function (_Definition) {
  _inherits(OneOrMorePartsDefinition, _Definition);

  function OneOrMorePartsDefinition() {
    _classCallCheck(this, OneOrMorePartsDefinition);

    var partProductionName = 'part',
        plusTerminalSymbolContent = '+',
        plusTerminalSymbolNoWhitespace = true,
        lazyQuantifierProductionName = 'lazyQuantifier',
        partProductionNamePart = new ProductionNamePart(partProductionName),
        plusTerminalSymbolPart = new TerminalSymbolPart(plusTerminalSymbolContent, plusTerminalSymbolNoWhitespace),
        lazyQuantifierProductionNamePart = new ProductionNamePart(lazyQuantifierProductionName),
        optionalLazyQuantifierProductionNamePartPart = new OptionalPartPart(lazyQuantifierProductionNamePart),
        parts = [partProductionNamePart, plusTerminalSymbolPart, optionalLazyQuantifierProductionNamePartPart];

    return _possibleConstructorReturn(this, (OneOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(OneOrMorePartsDefinition)).call(this, parts));
  }

  return OneOrMorePartsDefinition;
}(Definition);

module.exports = OneOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJPbmVPck1vcmVQYXJ0c0RlZmluaXRpb24iLCJwYXJ0UHJvZHVjdGlvbk5hbWUiLCJwbHVzVGVybWluYWxTeW1ib2xDb250ZW50IiwicGx1c1Rlcm1pbmFsU3ltYm9sTm9XaGl0ZXNwYWNlIiwibGF6eVF1YW50aWZpZXJQcm9kdWN0aW9uTmFtZSIsInBhcnRQcm9kdWN0aW9uTmFtZVBhcnQiLCJwbHVzVGVybWluYWxTeW1ib2xQYXJ0IiwibGF6eVF1YW50aWZpZXJQcm9kdWN0aW9uTmFtZVBhcnQiLCJvcHRpb25hbExhenlRdWFudGlmaWVyUHJvZHVjdGlvbk5hbWVQYXJ0UGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLGdDQUFSLENBRHpCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLGtDQUFSLENBRjNCO0FBQUEsSUFHTUcscUJBQXFCSCxRQUFRLGtDQUFSLENBSDNCOztJQUtNSSx3Qjs7O0FBQ0osc0NBQWM7QUFBQTs7QUFDWixRQUFNQyxxQkFBcUIsTUFBM0I7QUFBQSxRQUNNQyw0QkFBNEIsR0FEbEM7QUFBQSxRQUVNQyxpQ0FBaUMsSUFGdkM7QUFBQSxRQUdNQywrQkFBK0IsZ0JBSHJDO0FBQUEsUUFJTUMseUJBQXlCLElBQUlOLGtCQUFKLENBQXVCRSxrQkFBdkIsQ0FKL0I7QUFBQSxRQUtNSyx5QkFBeUIsSUFBSVIsa0JBQUosQ0FBdUJJLHlCQUF2QixFQUFrREMsOEJBQWxELENBTC9CO0FBQUEsUUFNTUksbUNBQW1DLElBQUlSLGtCQUFKLENBQXVCSyw0QkFBdkIsQ0FOekM7QUFBQSxRQU9NSSwrQ0FBK0MsSUFBSVgsZ0JBQUosQ0FBcUJVLGdDQUFyQixDQVByRDtBQUFBLFFBUU1FLFFBQVEsQ0FDTkosc0JBRE0sRUFFTkMsc0JBRk0sRUFHTkUsNENBSE0sQ0FSZDs7QUFEWSwrSUFlTkMsS0FmTTtBQWdCYjs7O0VBakJvQ2QsVTs7QUFvQnZDZSxPQUFPQyxPQUFQLEdBQWlCWCx3QkFBakIiLCJmaWxlIjoib25lT3JNb3JlUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBwbHVzVGVybWluYWxTeW1ib2xDb250ZW50ID0gJysnLFxuICAgICAgICAgIHBsdXNUZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgbGF6eVF1YW50aWZpZXJQcm9kdWN0aW9uTmFtZSA9ICdsYXp5UXVhbnRpZmllcicsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBwbHVzVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChwbHVzVGVybWluYWxTeW1ib2xDb250ZW50LCBwbHVzVGVybWluYWxTeW1ib2xOb1doaXRlc3BhY2UpLFxuICAgICAgICAgIGxhenlRdWFudGlmaWVyUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChsYXp5UXVhbnRpZmllclByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBvcHRpb25hbExhenlRdWFudGlmaWVyUHJvZHVjdGlvbk5hbWVQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KGxhenlRdWFudGlmaWVyUHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBwbHVzVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxMYXp5UXVhbnRpZmllclByb2R1Y3Rpb25OYW1lUGFydFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNEZWZpbml0aW9uO1xuIl19