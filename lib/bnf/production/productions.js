'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ProductionsNode = require('../node/productions'),
    ProductionsDefinition = require('../definition/productions');

var ProductionsProduction = function (_Production) {
  _inherits(ProductionsProduction, _Production);

  function ProductionsProduction() {
    _classCallCheck(this, ProductionsProduction);

    var productionsDefinition = new ProductionsDefinition(),
        name = 'productions',
        definitions = [productionsDefinition],
        Node = ProductionsNode;

    return _possibleConstructorReturn(this, (ProductionsProduction.__proto__ || Object.getPrototypeOf(ProductionsProduction)).call(this, name, definitions, Node));
  }

  return ProductionsProduction;
}(Production);

module.exports = ProductionsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25zTm9kZSIsIlByb2R1Y3Rpb25zRGVmaW5pdGlvbiIsIlByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25zRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEeEI7QUFBQSxJQUVNRSx3QkFBd0JGLFFBQVEsMkJBQVIsQ0FGOUI7O0lBSU1HLHFCOzs7QUFDSixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLHdCQUF3QixJQUFJRixxQkFBSixFQUE5QjtBQUFBLFFBQ01HLE9BQU8sYUFEYjtBQUFBLFFBRU1DLGNBQWMsQ0FDWkYscUJBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPTixlQUxiOztBQURZLHlJQVFOSSxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWaUNSLFU7O0FBYXBDUyxPQUFPQyxPQUFQLEdBQWlCTixxQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uc05vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Byb2R1Y3Rpb25zJyksXG4gICAgICBQcm9kdWN0aW9uc0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3Byb2R1Y3Rpb25zJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25zUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uc0RlZmluaXRpb24gPSBuZXcgUHJvZHVjdGlvbnNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdwcm9kdWN0aW9ucycsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uc0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBQcm9kdWN0aW9uc05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uc1Byb2R1Y3Rpb247XG4iXX0=