'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ProductionsRule = require('../rule/productions');

var ProductionsProduction = function (_Production) {
  _inherits(ProductionsProduction, _Production);

  function ProductionsProduction() {
    _classCallCheck(this, ProductionsProduction);

    var productionsRule = new ProductionsRule(),
        name = 'productions',
        rules = [productionsRule],
        Node = null;

    return _possibleConstructorReturn(this, (ProductionsProduction.__proto__ || Object.getPrototypeOf(ProductionsProduction)).call(this, name, rules, Node));
  }

  return ProductionsProduction;
}(Production);

module.exports = ProductionsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25zUnVsZSIsIlByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25zUnVsZSIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEeEI7O0lBR01FLHFCOzs7QUFDSixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLGtCQUFrQixJQUFJRixlQUFKLEVBQXhCO0FBQUEsUUFDTUcsT0FBTyxhQURiO0FBQUEsUUFFTUMsUUFBUSxDQUNORixlQURNLENBRmQ7QUFBQSxRQUtNRyxPQUFPLElBTGI7O0FBRFkseUlBUU5GLElBUk0sRUFRQUMsS0FSQSxFQVFPQyxJQVJQO0FBU2I7OztFQVZpQ1AsVTs7QUFhcENRLE9BQU9DLE9BQVAsR0FBaUJOLHFCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25zUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcHJvZHVjdGlvbnMnKTtcblxuY2xhc3MgUHJvZHVjdGlvbnNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25zUnVsZSA9IG5ldyBQcm9kdWN0aW9uc1J1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ3Byb2R1Y3Rpb25zJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IG51bGw7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uc1Byb2R1Y3Rpb247XG4iXX0=