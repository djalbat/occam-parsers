'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Definition = require('../definition'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(DefinitionNode, _NonTerminalNode);

  function DefinitionNode() {
    _classCallCheck(this, DefinitionNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionNode).apply(this, arguments));
  }

  _createClass(DefinitionNode, [{
    key: "generateDefinition",
    value: function generateDefinition() {
      var childNodes = this.getChildNodes(),
          partNodes = childNodes,
          ///
      lookAhead = false,
          ///
      parts = partNodes.map(function (partNode) {
        var part = partNode.generatePart(lookAhead);
        return part;
      }),
          definition = new Definition(parts);
      return definition;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(DefinitionNode, ruleName, childNodes);
    }
  }]);

  return DefinitionNode;
}(NonTerminalNode);

module.exports = DefinitionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJEZWZpbml0aW9uTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicGFydE5vZGVzIiwibG9va0FoZWFkIiwicGFydHMiLCJtYXAiLCJwYXJ0Tm9kZSIsInBhcnQiLCJnZW5lcmF0ZVBhcnQiLCJkZWZpbml0aW9uIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUExQjtBQUFBLElBQ01DLGVBQWUsR0FBR0QsT0FBTyxDQUFDLCtCQUFELENBRC9COztJQUdNRSxjOzs7Ozs7Ozs7Ozt5Q0FDaUI7QUFDbkIsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxTQUFTLEdBQUdGLFVBRGxCO0FBQUEsVUFDOEI7QUFDeEJHLE1BQUFBLFNBQVMsR0FBRyxLQUZsQjtBQUFBLFVBRTBCO0FBQ3BCQyxNQUFBQSxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0csR0FBVixDQUFjLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkMsWUFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLFlBQVQsQ0FBc0JMLFNBQXRCLENBQWI7QUFFQSxlQUFPSSxJQUFQO0FBQ0QsT0FKTyxDQUhkO0FBQUEsVUFRTUUsVUFBVSxHQUFHLElBQUliLFVBQUosQ0FBZVEsS0FBZixDQVJuQjtBQVVBLGFBQU9LLFVBQVA7QUFDRDs7OzhDQUVnQ0MsUSxFQUFVVixVLEVBQVk7QUFBRSxhQUFPRixlQUFlLENBQUNhLHlCQUFoQixDQUEwQ1osY0FBMUMsRUFBMERXLFFBQTFELEVBQW9FVixVQUFwRSxDQUFQO0FBQXlGOzs7O0VBZnZIRixlOztBQWtCN0JjLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEZWZpbml0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlRGVmaW5pdGlvbigpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcGFydE5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBwYXJ0cyA9IHBhcnROb2Rlcy5tYXAoZnVuY3Rpb24ocGFydE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0Tm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRGVmaW5pdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25Ob2RlO1xuIl19