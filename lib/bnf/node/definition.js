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
    value: function generateDefinition(Definition, Parts) {
      var childNodes = this.getChildNodes(),
          partNodes = childNodes,
          ///
      parts = partNodes.map(function (partNode) {
        var noWhitespace = false,
            ///
        part = partNode.generatePart(Parts, noWhitespace);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJEZWZpbml0aW9uTm9kZSIsIkRlZmluaXRpb24iLCJQYXJ0cyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicGFydE5vZGVzIiwicGFydHMiLCJtYXAiLCJwYXJ0Tm9kZSIsIm5vV2hpdGVzcGFjZSIsInBhcnQiLCJnZW5lcmF0ZVBhcnQiLCJkZWZpbml0aW9uIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25zTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7dUNBQ2VDLFUsRUFBWUMsSyxFQUFPO0FBQ3BDLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLFlBQVlGLFVBRGxCO0FBQUEsVUFDOEI7QUFDeEJHLGNBQVFELFVBQVVFLEdBQVYsQ0FBYyxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZDLFlBQU1DLGVBQWUsS0FBckI7QUFBQSxZQUE0QjtBQUN0QkMsZUFBT0YsU0FBU0csWUFBVCxDQUFzQlQsS0FBdEIsRUFBNkJPLFlBQTdCLENBRGI7O0FBR0EsZUFBT0MsSUFBUDtBQUNELE9BTE8sQ0FGZDtBQUFBLFVBUU1FLGFBQWEsSUFBSVgsVUFBSixDQUFlSyxLQUFmLENBUm5COztBQVVBLGFBQU9NLFVBQVA7QUFDRDs7OytDQUVpQ0MsSyxFQUFPQyxjLEVBQWdCO0FBQ3ZELFVBQU1YLGFBQWFVLEtBQW5CO0FBQUEsVUFBMEI7QUFDcEJFLHdCQUFrQmpCLGdCQUFnQmtCLCtCQUFoQixDQUFnREYsY0FBaEQsRUFBZ0VYLFVBQWhFLEVBQTRFSCxjQUE1RSxDQUR4Qjs7QUFHQSxhQUFPZSxlQUFQO0FBQ0Q7Ozs7RUFwQjBCakIsZTs7QUF1QjdCbUIsT0FBT0MsT0FBUCxHQUFpQmxCLGNBQWpCIiwiZmlsZSI6ImRlZmluaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERlZmluaXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVEZWZpbml0aW9uKERlZmluaXRpb24sIFBhcnRzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHBhcnRzID0gcGFydE5vZGVzLm1hcChmdW5jdGlvbihwYXJ0Tm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnROb2RlLmdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgRGVmaW5pdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25Ob2RlO1xuIl19