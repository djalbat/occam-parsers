'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionNode = function (_NonTerminalNode) {
  _inherits(DefinitionNode, _NonTerminalNode);

  function DefinitionNode() {
    _classCallCheck(this, DefinitionNode);

    return _possibleConstructorReturn(this, (DefinitionNode.__proto__ || Object.getPrototypeOf(DefinitionNode)).apply(this, arguments));
  }

  _createClass(DefinitionNode, [{
    key: 'generateDefinition',
    value: function generateDefinition(Definition) {
      var childNodes = this.getChildNodes(),
          partNodes = childNodes,
          ///
      parts = partNodes.map(function (partNode) {
        var noWhitespace = false,
            ///
        part = partNode.generatePart(noWhitespace);

        return part;
      }),
          definition = new Definition(parts);

      return definition;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = nodes,
          ///
      productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DefinitionNode);

      return productionsNode;
    }
  }]);

  return DefinitionNode;
}(NonTerminalNode);

module.exports = DefinitionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL2RlZmluaXRpb24uanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkRlZmluaXRpb25Ob2RlIiwiRGVmaW5pdGlvbiIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicGFydE5vZGVzIiwicGFydHMiLCJtYXAiLCJwYXJ0Tm9kZSIsIm5vV2hpdGVzcGFjZSIsInBhcnQiLCJnZW5lcmF0ZVBhcnQiLCJkZWZpbml0aW9uIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25zTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7dUNBQ2VDLFUsRUFBWTtBQUM3QixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxZQUFZRixVQURsQjtBQUFBLFVBQzhCO0FBQ3hCRyxjQUFRRCxVQUFVRSxHQUFWLENBQWMsVUFBU0MsUUFBVCxFQUFtQjtBQUN2QyxZQUFNQyxlQUFlLEtBQXJCO0FBQUEsWUFBNEI7QUFDdEJDLGVBQU9GLFNBQVNHLFlBQVQsQ0FBc0JGLFlBQXRCLENBRGI7O0FBR0EsZUFBT0MsSUFBUDtBQUNELE9BTE8sQ0FGZDtBQUFBLFVBUU1FLGFBQWEsSUFBSVYsVUFBSixDQUFlSSxLQUFmLENBUm5COztBQVVBLGFBQU9NLFVBQVA7QUFDRDs7OytDQUVpQ0MsSyxFQUFPQyxjLEVBQWdCO0FBQ3ZELFVBQU1YLGFBQWFVLEtBQW5CO0FBQUEsVUFBMEI7QUFDcEJFLHdCQUFrQmhCLGdCQUFnQmlCLCtCQUFoQixDQUFnREYsY0FBaEQsRUFBZ0VYLFVBQWhFLEVBQTRFRixjQUE1RSxDQUR4Qjs7QUFHQSxhQUFPYyxlQUFQO0FBQ0Q7Ozs7RUFwQjBCaEIsZTs7QUF1QjdCa0IsT0FBT0MsT0FBUCxHQUFpQmpCLGNBQWpCIiwiZmlsZSI6ImRlZmluaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERlZmluaXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVEZWZpbml0aW9uKERlZmluaXRpb24pIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcGFydE5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgcGFydHMgPSBwYXJ0Tm9kZXMubWFwKGZ1bmN0aW9uKHBhcnROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydE5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbnNOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIERlZmluaXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uc05vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uTm9kZTtcbiJdfQ==