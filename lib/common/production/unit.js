'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production'),
    ProductionNamePart = require('../part/productionName');

var UnitProduction = function (_Production) {
  _inherits(UnitProduction, _Production);

  function UnitProduction() {
    _classCallCheck(this, UnitProduction);

    return _possibleConstructorReturn(this, (UnitProduction.__proto__ || Object.getPrototypeOf(UnitProduction)).apply(this, arguments));
  }

  _createClass(UnitProduction, null, [{
    key: 'fromNameAndPartProductionName',
    value: function fromNameAndPartProductionName(name, partProductionName) {
      var productionName = partProductionName,
          ///
      noWhitespace = false,
          ///
      productionNamePart = new ProductionNamePart(productionName, noWhitespace),
          parts = [productionNamePart],
          rule = new Rule(parts),
          rules = [rule],
          Node = null,
          unitProduction = new UnitProduction(name, rules, Node);

      return unitProduction;
    }
  }]);

  return UnitProduction;
}(Production);

module.exports = UnitProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi91bml0LmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlVuaXRQcm9kdWN0aW9uIiwibmFtZSIsInBhcnRQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lIiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicGFydHMiLCJydWxlIiwicnVsZXMiLCJOb2RlIiwidW5pdFByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRjNCOztJQUlNRyxjOzs7Ozs7Ozs7OztrREFDaUNDLEksRUFBTUMsa0IsRUFBb0I7QUFDN0QsVUFBTUMsaUJBQWlCRCxrQkFBdkI7QUFBQSxVQUE0QztBQUN0Q0UscUJBQWUsS0FEckI7QUFBQSxVQUM0QjtBQUN0QkMsMkJBQXFCLElBQUlOLGtCQUFKLENBQXVCSSxjQUF2QixFQUF1Q0MsWUFBdkMsQ0FGM0I7QUFBQSxVQUdNRSxRQUFRLENBQ05ELGtCQURNLENBSGQ7QUFBQSxVQU1NRSxPQUFPLElBQUlYLElBQUosQ0FBU1UsS0FBVCxDQU5iO0FBQUEsVUFPTUUsUUFBUSxDQUNORCxJQURNLENBUGQ7QUFBQSxVQVVNRSxPQUFPLElBVmI7QUFBQSxVQVdNQyxpQkFBaUIsSUFBSVYsY0FBSixDQUFtQkMsSUFBbkIsRUFBeUJPLEtBQXpCLEVBQWdDQyxJQUFoQyxDQVh2Qjs7QUFhQSxhQUFPQyxjQUFQO0FBQ0Q7Ozs7RUFoQjBCWixVOztBQW1CN0JhLE9BQU9DLE9BQVAsR0FBaUJaLGNBQWpCIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBVbml0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbU5hbWVBbmRQYXJ0UHJvZHVjdGlvbk5hbWUobmFtZSwgcGFydFByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwYXJ0UHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCAgXG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IG51bGwsXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb24gPSBuZXcgVW5pdFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiB1bml0UHJvZHVjdGlvbjsgICAgICAgICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UHJvZHVjdGlvbjtcbiJdfQ==