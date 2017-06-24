'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionsNode = function (_NonTerminalNode) {
  _inherits(ProductionsNode, _NonTerminalNode);

  function ProductionsNode() {
    _classCallCheck(this, ProductionsNode);

    return _possibleConstructorReturn(this, (ProductionsNode.__proto__ || Object.getPrototypeOf(ProductionsNode)).apply(this, arguments));
  }

  _createClass(ProductionsNode, [{
    key: 'generateProductions',
    value: function generateProductions(Production, Definition, mappings) {
      var childNodes = this.getChildNodes(),
          productionNodes = childNodes,
          ///
      productions = productionNodes.map(function (productionNode) {
        var production = productionNode.generateProduction(Production, Definition, mappings);

        return production;
      });

      return productions;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = nodes,
          ///
      productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionsNode);

      return productionsNode;
    }
  }]);

  return ProductionsNode;
}(NonTerminalNode);

module.exports = ProductionsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3Byb2R1Y3Rpb25zLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uc05vZGUiLCJQcm9kdWN0aW9uIiwiRGVmaW5pdGlvbiIsIm1hcHBpbmdzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwcm9kdWN0aW9uTm9kZXMiLCJwcm9kdWN0aW9ucyIsIm1hcCIsInByb2R1Y3Rpb25Ob2RlIiwicHJvZHVjdGlvbiIsImdlbmVyYXRlUHJvZHVjdGlvbiIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9uc05vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsK0JBQVIsQ0FBeEI7O0lBRU1DLGU7Ozs7Ozs7Ozs7O3dDQUNnQkMsVSxFQUFZQyxVLEVBQVlDLFEsRUFBVTtBQUNwRCxVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxrQkFBa0JGLFVBRHhCO0FBQUEsVUFDcUM7QUFDL0JHLG9CQUFjRCxnQkFBZ0JFLEdBQWhCLENBQW9CLFVBQVNDLGNBQVQsRUFBeUI7QUFDekQsWUFBTUMsYUFBYUQsZUFBZUUsa0JBQWYsQ0FBa0NWLFVBQWxDLEVBQThDQyxVQUE5QyxFQUEwREMsUUFBMUQsQ0FBbkI7O0FBRUEsZUFBT08sVUFBUDtBQUNELE9BSmEsQ0FGcEI7O0FBUUEsYUFBT0gsV0FBUDtBQUNEOzs7K0NBRWlDSyxLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsVUFBTVQsYUFBYVEsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQkUsd0JBQWtCaEIsZ0JBQWdCaUIsK0JBQWhCLENBQWdERixjQUFoRCxFQUFnRVQsVUFBaEUsRUFBNEVKLGVBQTVFLENBRHhCOztBQUdBLGFBQU9jLGVBQVA7QUFDRDs7OztFQWxCMkJoQixlOztBQXFCOUJrQixPQUFPQyxPQUFQLEdBQWlCakIsZUFBakIiLCJmaWxlIjoicHJvZHVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25zTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUHJvZHVjdGlvbnMoUHJvZHVjdGlvbiwgRGVmaW5pdGlvbiwgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGVzID0gY2hpbGROb2RlcywgIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbk5vZGVzLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdGlvbiA9IHByb2R1Y3Rpb25Ob2RlLmdlbmVyYXRlUHJvZHVjdGlvbihQcm9kdWN0aW9uLCBEZWZpbml0aW9uLCBtYXBwaW5ncyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbnNOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIFByb2R1Y3Rpb25zTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnNOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbnNOb2RlO1xuIl19