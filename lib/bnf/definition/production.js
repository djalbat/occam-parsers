'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var ProductionDefinition = function (_Definition) {
  _inherits(ProductionDefinition, _Definition);

  function ProductionDefinition() {
    _classCallCheck(this, ProductionDefinition);

    var separatorTerminalSymbolContent = '::=',
        terminatorTerminalSymbolContent = ';',
        definitionsProductionName = 'definitions',
        productionNameProductionName = 'productionName',
        separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
        terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
        definitionsProductionNamePart = new ProductionNamePart(definitionsProductionName),
        productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName),
        parts = [productionNameProductionNamePart, separatorTerminalSymbolPart, definitionsProductionNamePart, terminatorTerminalSymbolPart];

    return _possibleConstructorReturn(this, (ProductionDefinition.__proto__ || Object.getPrototypeOf(ProductionDefinition)).call(this, parts));
  }

  return ProductionDefinition;
}(Definition);

module.exports = ProductionDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiUHJvZHVjdGlvbkRlZmluaXRpb24iLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUiLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRjNCOztJQUlNRyxvQjs7O0FBQ0osa0NBQWM7QUFBQTs7QUFDWixRQUFNQyxpQ0FBaUMsS0FBdkM7QUFBQSxRQUNNQyxrQ0FBa0MsR0FEeEM7QUFBQSxRQUVNQyw0QkFBNEIsYUFGbEM7QUFBQSxRQUdNQywrQkFBK0IsZ0JBSHJDO0FBQUEsUUFJTUMsOEJBQThCLElBQUlQLGtCQUFKLENBQXVCRyw4QkFBdkIsQ0FKcEM7QUFBQSxRQUtNSywrQkFBK0IsSUFBSVIsa0JBQUosQ0FBdUJJLCtCQUF2QixDQUxyQztBQUFBLFFBTU1LLGdDQUFnQyxJQUFJUixrQkFBSixDQUF1QkkseUJBQXZCLENBTnRDO0FBQUEsUUFPTUssbUNBQW1DLElBQUlULGtCQUFKLENBQXVCSyw0QkFBdkIsQ0FQekM7QUFBQSxRQVFNSyxRQUFRLENBQ05ELGdDQURNLEVBRU5ILDJCQUZNLEVBR05FLDZCQUhNLEVBSU5ELDRCQUpNLENBUmQ7O0FBRFksdUlBZ0JORyxLQWhCTTtBQWlCYjs7O0VBbEJnQ2IsVTs7QUFxQm5DYyxPQUFPQyxPQUFQLEdBQWlCWCxvQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gJzo6PScsXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc7JyxcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lID0gJ2RlZmluaXRpb25zJyxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lID0gJ3Byb2R1Y3Rpb25OYW1lJyxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KGRlZmluaXRpb25zUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25EZWZpbml0aW9uO1xuIl19