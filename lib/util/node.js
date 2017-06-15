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
    key: 'isNodeQuantifierNode',
    value: function isNodeQuantifierNode(node) {
      var nodeQuantifierNode = false;

      var loneGrandChildTerminalNode = nodeUtil.loneGrandChildTerminalNodeFromNode(node);

      if (loneGrandChildTerminalNode !== null) {
        var loneGrandChildTerminalNodeContent = loneGrandChildTerminalNode.getContent();

        nodeQuantifierNode = loneGrandChildTerminalNodeContent === "?" || loneGrandChildTerminalNodeContent === "*" || loneGrandChildTerminalNodeContent === "+";
      }

      return nodeQuantifierNode;
    }
  }, {
    key: 'contentFromQuantifierNode',
    value: function contentFromQuantifierNode(quantifierNode) {
      var quantifierNodeLoneGrandChildTerminalNode = nodeUtil.loneGrandChildTerminalNodeFromNode(quantifierNode),
          quantifierNodeLoneGrandChildTerminalNodeContent = quantifierNodeLoneGrandChildTerminalNode.getContent(),
          content = quantifierNodeLoneGrandChildTerminalNodeContent; ///

      return content;
    }
  }, {
    key: 'loneGrandChildTerminalNodeFromNode',
    value: function loneGrandChildTerminalNodeFromNode(node) {
      var loneGrandChildTerminalNode = null;

      var nodeNonTerminalNode = nodeUtil.isNodeNonTerminalNode(node);

      if (nodeNonTerminalNode) {
        var nonTerminalNode = node,
            ///
        nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes(),
            nonTerminalNodeChildNodesLength = nonTerminalNodeChildNodes.length;

        if (nonTerminalNodeChildNodesLength === 1) {
          var firstNonTerminalNodeChildNode = first(nonTerminalNodeChildNodes),
              firstNonTerminalNodeChildNodeTerminalNode = nodeUtil.isNodeTerminalNode(firstNonTerminalNodeChildNode);

          if (firstNonTerminalNodeChildNodeTerminalNode) {
            loneGrandChildTerminalNode = firstNonTerminalNodeChildNode;
          }
        }
      }

      return loneGrandChildTerminalNode;
    }
  }]);

  return nodeUtil;
}();

module.exports = nodeUtil;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL25vZGUuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vZGVVdGlsIiwibm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwibm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVRdWFudGlmaWVyTm9kZSIsImxvbmVHcmFuZENoaWxkVGVybWluYWxOb2RlIiwibG9uZUdyYW5kQ2hpbGRUZXJtaW5hbE5vZGVGcm9tTm9kZSIsImxvbmVHcmFuZENoaWxkVGVybWluYWxOb2RlQ29udGVudCIsInF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGVMb25lR3JhbmRDaGlsZFRlcm1pbmFsTm9kZSIsInF1YW50aWZpZXJOb2RlTG9uZUdyYW5kQ2hpbGRUZXJtaW5hbE5vZGVDb250ZW50IiwiY29udGVudCIsImlzTm9kZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEseUJBQVIsQ0FBckI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsNEJBQVIsQ0FEeEI7O0lBR01FLFE7Ozs7Ozs7dUNBQ3NCQyxJLEVBQU07QUFDOUIsVUFBTUMsbUJBQW9CRCxnQkFBZ0JKLFlBQTFDOztBQUVBLGFBQU9LLGdCQUFQO0FBQ0Q7OzswQ0FFNEJELEksRUFBTTtBQUNqQyxVQUFNRSxzQkFBdUJGLGdCQUFnQkYsZUFBN0M7O0FBRUEsYUFBT0ksbUJBQVA7QUFDRDs7OzJDQUU2QkYsSSxFQUFNO0FBQ2xDLFVBQUlHLHVCQUF1QixLQUEzQjs7QUFFQSxVQUFNRixtQkFBbUJGLFNBQVNLLGtCQUFULENBQTRCSixJQUE1QixDQUF6Qjs7QUFFQSxVQUFJQyxnQkFBSixFQUFzQjtBQUNwQixZQUFNSSxlQUFlTCxJQUFyQjtBQUFBLFlBQ01NLHNCQUFzQkQsYUFBYUUsVUFBYixFQUQ1Qjs7QUFHQUosK0JBQXdCRyx3QkFBd0IsaUJBQWhELENBSm9CLENBSWdEO0FBQ3JFOztBQUVELGFBQU9ILG9CQUFQO0FBQ0Q7Ozt5Q0FFMkJILEksRUFBTTtBQUNoQyxVQUFJUSxxQkFBcUIsS0FBekI7O0FBRUEsVUFBTUMsNkJBQTZCVixTQUFTVyxrQ0FBVCxDQUE0Q1YsSUFBNUMsQ0FBbkM7O0FBRUEsVUFBSVMsK0JBQStCLElBQW5DLEVBQXlDO0FBQ3ZDLFlBQU1FLG9DQUFvQ0YsMkJBQTJCRixVQUEzQixFQUExQzs7QUFFQUMsNkJBQXNCRyxzQ0FBc0MsR0FBdkMsSUFDQ0Esc0NBQXNDLEdBRHZDLElBRUNBLHNDQUFzQyxHQUY1RDtBQUdEOztBQUVELGFBQU9ILGtCQUFQO0FBQ0Q7Ozs4Q0FFZ0NJLGMsRUFBZ0I7QUFDL0MsVUFBTUMsMkNBQTJDZCxTQUFTVyxrQ0FBVCxDQUE0Q0UsY0FBNUMsQ0FBakQ7QUFBQSxVQUNNRSxrREFBa0RELHlDQUF5Q04sVUFBekMsRUFEeEQ7QUFBQSxVQUVNUSxVQUFVRCwrQ0FGaEIsQ0FEK0MsQ0FHbUI7O0FBRWxFLGFBQU9DLE9BQVA7QUFDRDs7O3VEQUV5Q2YsSSxFQUFNO0FBQzlDLFVBQUlTLDZCQUE2QixJQUFqQzs7QUFFQSxVQUFNUCxzQkFBc0JILFNBQVNpQixxQkFBVCxDQUErQmhCLElBQS9CLENBQTVCOztBQUVBLFVBQUlFLG1CQUFKLEVBQXlCO0FBQ3ZCLFlBQU1lLGtCQUFrQmpCLElBQXhCO0FBQUEsWUFBOEI7QUFDeEJrQixvQ0FBNEJELGdCQUFnQkUsYUFBaEIsRUFEbEM7QUFBQSxZQUVNQyxrQ0FBa0NGLDBCQUEwQkcsTUFGbEU7O0FBSUEsWUFBSUQsb0NBQW9DLENBQXhDLEVBQTJDO0FBQ3pDLGNBQU1FLGdDQUFnQ0MsTUFBTUwseUJBQU4sQ0FBdEM7QUFBQSxjQUNNTSw0Q0FBNEN6QixTQUFTSyxrQkFBVCxDQUE0QmtCLDZCQUE1QixDQURsRDs7QUFHQSxjQUFJRSx5Q0FBSixFQUErQztBQUM3Q2YseUNBQTZCYSw2QkFBN0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT2IsMEJBQVA7QUFDRDs7Ozs7O0FBR0hnQixPQUFPQyxPQUFQLEdBQWlCM0IsUUFBakI7O0FBRUEsU0FBU3dCLEtBQVQsQ0FBZUksS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6Im5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBub2RlVXRpbCB7XG4gIHN0YXRpYyBpc05vZGVUZXJtaW5hbE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSAobm9kZSBpbnN0YW5jZW9mIFRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZVRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVOb25UZXJtaW5hbE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSAobm9kZSBpbnN0YW5jZW9mIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZU5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVOb1doaXRlc3BhY2VOb2RlKG5vZGUpIHtcbiAgICBsZXQgbm9kZU5vV2hpdGVzcGFjZU5vZGUgPSBmYWxzZTtcbiAgXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGVVdGlsLmlzTm9kZVRlcm1pbmFsTm9kZShub2RlKTtcbiAgXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcbiAgXG4gICAgICBub2RlTm9XaGl0ZXNwYWNlTm9kZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBcIjxOT19XSElURVNQQUNFPlwiKTsgLy8vXG4gICAgfVxuICBcbiAgICByZXR1cm4gbm9kZU5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cbiAgXG4gIHN0YXRpYyBpc05vZGVRdWFudGlmaWVyTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVRdWFudGlmaWVyTm9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9uZUdyYW5kQ2hpbGRUZXJtaW5hbE5vZGUgPSBub2RlVXRpbC5sb25lR3JhbmRDaGlsZFRlcm1pbmFsTm9kZUZyb21Ob2RlKG5vZGUpO1xuICAgIFxuICAgIGlmIChsb25lR3JhbmRDaGlsZFRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbG9uZUdyYW5kQ2hpbGRUZXJtaW5hbE5vZGVDb250ZW50ID0gbG9uZUdyYW5kQ2hpbGRUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBub2RlUXVhbnRpZmllck5vZGUgPSAobG9uZUdyYW5kQ2hpbGRUZXJtaW5hbE5vZGVDb250ZW50ID09PSBcIj9cIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb25lR3JhbmRDaGlsZFRlcm1pbmFsTm9kZUNvbnRlbnQgPT09IFwiKlwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxvbmVHcmFuZENoaWxkVGVybWluYWxOb2RlQ29udGVudCA9PT0gXCIrXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlUXVhbnRpZmllck5vZGU7XG4gIH1cblxuICBzdGF0aWMgY29udGVudEZyb21RdWFudGlmaWVyTm9kZShxdWFudGlmaWVyTm9kZSkge1xuICAgIGNvbnN0IHF1YW50aWZpZXJOb2RlTG9uZUdyYW5kQ2hpbGRUZXJtaW5hbE5vZGUgPSBub2RlVXRpbC5sb25lR3JhbmRDaGlsZFRlcm1pbmFsTm9kZUZyb21Ob2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICBxdWFudGlmaWVyTm9kZUxvbmVHcmFuZENoaWxkVGVybWluYWxOb2RlQ29udGVudCA9IHF1YW50aWZpZXJOb2RlTG9uZUdyYW5kQ2hpbGRUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBxdWFudGlmaWVyTm9kZUxvbmVHcmFuZENoaWxkVGVybWluYWxOb2RlQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBsb25lR3JhbmRDaGlsZFRlcm1pbmFsTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgICBsZXQgbG9uZUdyYW5kQ2hpbGRUZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGVVdGlsLmlzTm9kZU5vblRlcm1pbmFsTm9kZShub2RlKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGZpcnN0KG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgICBmaXJzdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IG5vZGVVdGlsLmlzTm9kZVRlcm1pbmFsTm9kZShmaXJzdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZmlyc3ROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBsb25lR3JhbmRDaGlsZFRlcm1pbmFsTm9kZSA9IGZpcnN0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvbmVHcmFuZENoaWxkVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19