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
                      firstChildNode = first(childNodes),
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
                      lastChildNode = last(childNodes),
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

function first(array) {
      return array[0];
}

function last(array) {
      return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uTm9kZSIsIlByb2R1Y3Rpb24iLCJEZWZpbml0aW9uIiwiUGFydHMiLCJtYXBwaW5ncyIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwiTm9kZSIsInByb2R1Y3Rpb24iLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJwcm9kdWN0aW9uTmFtZU5vZGUiLCJwcm9kdWN0aW9uTmFtZU5vZGVQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwibGFzdENoaWxkTm9kZSIsImxhc3QiLCJkZWZpbml0aW9uc05vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZGlzY2FyZFNlY29uZCIsInByb2R1Y3Rpb25Ob2RlIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxjOzs7Ozs7Ozs7OzsrQ0FDZUMsVSxFQUFZQyxVLEVBQVlDLEssRUFBT0MsUSxFQUFVO0FBQzFELHNCQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLHNCQUNNQyxjQUFjLEtBQUtDLG1CQUFMLENBQXlCTixVQUF6QixFQUFxQ0MsS0FBckMsQ0FEcEI7QUFBQSxzQkFFTU0sT0FBT0wsU0FBU0MsSUFBVCxLQUFrQk4sZUFGL0I7QUFBQSxzQkFHTVcsYUFBYSxJQUFJVCxVQUFKLENBQWVJLElBQWYsRUFBcUJFLFdBQXJCLEVBQWtDRSxJQUFsQyxDQUhuQjs7QUFLQSx5QkFBT0MsVUFBUDtBQUNEOzs7c0NBRVM7QUFDUixzQkFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLGlCQUFpQkMsTUFBTUgsVUFBTixDQUR2QjtBQUFBLHNCQUVNSSxxQkFBcUJGLGNBRjNCO0FBQUEsc0JBRTRDO0FBQ3RDRyxxREFBbUNELG1CQUFtQkUsaUJBQW5CLEVBSHpDO0FBQUEsc0JBSU1aLE9BQU9XLGdDQUpiOztBQU1BLHlCQUFPWCxJQUFQO0FBQ0Q7OztnREFFbUJILFUsRUFBWUMsSyxFQUFPO0FBQ3JDLHNCQUFNUSxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTU0sZ0JBQWdCQyxLQUFLUixVQUFMLENBRHRCO0FBQUEsc0JBRU1TLGtCQUFrQkYsYUFGeEI7QUFBQSxzQkFFd0M7QUFDbENYLGdDQUFjYSxnQkFBZ0JaLG1CQUFoQixDQUFvQ04sVUFBcEMsRUFBZ0RDLEtBQWhELENBSHBCOztBQUtBLHlCQUFPSSxXQUFQO0FBQ0Q7Ozt1REFFaUNjLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxzQkFBTVgsYUFBYWQsVUFBVTBCLGFBQVYsQ0FBd0JGLEtBQXhCLENBQW5CO0FBQUEsc0JBQ01HLGlCQUFpQnpCLGdCQUFnQjBCLCtCQUFoQixDQUFnREgsY0FBaEQsRUFBZ0VYLFVBQWhFLEVBQTRFWCxjQUE1RSxDQUR2Qjs7QUFHQSx5QkFBT3dCLGNBQVA7QUFDRDs7OztFQWxDMEJ6QixlOztBQXFDN0IyQixPQUFPQyxPQUFQLEdBQWlCM0IsY0FBakI7O0FBRUEsU0FBU2MsS0FBVCxDQUFlYyxLQUFmLEVBQXNCO0FBQUUsYUFBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7O0FBRTFDLFNBQVNULElBQVQsQ0FBY1MsS0FBZCxFQUFxQjtBQUFFLGFBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQcm9kdWN0aW9uKFByb2R1Y3Rpb24sIERlZmluaXRpb24sIFBhcnRzLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uLCBQYXJ0cyksXG4gICAgICAgICAgTm9kZSA9IG1hcHBpbmdzW25hbWVdIHx8IE5vblRlcm1pbmFsTm9kZSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVOb2RlUHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZU5vZGUuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWVOb2RlUHJvZHVjdGlvbk5hbWU7XG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoRGVmaW5pdGlvbiwgUGFydHMpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb2RlID0gbGFzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbnMoRGVmaW5pdGlvbiwgUGFydHMpO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIFByb2R1Y3Rpb25Ob2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25Ob2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==