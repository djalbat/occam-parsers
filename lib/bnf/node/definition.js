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
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = nodes,
          ///
      definitionNode = NonTerminalNode.fromRuleNameAndChildNodes(DefinitionNode, ruleName, childNodes);

      return definitionNode;
    }
  }]);

  return DefinitionNode;
}(NonTerminalNode);

module.exports = DefinitionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJEZWZpbml0aW9uTm9kZSIsIkRlZmluaXRpb24iLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBhcnROb2RlcyIsInBhcnRzIiwibWFwIiwicGFydE5vZGUiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiZ2VuZXJhdGVQYXJ0IiwiZGVmaW5pdGlvbiIsIm5vZGVzIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4Qjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7dUNBQ2VDLFUsRUFBWTtBQUM3QixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxZQUFZRixVQURsQjtBQUFBLFVBQzhCO0FBQ3hCRyxjQUFRRCxVQUFVRSxHQUFWLENBQWMsVUFBU0MsUUFBVCxFQUFtQjtBQUN2QyxZQUFNQyxlQUFlLEtBQXJCO0FBQUEsWUFBNEI7QUFDdEJDLGVBQU9GLFNBQVNHLFlBQVQsQ0FBc0JGLFlBQXRCLENBRGI7O0FBR0EsZUFBT0MsSUFBUDtBQUNELE9BTE8sQ0FGZDtBQUFBLFVBUU1FLGFBQWEsSUFBSVYsVUFBSixDQUFlSSxLQUFmLENBUm5COztBQVVBLGFBQU9NLFVBQVA7QUFDRDs7O3lDQUUyQkMsSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTVgsYUFBYVUsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQkUsdUJBQWlCaEIsZ0JBQWdCaUIseUJBQWhCLENBQTBDZixjQUExQyxFQUEwRGEsUUFBMUQsRUFBb0VYLFVBQXBFLENBRHZCOztBQUdBLGFBQU9ZLGNBQVA7QUFDRDs7OztFQXBCMEJoQixlOztBQXVCN0JrQixPQUFPQyxPQUFQLEdBQWlCakIsY0FBakIiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGVmaW5pdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb24oRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IHBhcnROb2Rlcy5tYXAoZnVuY3Rpb24ocGFydE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0Tm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERlZmluaXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbk5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uTm9kZTtcbiJdfQ==