'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionNode = function (_NonTerminalNode) {
      _inherits(ProductionNode, _NonTerminalNode);

      function ProductionNode() {
            _classCallCheck(this, ProductionNode);

            return _possibleConstructorReturn(this, (ProductionNode.__proto__ || Object.getPrototypeOf(ProductionNode)).apply(this, arguments));
      }

      _createClass(ProductionNode, [{
            key: 'getName',
            value: function getName() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      productionNameNode = firstChildNode,
                      ///
                  name = productionNameNode.getName();

                  return name;
            }
      }, {
            key: 'getDefinitions',
            value: function getDefinitions() {
                  var childNodes = this.getChildNodes(),
                      lastChildNode = last(childNodes),
                      definitionsNode = lastChildNode,
                      ///
                  definitions = definitionsNode.getDefinitions();

                  return definitions;
            }
      }], [{
            key: 'fromNodesAndProductionName',
            value: function fromNodesAndProductionName(nodes, productionName) {
                  var childNodes = arrayUtil.discardSecond(nodes),
                      productionNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionNode);

                  return productionNode;
            }
      }]);

      return ProductionNode;
}(NonTerminalNode);

module.exports = ProductionNode;

function first(array) {
      return array[0];
}
function last(array) {
      return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsInByb2R1Y3Rpb25OYW1lTm9kZSIsIm5hbWUiLCJnZXROYW1lIiwibGFzdENoaWxkTm9kZSIsImxhc3QiLCJkZWZpbml0aW9uc05vZGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImRpc2NhcmRTZWNvbmQiLCJwcm9kdWN0aW9uTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHTUUsYzs7Ozs7Ozs7Ozs7c0NBQ007QUFDUixzQkFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLGlCQUFpQkMsTUFBTUgsVUFBTixDQUR2QjtBQUFBLHNCQUVNSSxxQkFBcUJGLGNBRjNCO0FBQUEsc0JBRTRDO0FBQ3RDRyx5QkFBT0QsbUJBQW1CRSxPQUFuQixFQUhiOztBQUtBLHlCQUFPRCxJQUFQO0FBQ0Q7Ozs2Q0FFZ0I7QUFDZixzQkFBTUwsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01NLGdCQUFnQkMsS0FBS1IsVUFBTCxDQUR0QjtBQUFBLHNCQUVNUyxrQkFBa0JGLGFBRnhCO0FBQUEsc0JBRXdDO0FBQ2xDRyxnQ0FBY0QsZ0JBQWdCRSxjQUFoQixFQUhwQjs7QUFLQSx5QkFBT0QsV0FBUDtBQUNEOzs7dURBRWlDRSxLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsc0JBQU1iLGFBQWFKLFVBQVVrQixhQUFWLENBQXdCRixLQUF4QixDQUFuQjtBQUFBLHNCQUNNRyxpQkFBaUJqQixnQkFBZ0JrQiwrQkFBaEIsQ0FBZ0RILGNBQWhELEVBQWdFYixVQUFoRSxFQUE0RUQsY0FBNUUsQ0FEdkI7O0FBR0EseUJBQU9nQixjQUFQO0FBQ0Q7Ozs7RUF4QjBCakIsZTs7QUEyQjdCbUIsT0FBT0MsT0FBUCxHQUFpQm5CLGNBQWpCOztBQUVBLFNBQVNJLEtBQVQsQ0FBZWdCLEtBQWYsRUFBc0I7QUFBRSxhQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTWCxJQUFULENBQWNXLEtBQWQsRUFBcUI7QUFBRSxhQUFPQSxNQUFNQSxNQUFNQyxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQyIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWVOb2RlLmdldE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9kZSA9IGxhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZXREZWZpbml0aW9ucygpO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIFByb2R1Y3Rpb25Ob2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25Ob2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=