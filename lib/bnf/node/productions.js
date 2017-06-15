'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    VerticalSpaceNode = require('../node/verticalSpace'),
    NonTerminalNode = require('../../common/node/nonTerminal');

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
          productionsNodes = childNodes,
          ///
      productions = productionsNodes.map(function (productionNode) {
        var production = productionNode.generateProduction(Production, Definition, Parts, mappings);

        return production;
      });

      return productions;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var firstNode = first(nodes),
          childNodes = firstNode instanceof VerticalSpaceNode ? arrayUtil.discardFirst(nodes) : nodes,
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionsNode);

      return productionsNode;
    }
  }]);

  return ProductionsNode;
}(NonTerminalNode);

module.exports = ProductionsNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiVmVydGljYWxTcGFjZU5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uc05vZGUiLCJQcm9kdWN0aW9uIiwiRGVmaW5pdGlvbiIsIlBhcnRzIiwibWFwcGluZ3MiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByb2R1Y3Rpb25zTm9kZXMiLCJwcm9kdWN0aW9ucyIsIm1hcCIsInByb2R1Y3Rpb25Ob2RlIiwicHJvZHVjdGlvbiIsImdlbmVyYXRlUHJvZHVjdGlvbiIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmaXJzdE5vZGUiLCJmaXJzdCIsImRpc2NhcmRGaXJzdCIsInByb2R1Y3Rpb25zTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsZTs7Ozs7Ozs7Ozs7d0NBQ2dCQyxVLEVBQVlDLFUsRUFBWUMsSyxFQUFPQyxRLEVBQVU7QUFDM0QsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsbUJBQW1CRixVQUR6QjtBQUFBLFVBQ3NDO0FBQ2hDRyxvQkFBY0QsaUJBQWlCRSxHQUFqQixDQUFxQixVQUFTQyxjQUFULEVBQXlCO0FBQzFELFlBQU1DLGFBQWFELGVBQWVFLGtCQUFmLENBQWtDWCxVQUFsQyxFQUE4Q0MsVUFBOUMsRUFBMERDLEtBQTFELEVBQWlFQyxRQUFqRSxDQUFuQjs7QUFFQSxlQUFPTyxVQUFQO0FBQ0QsT0FKYSxDQUZwQjs7QUFRQSxhQUFPSCxXQUFQO0FBQ0Q7OzsrQ0FFaUNLLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFNQyxZQUFZQyxNQUFNSCxLQUFOLENBQWxCO0FBQUEsVUFDTVIsYUFBY1UscUJBQXFCakIsaUJBQXRCLEdBQ0VGLFVBQVVxQixZQUFWLENBQXVCSixLQUF2QixDQURGLEdBRUlBLEtBSHZCO0FBQUEsVUFJTUssa0JBQWtCbkIsZ0JBQWdCb0IsK0JBQWhCLENBQWdETCxjQUFoRCxFQUFnRVQsVUFBaEUsRUFBNEVMLGVBQTVFLENBSnhCOztBQU1BLGFBQU9rQixlQUFQO0FBQ0Q7Ozs7RUFyQjJCbkIsZTs7QUF3QjlCcUIsT0FBT0MsT0FBUCxHQUFpQnJCLGVBQWpCOztBQUVBLFNBQVNnQixLQUFULENBQWVNLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgVmVydGljYWxTcGFjZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3ZlcnRpY2FsU3BhY2UnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25zTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUHJvZHVjdGlvbnMoUHJvZHVjdGlvbiwgRGVmaW5pdGlvbiwgUGFydHMsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zTm9kZXMgPSBjaGlsZE5vZGVzLCAgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9uc05vZGVzLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdGlvbiA9IHByb2R1Y3Rpb25Ob2RlLmdlbmVyYXRlUHJvZHVjdGlvbihQcm9kdWN0aW9uLCBEZWZpbml0aW9uLCBQYXJ0cywgbWFwcGluZ3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IChmaXJzdE5vZGUgaW5zdGFuY2VvZiBWZXJ0aWNhbFNwYWNlTm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VXRpbC5kaXNjYXJkRmlyc3Qobm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzLFxuICAgICAgICAgIHByb2R1Y3Rpb25zTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBQcm9kdWN0aW9uc05vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25zTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=