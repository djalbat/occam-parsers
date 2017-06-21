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
    value: function generateProductions(Production, Definition, Parts, mappings) {
      var childNodes = this.getChildNodes(),
          productionNodes = childNodes,
          ///
      productions = productionNodes.map(function (productionNode) {
        var production = productionNode.generateProduction(Production, Definition, Parts, mappings);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbnNOb2RlIiwiUHJvZHVjdGlvbiIsIkRlZmluaXRpb24iLCJQYXJ0cyIsIm1hcHBpbmdzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwcm9kdWN0aW9uTm9kZXMiLCJwcm9kdWN0aW9ucyIsIm1hcCIsInByb2R1Y3Rpb25Ob2RlIiwicHJvZHVjdGlvbiIsImdlbmVyYXRlUHJvZHVjdGlvbiIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9uc05vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsK0JBQVIsQ0FBeEI7O0lBRU1DLGU7Ozs7Ozs7Ozs7O3dDQUNnQkMsVSxFQUFZQyxVLEVBQVlDLEssRUFBT0MsUSxFQUFVO0FBQzNELFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGtCQUFrQkYsVUFEeEI7QUFBQSxVQUNxQztBQUMvQkcsb0JBQWNELGdCQUFnQkUsR0FBaEIsQ0FBb0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN6RCxZQUFNQyxhQUFhRCxlQUFlRSxrQkFBZixDQUFrQ1gsVUFBbEMsRUFBOENDLFVBQTlDLEVBQTBEQyxLQUExRCxFQUFpRUMsUUFBakUsQ0FBbkI7O0FBRUEsZUFBT08sVUFBUDtBQUNELE9BSmEsQ0FGcEI7O0FBUUEsYUFBT0gsV0FBUDtBQUNEOzs7K0NBRWlDSyxLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsVUFBTVQsYUFBYVEsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQkUsd0JBQWtCakIsZ0JBQWdCa0IsK0JBQWhCLENBQWdERixjQUFoRCxFQUFnRVQsVUFBaEUsRUFBNEVMLGVBQTVFLENBRHhCOztBQUdBLGFBQU9lLGVBQVA7QUFDRDs7OztFQWxCMkJqQixlOztBQXFCOUJtQixPQUFPQyxPQUFQLEdBQWlCbEIsZUFBakIiLCJmaWxlIjoicHJvZHVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25zTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUHJvZHVjdGlvbnMoUHJvZHVjdGlvbiwgRGVmaW5pdGlvbiwgUGFydHMsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlcyA9IGNoaWxkTm9kZXMsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25Ob2Rlcy5tYXAoZnVuY3Rpb24ocHJvZHVjdGlvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uTm9kZS5nZW5lcmF0ZVByb2R1Y3Rpb24oUHJvZHVjdGlvbiwgRGVmaW5pdGlvbiwgUGFydHMsIG1hcHBpbmdzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgUHJvZHVjdGlvbnNOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uc05vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uc05vZGU7XG4iXX0=