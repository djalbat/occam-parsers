'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../extendedBNF/definition'),
    ProductionNamePart = require('../../extendedBNF/part/productionName');

var UnitDefinition = function (_Definition) {
  _inherits(UnitDefinition, _Definition);

  function UnitDefinition() {
    _classCallCheck(this, UnitDefinition);

    return _possibleConstructorReturn(this, (UnitDefinition.__proto__ || Object.getPrototypeOf(UnitDefinition)).apply(this, arguments));
  }

  _createClass(UnitDefinition, [{
    key: 'getProductionName',
    value: function getProductionName() {
      var firstPart = this.getFirstPart(),
          productionNamePart = firstPart,
          ///
      productionName = productionNamePart.getProductionName();

      return productionName;
    }
  }, {
    key: 'isIncludedInProductionNames',
    value: function isIncludedInProductionNames(productionNames) {
      var productionName = this.getProductionName(),
          includedInProductionNames = productionNames.includes(productionName);

      return includedInProductionNames;
    }
  }], [{
    key: 'fromProductionName',
    value: function fromProductionName(productionName) {
      var noWhitespace = false,
          ///
      productionNamePart = new ProductionNamePart(productionName, noWhitespace),
          parts = [productionNamePart],
          unitDefinition = new UnitDefinition(parts);

      return unitDefinition;
    }
  }, {
    key: 'fromDefinition',
    value: function fromDefinition(definition) {
      var unitDefinition = null;

      var partsLength = definition.getPartsLength();

      if (partsLength === 1) {
        var firstPartProductionNamePart = definition.isFirstPartProductionNamePart();

        if (firstPartProductionNamePart) {
          var parts = definition.getParts();

          unitDefinition = new UnitDefinition(parts);
        }
      }

      return unitDefinition;
    }
  }]);

  return UnitDefinition;
}(Definition);

module.exports = UnitDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vdW5pdC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlVuaXREZWZpbml0aW9uIiwiZmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lcyIsImluY2x1ZGVkSW5Qcm9kdWN0aW9uTmFtZXMiLCJpbmNsdWRlcyIsIm5vV2hpdGVzcGFjZSIsInBhcnRzIiwidW5pdERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicGFydHNMZW5ndGgiLCJnZXRQYXJ0c0xlbmd0aCIsImZpcnN0UGFydFByb2R1Y3Rpb25OYW1lUGFydCIsImlzRmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsOEJBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsdUNBQVIsQ0FEM0I7O0lBR01FLGM7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxZQUFZLEtBQUtDLFlBQUwsRUFBbEI7QUFBQSxVQUNNQyxxQkFBcUJGLFNBRDNCO0FBQUEsVUFDc0M7QUFDaENHLHVCQUFpQkQsbUJBQW1CRSxpQkFBbkIsRUFGdkI7O0FBSUEsYUFBT0QsY0FBUDtBQUNEOzs7Z0RBRTJCRSxlLEVBQWlCO0FBQzNDLFVBQU1GLGlCQUFpQixLQUFLQyxpQkFBTCxFQUF2QjtBQUFBLFVBQ01FLDRCQUE0QkQsZ0JBQWdCRSxRQUFoQixDQUF5QkosY0FBekIsQ0FEbEM7O0FBR0EsYUFBT0cseUJBQVA7QUFDRDs7O3VDQUV5QkgsYyxFQUFnQjtBQUN4QyxVQUFNSyxlQUFlLEtBQXJCO0FBQUEsVUFBNEI7QUFDdEJOLDJCQUFxQixJQUFJSixrQkFBSixDQUF1QkssY0FBdkIsRUFBdUNLLFlBQXZDLENBRDNCO0FBQUEsVUFFTUMsUUFBUSxDQUNOUCxrQkFETSxDQUZkO0FBQUEsVUFLTVEsaUJBQWlCLElBQUlYLGNBQUosQ0FBbUJVLEtBQW5CLENBTHZCOztBQU9BLGFBQU9DLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQ2hDLFVBQUlELGlCQUFpQixJQUFyQjs7QUFFQSxVQUFNRSxjQUFjRCxXQUFXRSxjQUFYLEVBQXBCOztBQUVBLFVBQUlELGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixZQUFNRSw4QkFBOEJILFdBQVdJLDZCQUFYLEVBQXBDOztBQUVBLFlBQUlELDJCQUFKLEVBQWlDO0FBQy9CLGNBQU1MLFFBQVFFLFdBQVdLLFFBQVgsRUFBZDs7QUFFQU4sMkJBQWlCLElBQUlYLGNBQUosQ0FBbUJVLEtBQW5CLENBQWpCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQyxjQUFQO0FBQ0Q7Ozs7RUEzQzBCZCxVOztBQThDN0JxQixPQUFPQyxPQUFQLEdBQWlCbkIsY0FBakIiLCJmaWxlIjoidW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2V4dGVuZGVkQk5GL2RlZmluaXRpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2V4dGVuZGVkQk5GL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgVW5pdERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluUHJvZHVjdGlvbk5hbWVzKHByb2R1Y3Rpb25OYW1lcykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVkSW5Qcm9kdWN0aW9uTmFtZXMgPSBwcm9kdWN0aW9uTmFtZXMuaW5jbHVkZXMocHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgcmV0dXJuIGluY2x1ZGVkSW5Qcm9kdWN0aW9uTmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9uID0gbmV3IFVuaXREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgbGV0IHVuaXREZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gZGVmaW5pdGlvbi5nZXRQYXJ0c0xlbmd0aCgpO1xuXG4gICAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQgPSBkZWZpbml0aW9uLmlzRmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0KCk7XG4gICAgICBcbiAgICAgIGlmIChmaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgICAgdW5pdERlZmluaXRpb24gPSBuZXcgVW5pdERlZmluaXRpb24ocGFydHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXREZWZpbml0aW9uO1xuIl19