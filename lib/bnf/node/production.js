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
                  name = productionNameNode.getName();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uTm9kZSIsIlByb2R1Y3Rpb24iLCJEZWZpbml0aW9uIiwiUGFydHMiLCJtYXBwaW5ncyIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwiTm9kZSIsInByb2R1Y3Rpb24iLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJwcm9kdWN0aW9uTmFtZU5vZGUiLCJsYXN0Q2hpbGROb2RlIiwibGFzdCIsImRlZmluaXRpb25zTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJkaXNjYXJkU2Vjb25kIiwicHJvZHVjdGlvbk5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7O0lBR01FLGM7Ozs7Ozs7Ozs7OytDQUNlQyxVLEVBQVlDLFUsRUFBWUMsSyxFQUFPQyxRLEVBQVU7QUFDMUQsc0JBQU1DLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsc0JBQ01DLGNBQWMsS0FBS0MsbUJBQUwsQ0FBeUJOLFVBQXpCLEVBQXFDQyxLQUFyQyxDQURwQjtBQUFBLHNCQUVNTSxPQUFPTCxTQUFTQyxJQUFULEtBQWtCTixlQUYvQjtBQUFBLHNCQUdNVyxhQUFhLElBQUlULFVBQUosQ0FBZUksSUFBZixFQUFxQkUsV0FBckIsRUFBa0NFLElBQWxDLENBSG5COztBQUtBLHlCQUFPQyxVQUFQO0FBQ0Q7OztzQ0FFUztBQUNSLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCQyxNQUFNSCxVQUFOLENBRHZCO0FBQUEsc0JBRU1JLHFCQUFxQkYsY0FGM0I7QUFBQSxzQkFFNEM7QUFDdENSLHlCQUFPVSxtQkFBbUJULE9BQW5CLEVBSGI7O0FBS0EseUJBQU9ELElBQVA7QUFDRDs7O2dEQUVtQkgsVSxFQUFZQyxLLEVBQU87QUFDckMsc0JBQU1RLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNSSxnQkFBZ0JDLEtBQUtOLFVBQUwsQ0FEdEI7QUFBQSxzQkFFTU8sa0JBQWtCRixhQUZ4QjtBQUFBLHNCQUV3QztBQUNsQ1QsZ0NBQWNXLGdCQUFnQlYsbUJBQWhCLENBQW9DTixVQUFwQyxFQUFnREMsS0FBaEQsQ0FIcEI7O0FBS0EseUJBQU9JLFdBQVA7QUFDRDs7O3VEQUVpQ1ksSyxFQUFPQyxjLEVBQWdCO0FBQ3ZELHNCQUFNVCxhQUFhZCxVQUFVd0IsYUFBVixDQUF3QkYsS0FBeEIsQ0FBbkI7QUFBQSxzQkFDTUcsaUJBQWlCdkIsZ0JBQWdCd0IsK0JBQWhCLENBQWdESCxjQUFoRCxFQUFnRVQsVUFBaEUsRUFBNEVYLGNBQTVFLENBRHZCOztBQUdBLHlCQUFPc0IsY0FBUDtBQUNEOzs7O0VBakMwQnZCLGU7O0FBb0M3QnlCLE9BQU9DLE9BQVAsR0FBaUJ6QixjQUFqQjs7QUFFQSxTQUFTYyxLQUFULENBQWVZLEtBQWYsRUFBc0I7QUFBRSxhQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7QUFFMUMsU0FBU1QsSUFBVCxDQUFjUyxLQUFkLEVBQXFCO0FBQUUsYUFBT0EsTUFBTUEsTUFBTUMsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUMiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVByb2R1Y3Rpb24oUHJvZHVjdGlvbiwgRGVmaW5pdGlvbiwgUGFydHMsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gdGhpcy5nZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24sIFBhcnRzKSxcbiAgICAgICAgICBOb2RlID0gbWFwcGluZ3NbbmFtZV0gfHwgTm9uVGVybWluYWxOb2RlLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWVOb2RlLmdldE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uLCBQYXJ0cykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc05vZGUgPSBsYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc05vZGUuZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uLCBQYXJ0cyk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZFNlY29uZChub2RlcyksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgUHJvZHVjdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25Ob2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIl19