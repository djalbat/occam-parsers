'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionNameNode = function (_NonTerminalNode) {
  _inherits(ProductionNameNode, _NonTerminalNode);

  function ProductionNameNode() {
    _classCallCheck(this, ProductionNameNode);

    return _possibleConstructorReturn(this, (ProductionNameNode.__proto__ || Object.getPrototypeOf(ProductionNameNode)).apply(this, arguments));
  }

  _createClass(ProductionNameNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var productionName = this.getProductionName(),
          ProductionNamePart = Parts['ProductionNamePart'],
          productionNamePart = new ProductionNamePart(productionName, noWhitespace);

      return productionNamePart;
    }
  }, {
    key: 'getProductionName',
    value: function getProductionName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          productionName = terminalNodeContent; ///

      return productionName;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ProductionNameNode);
    }
  }]);

  return ProductionNameNode;
}(NonTerminalNode);

module.exports = ProductionNameNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVOb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJub2RlcyIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4Qjs7SUFFTUMsa0I7Ozs7Ozs7Ozs7O2lDQUNTQyxLLEVBQU9DLFksRUFBYztBQUNoQyxVQUFNQyxpQkFBaUIsS0FBS0MsaUJBQUwsRUFBdkI7QUFBQSxVQUNNQyxxQkFBcUJKLE1BQU0sb0JBQU4sQ0FEM0I7QUFBQSxVQUVNSyxxQkFBcUIsSUFBSUQsa0JBQUosQ0FBdUJGLGNBQXZCLEVBQXVDRCxZQUF2QyxDQUYzQjs7QUFJQSxhQUFPSSxrQkFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGlCQUFpQkMsTUFBTUgsVUFBTixDQUR2QjtBQUFBLFVBRU1JLGVBQWVGLGNBRnJCO0FBQUEsVUFFc0M7QUFDaENHLDRCQUFzQkQsYUFBYUUsVUFBYixFQUg1QjtBQUFBLFVBSU1WLGlCQUFpQlMsbUJBSnZCLENBRGtCLENBSzBCOztBQUU1QyxhQUFPVCxjQUFQO0FBQ0Q7OzsrQ0FFaUNXLEssRUFBT1gsYyxFQUFnQjtBQUFFLGFBQU9MLGdCQUFnQmlCLDBCQUFoQixDQUEyQ0QsS0FBM0MsRUFBa0RYLGNBQWxELEVBQWtFSCxrQkFBbEUsQ0FBUDtBQUErRjs7OztFQW5CM0hGLGU7O0FBc0JqQ2tCLE9BQU9DLE9BQVAsR0FBaUJqQixrQkFBakI7O0FBRUEsU0FBU1UsS0FBVCxDQUFlUSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gUGFydHNbJ1Byb2R1Y3Rpb25OYW1lUGFydCddLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgUHJvZHVjdGlvbk5hbWVOb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=