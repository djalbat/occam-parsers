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
            key: 'generateProduction',
            value: function generateProduction(Production, Definition, Parts, mappings) {
                  var name = this.getName(),
                      definitions = this.generateDefinitions(Definition, Parts),
                      Node = mappings[name] || NonTerminalNode,
                      production = new Production(name, definitions, Node);

                  return production;
            }
      }, {
            key: 'getName',
            value: function getName() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      productionNameNode = firstChildNode,
                      ///
                  productionNameNodeProductionName = productionNameNode.getProductionName(),
                      name = productionNameNodeProductionName;

                  return name;
            }
      }, {
            key: 'generateDefinitions',
            value: function generateDefinitions(Definition, Parts) {
                  var childNodes = this.getChildNodes(),
                      lastChildNode = arrayUtil.last(childNodes),
                      definitionsNode = lastChildNode,
                      ///
                  definitions = definitionsNode.generateDefinitions(Definition, Parts);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uTm9kZSIsIlByb2R1Y3Rpb24iLCJEZWZpbml0aW9uIiwiUGFydHMiLCJtYXBwaW5ncyIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwiTm9kZSIsInByb2R1Y3Rpb24iLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJwcm9kdWN0aW9uTmFtZU5vZGUiLCJwcm9kdWN0aW9uTmFtZU5vZGVQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwibGFzdENoaWxkTm9kZSIsImxhc3QiLCJkZWZpbml0aW9uc05vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZGlzY2FyZFNlY29uZCIsInByb2R1Y3Rpb25Ob2RlIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHTUUsYzs7Ozs7Ozs7Ozs7K0NBQ2VDLFUsRUFBWUMsVSxFQUFZQyxLLEVBQU9DLFEsRUFBVTtBQUMxRCxzQkFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxzQkFDTUMsY0FBYyxLQUFLQyxtQkFBTCxDQUF5Qk4sVUFBekIsRUFBcUNDLEtBQXJDLENBRHBCO0FBQUEsc0JBRU1NLE9BQU9MLFNBQVNDLElBQVQsS0FBa0JOLGVBRi9CO0FBQUEsc0JBR01XLGFBQWEsSUFBSVQsVUFBSixDQUFlSSxJQUFmLEVBQXFCRSxXQUFyQixFQUFrQ0UsSUFBbEMsQ0FIbkI7O0FBS0EseUJBQU9DLFVBQVA7QUFDRDs7O3NDQUVTO0FBQ1Isc0JBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNQyxpQkFBaUJoQixVQUFVaUIsS0FBVixDQUFnQkgsVUFBaEIsQ0FEdkI7QUFBQSxzQkFFTUkscUJBQXFCRixjQUYzQjtBQUFBLHNCQUU0QztBQUN0Q0cscURBQW1DRCxtQkFBbUJFLGlCQUFuQixFQUh6QztBQUFBLHNCQUlNWixPQUFPVyxnQ0FKYjs7QUFNQSx5QkFBT1gsSUFBUDtBQUNEOzs7Z0RBRW1CSCxVLEVBQVlDLEssRUFBTztBQUNyQyxzQkFBTVEsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01NLGdCQUFnQnJCLFVBQVVzQixJQUFWLENBQWVSLFVBQWYsQ0FEdEI7QUFBQSxzQkFFTVMsa0JBQWtCRixhQUZ4QjtBQUFBLHNCQUV3QztBQUNsQ1gsZ0NBQWNhLGdCQUFnQlosbUJBQWhCLENBQW9DTixVQUFwQyxFQUFnREMsS0FBaEQsQ0FIcEI7O0FBS0EseUJBQU9JLFdBQVA7QUFDRDs7O3VEQUVpQ2MsSyxFQUFPQyxjLEVBQWdCO0FBQ3ZELHNCQUFNWCxhQUFhZCxVQUFVMEIsYUFBVixDQUF3QkYsS0FBeEIsQ0FBbkI7QUFBQSxzQkFDTUcsaUJBQWlCekIsZ0JBQWdCMEIsK0JBQWhCLENBQWdESCxjQUFoRCxFQUFnRVgsVUFBaEUsRUFBNEVYLGNBQTVFLENBRHZCOztBQUdBLHlCQUFPd0IsY0FBUDtBQUNEOzs7O0VBbEMwQnpCLGU7O0FBcUM3QjJCLE9BQU9DLE9BQVAsR0FBaUIzQixjQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUHJvZHVjdGlvbihQcm9kdWN0aW9uLCBEZWZpbml0aW9uLCBQYXJ0cywgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSB0aGlzLmdlbmVyYXRlRGVmaW5pdGlvbnMoRGVmaW5pdGlvbiwgUGFydHMpLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5nc1tuYW1lXSB8fCBOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZU5vZGVQcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lTm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZU5vZGVQcm9kdWN0aW9uTmFtZTtcbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uLCBQYXJ0cykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb2RlID0gbGFzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbnMoRGVmaW5pdGlvbiwgUGFydHMpO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIFByb2R1Y3Rpb25Ob2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25Ob2RlO1xuIl19