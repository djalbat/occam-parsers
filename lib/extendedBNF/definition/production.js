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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL3Byb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJQcm9kdWN0aW9uRGVmaW5pdGlvbiIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSIsInNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCIsInRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lUGFydCIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0lBSU1HLG9COzs7QUFDSixrQ0FBYztBQUFBOztBQUNaLFFBQU1DLGlDQUFpQyxLQUF2QztBQUFBLFFBQ01DLGtDQUFrQyxHQUR4QztBQUFBLFFBRU1DLDRCQUE0QixhQUZsQztBQUFBLFFBR01DLCtCQUErQixnQkFIckM7QUFBQSxRQUlNQyw4QkFBOEIsSUFBSVAsa0JBQUosQ0FBdUJHLDhCQUF2QixDQUpwQztBQUFBLFFBS01LLCtCQUErQixJQUFJUixrQkFBSixDQUF1QkksK0JBQXZCLENBTHJDO0FBQUEsUUFNTUssZ0NBQWdDLElBQUlSLGtCQUFKLENBQXVCSSx5QkFBdkIsQ0FOdEM7QUFBQSxRQU9NSyxtQ0FBbUMsSUFBSVQsa0JBQUosQ0FBdUJLLDRCQUF2QixDQVB6QztBQUFBLFFBUU1LLFFBQVEsQ0FDTkQsZ0NBRE0sRUFFTkgsMkJBRk0sRUFHTkUsNkJBSE0sRUFJTkQsNEJBSk0sQ0FSZDs7QUFEWSx1SUFnQk5HLEtBaEJNO0FBaUJiOzs7RUFsQmdDYixVOztBQXFCbkNjLE9BQU9DLE9BQVAsR0FBaUJYLG9CQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnOjo9JyxcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gJzsnLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbk5hbWUgPSAnZGVmaW5pdGlvbnMnLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUgPSAncHJvZHVjdGlvbk5hbWUnLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQoZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbkRlZmluaXRpb247XG4iXX0=