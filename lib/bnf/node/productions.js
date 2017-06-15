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
      var firstNode = arrayUtil.first(nodes),
          childNodes = firstNode instanceof VerticalSpaceNode ? arrayUtil.discardFirst(nodes) : nodes,
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionsNode);

      return productionsNode;
    }
  }]);

  return ProductionsNode;
}(NonTerminalNode);

module.exports = ProductionsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiVmVydGljYWxTcGFjZU5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uc05vZGUiLCJQcm9kdWN0aW9uIiwiRGVmaW5pdGlvbiIsIlBhcnRzIiwibWFwcGluZ3MiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByb2R1Y3Rpb25zTm9kZXMiLCJwcm9kdWN0aW9ucyIsIm1hcCIsInByb2R1Y3Rpb25Ob2RlIiwicHJvZHVjdGlvbiIsImdlbmVyYXRlUHJvZHVjdGlvbiIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmaXJzdE5vZGUiLCJmaXJzdCIsImRpc2NhcmRGaXJzdCIsInByb2R1Y3Rpb25zTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FEMUI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FGeEI7O0lBSU1HLGU7Ozs7Ozs7Ozs7O3dDQUNnQkMsVSxFQUFZQyxVLEVBQVlDLEssRUFBT0MsUSxFQUFVO0FBQzNELFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLG1CQUFtQkYsVUFEekI7QUFBQSxVQUNzQztBQUNoQ0csb0JBQWNELGlCQUFpQkUsR0FBakIsQ0FBcUIsVUFBU0MsY0FBVCxFQUF5QjtBQUMxRCxZQUFNQyxhQUFhRCxlQUFlRSxrQkFBZixDQUFrQ1gsVUFBbEMsRUFBOENDLFVBQTlDLEVBQTBEQyxLQUExRCxFQUFpRUMsUUFBakUsQ0FBbkI7O0FBRUEsZUFBT08sVUFBUDtBQUNELE9BSmEsQ0FGcEI7O0FBUUEsYUFBT0gsV0FBUDtBQUNEOzs7K0NBRWlDSyxLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsVUFBTUMsWUFBWW5CLFVBQVVvQixLQUFWLENBQWdCSCxLQUFoQixDQUFsQjtBQUFBLFVBQ01SLGFBQWNVLHFCQUFxQmpCLGlCQUF0QixHQUNFRixVQUFVcUIsWUFBVixDQUF1QkosS0FBdkIsQ0FERixHQUVJQSxLQUh2QjtBQUFBLFVBSU1LLGtCQUFrQm5CLGdCQUFnQm9CLCtCQUFoQixDQUFnREwsY0FBaEQsRUFBZ0VULFVBQWhFLEVBQTRFTCxlQUE1RSxDQUp4Qjs7QUFNQSxhQUFPa0IsZUFBUDtBQUNEOzs7O0VBckIyQm5CLGU7O0FBd0I5QnFCLE9BQU9DLE9BQVAsR0FBaUJyQixlQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgVmVydGljYWxTcGFjZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3ZlcnRpY2FsU3BhY2UnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25zTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUHJvZHVjdGlvbnMoUHJvZHVjdGlvbiwgRGVmaW5pdGlvbiwgUGFydHMsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zTm9kZXMgPSBjaGlsZE5vZGVzLCAgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9uc05vZGVzLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdGlvbiA9IHByb2R1Y3Rpb25Ob2RlLmdlbmVyYXRlUHJvZHVjdGlvbihQcm9kdWN0aW9uLCBEZWZpbml0aW9uLCBQYXJ0cywgbWFwcGluZ3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSAoZmlyc3ROb2RlIGluc3RhbmNlb2YgVmVydGljYWxTcGFjZU5vZGUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVV0aWwuZGlzY2FyZEZpcnN0KG5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlcyxcbiAgICAgICAgICBwcm9kdWN0aW9uc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgUHJvZHVjdGlvbnNOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uc05vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uc05vZGU7XG4iXX0=