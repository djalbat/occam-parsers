'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../bnf/definition'),
    ProductionNamePart = require('../../bnf/part/productionName');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vdW5pdC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlVuaXREZWZpbml0aW9uIiwiZmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lcyIsImluY2x1ZGVkSW5Qcm9kdWN0aW9uTmFtZXMiLCJpbmNsdWRlcyIsIm5vV2hpdGVzcGFjZSIsInBhcnRzIiwidW5pdERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicGFydHNMZW5ndGgiLCJnZXRQYXJ0c0xlbmd0aCIsImZpcnN0UGFydFByb2R1Y3Rpb25OYW1lUGFydCIsImlzRmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsc0JBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsK0JBQVIsQ0FEM0I7O0lBR01FLGM7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxZQUFZLEtBQUtDLFlBQUwsRUFBbEI7QUFBQSxVQUNNQyxxQkFBcUJGLFNBRDNCO0FBQUEsVUFDc0M7QUFDaENHLHVCQUFpQkQsbUJBQW1CRSxpQkFBbkIsRUFGdkI7O0FBSUEsYUFBT0QsY0FBUDtBQUNEOzs7Z0RBRTJCRSxlLEVBQWlCO0FBQzNDLFVBQU1GLGlCQUFpQixLQUFLQyxpQkFBTCxFQUF2QjtBQUFBLFVBQ01FLDRCQUE0QkQsZ0JBQWdCRSxRQUFoQixDQUF5QkosY0FBekIsQ0FEbEM7O0FBR0EsYUFBT0cseUJBQVA7QUFDRDs7O3VDQUV5QkgsYyxFQUFnQjtBQUN4QyxVQUFNSyxlQUFlLEtBQXJCO0FBQUEsVUFBNEI7QUFDdEJOLDJCQUFxQixJQUFJSixrQkFBSixDQUF1QkssY0FBdkIsRUFBdUNLLFlBQXZDLENBRDNCO0FBQUEsVUFFTUMsUUFBUSxDQUNOUCxrQkFETSxDQUZkO0FBQUEsVUFLTVEsaUJBQWlCLElBQUlYLGNBQUosQ0FBbUJVLEtBQW5CLENBTHZCOztBQU9BLGFBQU9DLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQ2hDLFVBQUlELGlCQUFpQixJQUFyQjs7QUFFQSxVQUFNRSxjQUFjRCxXQUFXRSxjQUFYLEVBQXBCOztBQUVBLFVBQUlELGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixZQUFNRSw4QkFBOEJILFdBQVdJLDZCQUFYLEVBQXBDOztBQUVBLFlBQUlELDJCQUFKLEVBQWlDO0FBQy9CLGNBQU1MLFFBQVFFLFdBQVdLLFFBQVgsRUFBZDs7QUFFQU4sMkJBQWlCLElBQUlYLGNBQUosQ0FBbUJVLEtBQW5CLENBQWpCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQyxjQUFQO0FBQ0Q7Ozs7RUEzQzBCZCxVOztBQThDN0JxQixPQUFPQyxPQUFQLEdBQWlCbkIsY0FBakIiLCJmaWxlIjoidW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2JuZi9kZWZpbml0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9ibmYvcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBVbml0RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBpc0luY2x1ZGVkSW5Qcm9kdWN0aW9uTmFtZXMocHJvZHVjdGlvbk5hbWVzKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgaW5jbHVkZWRJblByb2R1Y3Rpb25OYW1lcyA9IHByb2R1Y3Rpb25OYW1lcy5pbmNsdWRlcyhwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJblByb2R1Y3Rpb25OYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBuZXcgVW5pdERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBsZXQgdW5pdERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBkZWZpbml0aW9uLmdldFBhcnRzTGVuZ3RoKCk7XG5cbiAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IGRlZmluaXRpb24uaXNGaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQoKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0UGFydFByb2R1Y3Rpb25OYW1lUGFydCkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICB1bml0RGVmaW5pdGlvbiA9IG5ldyBVbml0RGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdERlZmluaXRpb247XG4iXX0=