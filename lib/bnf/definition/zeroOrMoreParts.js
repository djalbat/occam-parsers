'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var ZeroOrMorePartsDefinition = function (_Definition) {
  _inherits(ZeroOrMorePartsDefinition, _Definition);

  function ZeroOrMorePartsDefinition() {
    _classCallCheck(this, ZeroOrMorePartsDefinition);

    var partProductionName = 'part',
        asteriskTerminalSymbolContent = '*',
        asteriskTerminalSymbolNoWhitespace = true,
        partProductionNamePart = new ProductionNamePart(partProductionName),
        asteriskTerminalSymbolPart = new TerminalSymbolPart(asteriskTerminalSymbolContent, asteriskTerminalSymbolNoWhitespace),
        parts = [partProductionNamePart, asteriskTerminalSymbolPart];

    return _possibleConstructorReturn(this, (ZeroOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsDefinition)).call(this, parts));
  }

  return ZeroOrMorePartsDefinition;
}(Definition);

module.exports = ZeroOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwicGFydFByb2R1Y3Rpb25OYW1lIiwiYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sTm9XaGl0ZXNwYWNlIiwicGFydFByb2R1Y3Rpb25OYW1lUGFydCIsImFzdGVyaXNrVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsa0NBQVIsQ0FEM0I7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsa0NBQVIsQ0FGM0I7O0lBSU1HLHlCOzs7QUFDSix1Q0FBYztBQUFBOztBQUNaLFFBQU1DLHFCQUFxQixNQUEzQjtBQUFBLFFBQ01DLGdDQUFnQyxHQUR0QztBQUFBLFFBRU1DLHFDQUFxQyxJQUYzQztBQUFBLFFBR01DLHlCQUF5QixJQUFJTCxrQkFBSixDQUF1QkUsa0JBQXZCLENBSC9CO0FBQUEsUUFJTUksNkJBQTZCLElBQUlQLGtCQUFKLENBQXVCSSw2QkFBdkIsRUFBc0RDLGtDQUF0RCxDQUpuQztBQUFBLFFBS01HLFFBQVEsQ0FDTkYsc0JBRE0sRUFFTkMsMEJBRk0sQ0FMZDs7QUFEWSxpSkFXTkMsS0FYTTtBQVliOzs7RUFicUNWLFU7O0FBZ0J4Q1csT0FBT0MsT0FBUCxHQUFpQlIseUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9ICcqJyxcbiAgICAgICAgICBhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sTm9XaGl0ZXNwYWNlID0gdHJ1ZSxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwYXJ0UHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIGFzdGVyaXNrVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCwgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==