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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUHJvZHVjdGlvbnNOb2RlIiwiUHJvZHVjdGlvbnNEZWZpbml0aW9uIiwiUHJvZHVjdGlvbnNQcm9kdWN0aW9uIiwicHJvZHVjdGlvbnNEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxxQkFBUixDQUR4QjtBQUFBLElBRU1FLHdCQUF3QkYsUUFBUSwyQkFBUixDQUY5Qjs7SUFJTUcscUI7OztBQUNKLG1DQUFjO0FBQUE7O0FBQ1osUUFBTUMsd0JBQXdCLElBQUlGLHFCQUFKLEVBQTlCO0FBQUEsUUFDTUcsT0FBTyxhQURiO0FBQUEsUUFFTUMsY0FBYyxDQUNaRixxQkFEWSxDQUZwQjtBQUFBLFFBS01HLE9BQU9OLGVBTGI7O0FBRFkseUlBUU5JLElBUk0sRUFRQUMsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZpQ1IsVTs7QUFhcENTLE9BQU9DLE9BQVAsR0FBaUJOLHFCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25zTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcHJvZHVjdGlvbnMnKSxcbiAgICAgIFByb2R1Y3Rpb25zRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcHJvZHVjdGlvbnMnKTtcblxuY2xhc3MgUHJvZHVjdGlvbnNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25zRGVmaW5pdGlvbiA9IG5ldyBQcm9kdWN0aW9uc0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ3Byb2R1Y3Rpb25zJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFByb2R1Y3Rpb25zTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25zUHJvZHVjdGlvbjtcbiJdfQ==