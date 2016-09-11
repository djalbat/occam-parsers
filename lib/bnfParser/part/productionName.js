'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionNamePart = function () {
  function ProductionNamePart(productionName) {
    _classCallCheck(this, ProductionNamePart);

    this.productionName = productionName;
  }

  _createClass(ProductionNamePart, null, [{
    key: 'fromSymbols',
    value: function fromSymbols(symbols, Parts) {
      var symbol = symbols.shift(),
          productionName = symbol,
          ///
      productionNamePart = new ProductionNamePart(productionName);

      return productionNamePart;
    }
  }, {
    key: 'findProduction',
    value: function findProduction(productionName, rules) {
      var foundProduction = undefined;

      rules.some(function (rule) {
        var name = rule.getName();

        if (name === productionName) {
          foundProduction = rule;

          return true;
        } else {
          return false;
        }
      }.bind(this));

      var rule = foundProduction;

      return rule;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsInN5bWJvbHMiLCJQYXJ0cyIsInN5bWJvbCIsInNoaWZ0IiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicnVsZXMiLCJmb3VuZFByb2R1Y3Rpb24iLCJ1bmRlZmluZWQiLCJzb21lIiwicnVsZSIsIm5hbWUiLCJnZXROYW1lIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsa0I7QUFDSiw4QkFBWUMsY0FBWixFQUE0QjtBQUFBOztBQUMxQixTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7O2dDQUVrQkMsTyxFQUFTQyxLLEVBQU87QUFDakMsVUFBSUMsU0FBU0YsUUFBUUcsS0FBUixFQUFiO0FBQUEsVUFDSUosaUJBQWlCRyxNQURyQjtBQUFBLFVBQzhCO0FBQzFCRSwyQkFBcUIsSUFBSU4sa0JBQUosQ0FBdUJDLGNBQXZCLENBRnpCOztBQUlBLGFBQU9LLGtCQUFQO0FBQ0Q7OzttQ0FFcUJMLGMsRUFBZ0JNLEssRUFBTztBQUMzQyxVQUFJQyxrQkFBa0JDLFNBQXRCOztBQUVBRixZQUFNRyxJQUFOLENBQVcsVUFBU0MsSUFBVCxFQUFlO0FBQ3hCLFlBQUlDLE9BQU9ELEtBQUtFLE9BQUwsRUFBWDs7QUFFQSxZQUFJRCxTQUFTWCxjQUFiLEVBQTZCO0FBQzNCTyw0QkFBa0JHLElBQWxCOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZVLENBVVRHLElBVlMsQ0FVSixJQVZJLENBQVg7O0FBWUEsVUFBSUgsT0FBT0gsZUFBWDs7QUFFQSxhQUFPRyxJQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCaEIsa0JBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb25OYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9scyhzeW1ib2xzLCBQYXJ0cykge1xuICAgIHZhciBzeW1ib2wgPSBzeW1ib2xzLnNoaWZ0KCksXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lID0gc3ltYm9sLCAgLy8vXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSwgcnVsZXMpIHtcbiAgICB2YXIgZm91bmRQcm9kdWN0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgcnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICB2YXIgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgZm91bmRQcm9kdWN0aW9uID0gcnVsZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdmFyIHJ1bGUgPSBmb3VuZFByb2R1Y3Rpb247XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUGFydDtcbiJdfQ==