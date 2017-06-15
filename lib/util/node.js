'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../common/node/terminal'),
    NonTerminalNode = require('../common/node/nonTerminal');

var nodeUtil = function () {
  function nodeUtil() {
    _classCallCheck(this, nodeUtil);
  }

  _createClass(nodeUtil, null, [{
    key: 'isNodeTerminalNode',
    value: function isNodeTerminalNode(node) {
      var nodeTerminalNode = node instanceof TerminalNode;

      return nodeTerminalNode;
    }
  }, {
    key: 'isNodeNonTerminalNode',
    value: function isNodeNonTerminalNode(node) {
      var nodeNonTerminalNode = node instanceof NonTerminalNode;

      return nodeNonTerminalNode;
    }
  }, {
    key: 'isNodeNoWhitespaceNode',
    value: function isNodeNoWhitespaceNode(node) {
      var nodeNoWhitespaceNode = false;

      var nodeTerminalNode = nodeUtil.isNodeTerminalNode(node);

      if (nodeTerminalNode) {
        var terminalNode = node,
            terminalNodeContent = terminalNode.getContent();

        nodeNoWhitespaceNode = terminalNodeContent === "<NO_WHITESPACE>"; ///
      }

      return nodeNoWhitespaceNode;
    }
  }, {
    key: 'quantifiersFromQuantifiersNode',
    value: function quantifiersFromQuantifiersNode(quantifiersNode) {
      var quantifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var quantifier = quantifierFromQuantifiersNode(quantifiersNode);

      quantifiers.push(quantifier);

      var quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
          quantifiersNodeChildNodesLength = quantifiersNodeChildNodes.length;

      if (quantifiersNodeChildNodesLength === 2) {
        var secondQuantifiersNodeChildNode = second(quantifiersNodeChildNodes);

        quantifiersNode = secondQuantifiersNodeChildNode; ///

        quantifiers = nodeUtil.quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
      }

      return quantifiers;
    }
  }]);

  return nodeUtil;
}();

module.exports = nodeUtil;

function quantifierFromQuantifiersNode(quantifiersNode) {
  var quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
      firstQuantifiersNodeChildNode = first(quantifiersNodeChildNodes),
      firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
      quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL25vZGUuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vZGVVdGlsIiwibm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwibm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzIiwicXVhbnRpZmllciIsInF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlIiwicHVzaCIsInF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInNlY29uZFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSIsInNlY29uZCIsInF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLHlCQUFSLENBQXJCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLDRCQUFSLENBRHhCOztJQUdNRSxROzs7Ozs7O3VDQUNzQkMsSSxFQUFNO0FBQzlCLFVBQU1DLG1CQUFvQkQsZ0JBQWdCSixZQUExQzs7QUFFQSxhQUFPSyxnQkFBUDtBQUNEOzs7MENBRTRCRCxJLEVBQU07QUFDakMsVUFBTUUsc0JBQXVCRixnQkFBZ0JGLGVBQTdDOztBQUVBLGFBQU9JLG1CQUFQO0FBQ0Q7OzsyQ0FFNkJGLEksRUFBTTtBQUNsQyxVQUFJRyx1QkFBdUIsS0FBM0I7O0FBRUEsVUFBTUYsbUJBQW1CRixTQUFTSyxrQkFBVCxDQUE0QkosSUFBNUIsQ0FBekI7O0FBRUEsVUFBSUMsZ0JBQUosRUFBc0I7QUFDcEIsWUFBTUksZUFBZUwsSUFBckI7QUFBQSxZQUNNTSxzQkFBc0JELGFBQWFFLFVBQWIsRUFENUI7O0FBR0FKLCtCQUF3Qkcsd0JBQXdCLGlCQUFoRCxDQUpvQixDQUlnRDtBQUNyRTs7QUFFRCxhQUFPSCxvQkFBUDtBQUNEOzs7bURBRXFDSyxlLEVBQW1DO0FBQUEsVUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7O0FBQ3ZFLFVBQU1DLGFBQWFDLDhCQUE4QkgsZUFBOUIsQ0FBbkI7O0FBRUFDLGtCQUFZRyxJQUFaLENBQWlCRixVQUFqQjs7QUFFQSxVQUFNRyw0QkFBNEJMLGdCQUFnQk0sYUFBaEIsRUFBbEM7QUFBQSxVQUNNQyxrQ0FBbUNGLDBCQUEwQkcsTUFEbkU7O0FBR0EsVUFBSUQsb0NBQW9DLENBQXhDLEVBQTJDO0FBQ3pDLFlBQU1FLGlDQUFpQ0MsT0FBT0wseUJBQVAsQ0FBdkM7O0FBRUFMLDBCQUFrQlMsOEJBQWxCLENBSHlDLENBR1M7O0FBRWxEUixzQkFBY1YsU0FBU29CLDhCQUFULENBQXdDWCxlQUF4QyxFQUF5REMsV0FBekQsQ0FBZDtBQUNEOztBQUVELGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUJ0QixRQUFqQjs7QUFFQSxTQUFTWSw2QkFBVCxDQUF1Q0gsZUFBdkMsRUFBd0Q7QUFDdEQsTUFBTUssNEJBQTRCTCxnQkFBZ0JNLGFBQWhCLEVBQWxDO0FBQUEsTUFDTVEsZ0NBQWdDQyxNQUFNVix5QkFBTixDQUR0QztBQUFBLE1BRU1XLHVDQUF1Q0YsOEJBQThCZixVQUE5QixFQUY3QztBQUFBLE1BR01HLGFBQWFjLG9DQUhuQjs7QUFLQSxTQUFPZCxVQUFQO0FBQ0Q7O0FBRUQsU0FBU2EsS0FBVCxDQUFlRSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU1AsTUFBVCxDQUFnQk8sS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3Mgbm9kZVV0aWwge1xuICBzdGF0aWMgaXNOb2RlVGVybWluYWxOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gKG5vZGUgaW5zdGFuY2VvZiBUZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVUZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlTm9uVGVybWluYWxOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gKG5vZGUgaW5zdGFuY2VvZiBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVOb1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG4gIFxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlVXRpbC5pc05vZGVUZXJtaW5hbE5vZGUobm9kZSk7XG4gIFxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG4gIFxuICAgICAgbm9kZU5vV2hpdGVzcGFjZU5vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gXCI8Tk9fV0hJVEVTUEFDRT5cIik7IC8vL1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG5vZGVOb1doaXRlc3BhY2VOb2RlO1xuICB9XG4gIFxuICBzdGF0aWMgcXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSwgcXVhbnRpZmllcnMgPSBbXSkge1xuICAgIGNvbnN0IHF1YW50aWZpZXIgPSBxdWFudGlmaWVyRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpO1xuXG4gICAgcXVhbnRpZmllcnMucHVzaChxdWFudGlmaWVyKTtcblxuICAgIGNvbnN0IHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMgPSBxdWFudGlmaWVyc05vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXNMZW5ndGggPSAgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3Qgc2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlID0gc2Vjb25kKHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMpO1xuXG4gICAgICBxdWFudGlmaWVyc05vZGUgPSBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBxdWFudGlmaWVycyA9IG5vZGVVdGlsLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUsIHF1YW50aWZpZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVhbnRpZmllcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuZnVuY3Rpb24gcXVhbnRpZmllckZyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKSB7XG4gIGNvbnN0IHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMgPSBxdWFudGlmaWVyc05vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSA9IGZpcnN0KHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZUNvbnRlbnQgPSBmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHF1YW50aWZpZXIgPSBmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZUNvbnRlbnQ7XG5cbiAgcmV0dXJuIHF1YW50aWZpZXI7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19