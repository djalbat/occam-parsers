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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3Byb2R1Y3Rpb25zLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJQcm9kdWN0aW9uc05vZGUiLCJQcm9kdWN0aW9uIiwiRGVmaW5pdGlvbiIsIlBhcnRzIiwibWFwcGluZ3MiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByb2R1Y3Rpb25Ob2RlcyIsInByb2R1Y3Rpb25zIiwibWFwIiwicHJvZHVjdGlvbk5vZGUiLCJwcm9kdWN0aW9uIiwiZ2VuZXJhdGVQcm9kdWN0aW9uIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25zTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4Qjs7SUFFTUMsZTs7Ozs7Ozs7Ozs7d0NBQ2dCQyxVLEVBQVlDLFUsRUFBWUMsSyxFQUFPQyxRLEVBQVU7QUFDM0QsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsa0JBQWtCRixVQUR4QjtBQUFBLFVBQ3FDO0FBQy9CRyxvQkFBY0QsZ0JBQWdCRSxHQUFoQixDQUFvQixVQUFTQyxjQUFULEVBQXlCO0FBQ3pELFlBQU1DLGFBQWFELGVBQWVFLGtCQUFmLENBQWtDWCxVQUFsQyxFQUE4Q0MsVUFBOUMsRUFBMERDLEtBQTFELEVBQWlFQyxRQUFqRSxDQUFuQjs7QUFFQSxlQUFPTyxVQUFQO0FBQ0QsT0FKYSxDQUZwQjs7QUFRQSxhQUFPSCxXQUFQO0FBQ0Q7OzsrQ0FFaUNLLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFNVCxhQUFhUSxLQUFuQjtBQUFBLFVBQTBCO0FBQ3BCRSx3QkFBa0JqQixnQkFBZ0JrQiwrQkFBaEIsQ0FBZ0RGLGNBQWhELEVBQWdFVCxVQUFoRSxFQUE0RUwsZUFBNUUsQ0FEeEI7O0FBR0EsYUFBT2UsZUFBUDtBQUNEOzs7O0VBbEIyQmpCLGU7O0FBcUI5Qm1CLE9BQU9DLE9BQVAsR0FBaUJsQixlQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbnNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQcm9kdWN0aW9ucyhQcm9kdWN0aW9uLCBEZWZpbml0aW9uLCBQYXJ0cywgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGVzID0gY2hpbGROb2RlcywgIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbk5vZGVzLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdGlvbiA9IHByb2R1Y3Rpb25Ob2RlLmdlbmVyYXRlUHJvZHVjdGlvbihQcm9kdWN0aW9uLCBEZWZpbml0aW9uLCBQYXJ0cywgbWFwcGluZ3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25zTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBQcm9kdWN0aW9uc05vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25zTm9kZTtcbiJdfQ==