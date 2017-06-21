'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ProductionNamePart = require('../part/productionName');

var ProductionNameDefinition = function (_Definition) {
  _inherits(ProductionNameDefinition, _Definition);

  function ProductionNameDefinition(productionName) {
    _classCallCheck(this, ProductionNameDefinition);

    var productionNamePart = new ProductionNamePart(productionName),
        parts = [productionNamePart];

    return _possibleConstructorReturn(this, (ProductionNameDefinition.__proto__ || Object.getPrototypeOf(ProductionNameDefinition)).call(this, parts));
  }

  return ProductionNameDefinition;
}(Definition);

module.exports = ProductionNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL3Byb2R1Y3Rpb25OYW1lLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjs7SUFHTUUsd0I7OztBQUNKLG9DQUFZQyxjQUFaLEVBQTRCO0FBQUE7O0FBQzFCLFFBQU1DLHFCQUFxQixJQUFJSCxrQkFBSixDQUF1QkUsY0FBdkIsQ0FBM0I7QUFBQSxRQUNNRSxRQUFRLENBQ05ELGtCQURNLENBRGQ7O0FBRDBCLCtJQU1wQkMsS0FOb0I7QUFPM0I7OztFQVJvQ04sVTs7QUFXdkNPLE9BQU9DLE9BQVAsR0FBaUJMLHdCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uO1xuIl19