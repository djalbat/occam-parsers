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

  _createClass(ProductionsNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var firstNode = first(nodes),
          childNodes = firstNode instanceof VerticalSpaceNode ? arrayUtil.discardFirst(nodes) : nodes;

      var productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes);

      return productionsNode;
    }
  }]);

  return ProductionsNode;
}(NonTerminalNode);

module.exports = ProductionsNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiVmVydGljYWxTcGFjZU5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uc05vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZmlyc3ROb2RlIiwiZmlyc3QiLCJjaGlsZE5vZGVzIiwiZGlzY2FyZEZpcnN0IiwicHJvZHVjdGlvbnNOb2RlIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBRDFCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlNRyxlOzs7Ozs7Ozs7OzsrQ0FDOEJDLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFNQyxZQUFZQyxNQUFNSCxLQUFOLENBQWxCO0FBQUEsVUFDTUksYUFBY0YscUJBQXFCTCxpQkFBdEIsR0FDWEYsVUFBVVUsWUFBVixDQUF1QkwsS0FBdkIsQ0FEVyxHQUVUQSxLQUhWOztBQUtBLFVBQU1NLGtCQUFrQlIsZ0JBQWdCUywrQkFBaEIsQ0FBZ0ROLGNBQWhELEVBQWdFRyxVQUFoRSxDQUF4Qjs7QUFFQSxhQUFPRSxlQUFQO0FBQ0Q7Ozs7RUFWMkJSLGU7O0FBYTlCVSxPQUFPQyxPQUFQLEdBQWlCVixlQUFqQjs7QUFFQSxTQUFTSSxLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwcm9kdWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgVmVydGljYWxTcGFjZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3ZlcnRpY2FsU3BhY2UnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25zTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IChmaXJzdE5vZGUgaW5zdGFuY2VvZiBWZXJ0aWNhbFNwYWNlTm9kZSkgP1xuICAgICAgICAgICAgYXJyYXlVdGlsLmRpc2NhcmRGaXJzdChub2RlcykgOlxuICAgICAgICAgICAgICBub2RlcztcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25zTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uc05vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uc05vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19