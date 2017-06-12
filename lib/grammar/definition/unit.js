'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../common/definition'),
    ProductionNamePart = require('../../common/part/productionName');

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
        var firstPart = definition.getFirstPart();

        if (firstPart instanceof ProductionNamePart) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vdW5pdC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlVuaXREZWZpbml0aW9uIiwiZmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZSIsInBhcnRzIiwidW5pdERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicGFydHNMZW5ndGgiLCJnZXRQYXJ0c0xlbmd0aCIsImdldFBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHlCQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtDQUFSLENBRDNCOztJQUdNRSxjOzs7Ozs7Ozs7Ozt3Q0FDaUI7QUFDbkIsVUFBTUMsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMscUJBQXFCRixTQUQzQjtBQUFBLFVBQ3NDO0FBQ2hDRyx1QkFBaUJELG1CQUFtQkUsaUJBQW5CLEVBRnZCOztBQUlBLGFBQU9ELGNBQVA7QUFDRDs7O3VDQUV5QkEsYyxFQUFnQjtBQUN4QyxVQUFNRSxlQUFlLEtBQXJCO0FBQUEsVUFBNEI7QUFDdEJILDJCQUFxQixJQUFJSixrQkFBSixDQUF1QkssY0FBdkIsRUFBdUNFLFlBQXZDLENBRDNCO0FBQUEsVUFFTUMsUUFBUSxDQUNOSixrQkFETSxDQUZkO0FBQUEsVUFLTUssaUJBQWlCLElBQUlSLGNBQUosQ0FBbUJPLEtBQW5CLENBTHZCOztBQU9BLGFBQU9DLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQ2hDLFVBQUlELGlCQUFpQixJQUFyQjs7QUFFQSxVQUFNRSxjQUFjRCxXQUFXRSxjQUFYLEVBQXBCOztBQUVBLFVBQUlELGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixZQUFNVCxZQUFZUSxXQUFXUCxZQUFYLEVBQWxCOztBQUVBLFlBQUlELHFCQUFxQkYsa0JBQXpCLEVBQTZDO0FBQzNDLGNBQU1RLFFBQVFFLFdBQVdHLFFBQVgsRUFBZDs7QUFFQUosMkJBQWlCLElBQUlSLGNBQUosQ0FBbUJPLEtBQW5CLENBQWpCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQyxjQUFQO0FBQ0Q7Ozs7RUFwQzBCWCxVOztBQXVDN0JnQixPQUFPQyxPQUFQLEdBQWlCZCxjQUFqQiIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2RlZmluaXRpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFVuaXREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGdldFByb2R1Y3Rpb25OYW1lICgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9uID0gbmV3IFVuaXREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgbGV0IHVuaXREZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gZGVmaW5pdGlvbi5nZXRQYXJ0c0xlbmd0aCgpO1xuXG4gICAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFBhcnQgPSBkZWZpbml0aW9uLmdldEZpcnN0UGFydCgpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RQYXJ0IGluc3RhbmNlb2YgUHJvZHVjdGlvbk5hbWVQYXJ0KSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHVuaXREZWZpbml0aW9uID0gbmV3IFVuaXREZWZpbml0aW9uKHBhcnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdERlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0RGVmaW5pdGlvbjtcbiJdfQ==