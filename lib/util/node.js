'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array'),
    TerminalNode = require('../common/node/terminal'),
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

        nodeNoWhitespaceNode = terminalNodeContent === '<NO_WHITESPACE>'; ///
      }

      return nodeNoWhitespaceNode;
    }
  }, {
    key: 'isNodeChoiceNode',
    value: function isNodeChoiceNode(node) {
      var nodeNoChoiceNode = false;

      var nodeTerminalNode = nodeUtil.isNodeTerminalNode(node);

      if (nodeTerminalNode) {
        var terminalNode = node,
            terminalNodeContent = terminalNode.getContent();

        nodeNoChoiceNode = terminalNodeContent === '|';
      }

      return nodeNoChoiceNode;
    }
  }, {
    key: 'isNodeQuantifiersNode',
    value: function isNodeQuantifiersNode(node) {
      var nodeQuantifiersNode = false;

      var nodeNonTerminalNode = nodeUtil.isNodeNonTerminalNode(node);

      if (nodeNonTerminalNode) {
        var nonTerminalNode = node,
            ///
        childNodes = nonTerminalNode.getChildNodes(),
            firstChildNode = arrayUtil.first(childNodes),
            firstChildNodeTerminalNode = nodeUtil.isNodeTerminalNode(firstChildNode);

        if (firstChildNodeTerminalNode) {
          var terminalNode = firstChildNode,
              ///
          terminalNodeContent = terminalNode.getContent();

          nodeQuantifiersNode = terminalNodeContent === '?' || terminalNodeContent === '*' || terminalNodeContent === '+';
        }
      }

      return nodeQuantifiersNode;
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
        var secondQuantifiersNodeChildNode = arrayUtil.second(quantifiersNodeChildNodes);

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
      firstQuantifiersNodeChildNode = arrayUtil.first(quantifiersNodeChildNodes),
      firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
      quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL25vZGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlRlcm1pbmFsTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vZGVVdGlsIiwibm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwibm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVOb0Nob2ljZU5vZGUiLCJub2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJxdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVycyIsInF1YW50aWZpZXIiLCJxdWFudGlmaWVyRnJvbVF1YW50aWZpZXJzTm9kZSIsInB1c2giLCJxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzIiwicXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInNlY29uZFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSIsInNlY29uZCIsInF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSIsImZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsZUFBUixDQUFsQjtBQUFBLElBQ01DLGVBQWVELFFBQVEseUJBQVIsQ0FEckI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsNEJBQVIsQ0FGeEI7O0lBSU1HLFE7Ozs7Ozs7dUNBQ3NC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XG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5JyksXG4gICAgICBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3Mgbm9kZVV0aWwge1xuICBzdGF0aWMgaXNOb2RlVGVybWluYWxOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gKG5vZGUgaW5zdGFuY2VvZiBUZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVUZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlTm9uVGVybWluYWxOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gKG5vZGUgaW5zdGFuY2VvZiBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVOb1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG4gIFxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlVXRpbC5pc05vZGVUZXJtaW5hbE5vZGUobm9kZSk7XG4gIFxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG4gIFxuICAgICAgbm9kZU5vV2hpdGVzcGFjZU5vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJzxOT19XSElURVNQQUNFPicpOyAvLy9cbiAgICB9XG4gIFxuICAgIHJldHVybiBub2RlTm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVDaG9pY2VOb2RlKG5vZGUpIHtcbiAgICBsZXQgbm9kZU5vQ2hvaWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGVVdGlsLmlzTm9kZVRlcm1pbmFsTm9kZShub2RlKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIG5vZGVOb0Nob2ljZU5vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJ3wnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU5vQ2hvaWNlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVRdWFudGlmaWVyc05vZGUobm9kZSkge1xuICAgIGxldCBub2RlUXVhbnRpZmllcnNOb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZVV0aWwuaXNOb2RlTm9uVGVybWluYWxOb2RlKG5vZGUpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlID0gbm9kZVV0aWwuaXNOb2RlVGVybWluYWxOb2RlKGZpcnN0Q2hpbGROb2RlKTtcblxuICAgICAgaWYgKGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIG5vZGVRdWFudGlmaWVyc05vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJz8nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICcqJykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnKycpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIG5vZGVRdWFudGlmaWVyc05vZGU7XG4gIH1cblxuICBzdGF0aWMgcXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSwgcXVhbnRpZmllcnMgPSBbXSkge1xuICAgIGNvbnN0IHF1YW50aWZpZXIgPSBxdWFudGlmaWVyRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpO1xuXG4gICAgcXVhbnRpZmllcnMucHVzaChxdWFudGlmaWVyKTtcblxuICAgIGNvbnN0IHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMgPSBxdWFudGlmaWVyc05vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXNMZW5ndGggPSAgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3Qgc2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlID0gYXJyYXlVdGlsLnNlY29uZChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzKTtcblxuICAgICAgcXVhbnRpZmllcnNOb2RlID0gc2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlOyAvLy9cblxuICAgICAgcXVhbnRpZmllcnMgPSBub2RlVXRpbC5xdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlLCBxdWFudGlmaWVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1YW50aWZpZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSkge1xuICBjb25zdCBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzID0gcXVhbnRpZmllcnNOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QocXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudCA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgcXVhbnRpZmllciA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudDtcblxuICByZXR1cm4gcXVhbnRpZmllcjtcbn1cbiJdfQ==