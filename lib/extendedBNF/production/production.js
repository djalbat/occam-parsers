'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ProductionNode = require('../node/production'),
    ProductionDefinition = require('../definition/production');

var ProductionProduction = function (_Production) {
  _inherits(ProductionProduction, _Production);

  function ProductionProduction() {
    _classCallCheck(this, ProductionProduction);

    var productionDefinition = new ProductionDefinition(),
        name = 'production',
        definitions = [productionDefinition],
        Node = ProductionNode;

    return _possibleConstructorReturn(this, (ProductionProduction.__proto__ || Object.getPrototypeOf(ProductionProduction)).call(this, name, definitions, Node));
  }

  return ProductionProduction;
}(Production);

module.exports = ProductionProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTm9kZSIsIlByb2R1Y3Rpb25EZWZpbml0aW9uIiwiUHJvZHVjdGlvblByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSx1QkFBdUJGLFFBQVEsMEJBQVIsQ0FGN0I7O0lBSU1HLG9COzs7QUFDSixrQ0FBYztBQUFBOztBQUNaLFFBQU1DLHVCQUF1QixJQUFJRixvQkFBSixFQUE3QjtBQUFBLFFBQ01HLE9BQU8sWUFEYjtBQUFBLFFBRU1DLGNBQWMsQ0FDWkYsb0JBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPTixjQUxiOztBQURZLHVJQVFOSSxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWZ0NSLFU7O0FBYW5DUyxPQUFPQyxPQUFQLEdBQWlCTixvQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBQcm9kdWN0aW9uUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uRGVmaW5pdGlvbiA9IG5ldyBQcm9kdWN0aW9uRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFByb2R1Y3Rpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25Qcm9kdWN0aW9uO1xuIl19