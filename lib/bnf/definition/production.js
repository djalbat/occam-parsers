'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var ProductionDefinition = function (_Definition) {
  _inherits(ProductionDefinition, _Definition);

  function ProductionDefinition() {
    _classCallCheck(this, ProductionDefinition);

    var noWhitespace = false,
        productionNameProductionName = 'productionName',
        separatorTerminalSymbolContent = '::=',
        definitionsProductionName = 'definitions',
        productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
        separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
        definitionsProductionNamePart = new ProductionNamePart(definitionsProductionName, noWhitespace),
        parts = [productionNameProductionNamePart, separatorTerminalSymbolPart, definitionsProductionNamePart];

    return _possibleConstructorReturn(this, (ProductionDefinition.__proto__ || Object.getPrototypeOf(ProductionDefinition)).call(this, parts));
  }

  return ProductionDefinition;
}(Definition);

module.exports = ProductionDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiUHJvZHVjdGlvbkRlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0Iiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxrQ0FBUixDQUQzQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSxrQ0FBUixDQUYzQjs7SUFJTUcsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLCtCQUErQixnQkFEckM7QUFBQSxRQUVNQyxpQ0FBaUMsS0FGdkM7QUFBQSxRQUdNQyw0QkFBNEIsYUFIbEM7QUFBQSxRQUlNQyxtQ0FBbUMsSUFBSU4sa0JBQUosQ0FBdUJHLDRCQUF2QixFQUFxREQsWUFBckQsQ0FKekM7QUFBQSxRQUtNSyw4QkFBOEIsSUFBSVIsa0JBQUosQ0FBdUJLLDhCQUF2QixFQUF1REYsWUFBdkQsQ0FMcEM7QUFBQSxRQU1NTSxnQ0FBZ0MsSUFBSVIsa0JBQUosQ0FBdUJLLHlCQUF2QixFQUFrREgsWUFBbEQsQ0FOdEM7QUFBQSxRQU9NTyxRQUFRLENBQ05ILGdDQURNLEVBRU5DLDJCQUZNLEVBR05DLDZCQUhNLENBUGQ7O0FBRFksdUlBY05DLEtBZE07QUFlYjs7O0VBaEJnQ1osVTs7QUFtQm5DYSxPQUFPQyxPQUFQLEdBQWlCVixvQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lID0gJ3Byb2R1Y3Rpb25OYW1lJyxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnOjo9JyxcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lID0gJ2RlZmluaXRpb25zJyxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQoZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbkRlZmluaXRpb247XG4iXX0=