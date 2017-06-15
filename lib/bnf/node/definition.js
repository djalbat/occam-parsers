'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    VerticalSpaceNode = require('../node/verticalSpace'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionNode = function (_NonTerminalNode) {
  _inherits(DefinitionNode, _NonTerminalNode);

  function DefinitionNode() {
    _classCallCheck(this, DefinitionNode);

    return _possibleConstructorReturn(this, (DefinitionNode.__proto__ || Object.getPrototypeOf(DefinitionNode)).apply(this, arguments));
  }

  _createClass(DefinitionNode, [{
    key: 'generateDefinition',
    value: function generateDefinition(Definition, Parts, mappings) {
      var childNodes = this.getChildNodes(),
          partNodes = childNodes,
          ///
      parts = partNodes.map(function (partNode) {
        var part = partNode.generatePart(Parts, mappings);

        return part;
      }),
          definition = new Definition(parts);

      return definition;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var lastNode = last(nodes),
          childNodes = lastNode instanceof VerticalSpaceNode ? arrayUtil.discardLast(nodes) : nodes,
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DefinitionNode);

      return productionsNode;
    }
  }]);

  return DefinitionNode;
}(NonTerminalNode);

module.exports = DefinitionNode;

function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJWZXJ0aWNhbFNwYWNlTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRlZmluaXRpb25Ob2RlIiwiRGVmaW5pdGlvbiIsIlBhcnRzIiwibWFwcGluZ3MiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBhcnROb2RlcyIsInBhcnRzIiwibWFwIiwicGFydE5vZGUiLCJwYXJ0IiwiZ2VuZXJhdGVQYXJ0IiwiZGVmaW5pdGlvbiIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJsYXN0Tm9kZSIsImxhc3QiLCJkaXNjYXJkTGFzdCIsInByb2R1Y3Rpb25zTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsYzs7Ozs7Ozs7Ozs7dUNBQ2VDLFUsRUFBWUMsSyxFQUFPQyxRLEVBQVU7QUFDOUMsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsWUFBWUYsVUFEbEI7QUFBQSxVQUM4QjtBQUN4QkcsY0FBUUQsVUFBVUUsR0FBVixDQUFjLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkMsWUFBTUMsT0FBT0QsU0FBU0UsWUFBVCxDQUFzQlQsS0FBdEIsRUFBNkJDLFFBQTdCLENBQWI7O0FBRUEsZUFBT08sSUFBUDtBQUNELE9BSk8sQ0FGZDtBQUFBLFVBT01FLGFBQWEsSUFBSVgsVUFBSixDQUFlTSxLQUFmLENBUG5COztBQVNBLGFBQU9LLFVBQVA7QUFDRDs7OytDQUVpQ0MsSyxFQUFPQyxjLEVBQWdCO0FBQ3ZELFVBQU1DLFdBQVdDLEtBQUtILEtBQUwsQ0FBakI7QUFBQSxVQUNNVCxhQUFjVyxvQkFBb0JqQixpQkFBckIsR0FDRUYsVUFBVXFCLFdBQVYsQ0FBc0JKLEtBQXRCLENBREYsR0FFSUEsS0FIdkI7QUFBQSxVQUlNSyxrQkFBa0JuQixnQkFBZ0JvQiwrQkFBaEIsQ0FBZ0RMLGNBQWhELEVBQWdFVixVQUFoRSxFQUE0RUosY0FBNUUsQ0FKeEI7O0FBTUEsYUFBT2tCLGVBQVA7QUFDRDs7OztFQXRCMEJuQixlOztBQXlCN0JxQixPQUFPQyxPQUFQLEdBQWlCckIsY0FBakI7O0FBRUEsU0FBU2dCLElBQVQsQ0FBY00sS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6ImRlZmluaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFZlcnRpY2FsU3BhY2VOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS92ZXJ0aWNhbFNwYWNlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEZWZpbml0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlRGVmaW5pdGlvbihEZWZpbml0aW9uLCBQYXJ0cywgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcGFydE5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgcGFydHMgPSBwYXJ0Tm9kZXMubWFwKGZ1bmN0aW9uKHBhcnROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydE5vZGUuZ2VuZXJhdGVQYXJ0KFBhcnRzLCBtYXBwaW5ncyk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGxhc3ROb2RlID0gbGFzdChub2RlcyksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IChsYXN0Tm9kZSBpbnN0YW5jZW9mIFZlcnRpY2FsU3BhY2VOb2RlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlVdGlsLmRpc2NhcmRMYXN0KG5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlcyxcbiAgICAgICAgICBwcm9kdWN0aW9uc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgRGVmaW5pdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25Ob2RlO1xuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIl19