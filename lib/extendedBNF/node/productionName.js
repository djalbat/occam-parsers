'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

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
                      firstChildNode = arrayUtil.first(childNodes),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3Byb2R1Y3Rpb25OYW1lLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uTmFtZU5vZGUiLCJQYXJ0cyIsIm5vV2hpdGVzcGFjZSIsInByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVzIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7O0lBR01FLGtCOzs7Ozs7Ozs7Ozt5Q0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsc0JBQU1DLGlCQUFpQixLQUFLQyxpQkFBTCxFQUF2QjtBQUFBLHNCQUNNQyxxQkFBcUJKLE1BQU0sb0JBQU4sQ0FEM0I7QUFBQSxzQkFFTUsscUJBQXFCLElBQUlELGtCQUFKLENBQXVCRixjQUF2QixFQUF1Q0QsWUFBdkMsQ0FGM0I7O0FBSUEseUJBQU9JLGtCQUFQO0FBQ0Q7OztnREFFbUI7QUFDbEIsc0JBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNQyxpQkFBaUJaLFVBQVVhLEtBQVYsQ0FBZ0JILFVBQWhCLENBRHZCO0FBQUEsc0JBRU1JLGVBQWVGLGNBRnJCO0FBQUEsc0JBRXNDO0FBQ2hDRyx3Q0FBc0JELGFBQWFFLFVBQWIsRUFINUI7QUFBQSxzQkFJTVYsaUJBQWlCUyxtQkFKdkIsQ0FEa0IsQ0FLMEI7O0FBRTVDLHlCQUFPVCxjQUFQO0FBQ0Q7Ozt1REFFaUNXLEssRUFBT1gsYyxFQUFnQjtBQUFFLHlCQUFPSixnQkFBZ0JnQiwwQkFBaEIsQ0FBMkNELEtBQTNDLEVBQWtEWCxjQUFsRCxFQUFrRUgsa0JBQWxFLENBQVA7QUFBK0Y7Ozs7RUFuQjNIRCxlOztBQXNCakNpQixPQUFPQyxPQUFQLEdBQWlCakIsa0JBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb25OYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IFBhcnRzWydQcm9kdWN0aW9uTmFtZVBhcnQnXSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFydDtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gdGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBQcm9kdWN0aW9uTmFtZU5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVOb2RlO1xuIl19