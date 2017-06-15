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

        nodeNoWhitespaceNode = terminalNodeContent === "<NO_WHITESPACE>"; ///
      }

      return nodeNoWhitespaceNode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL25vZGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlRlcm1pbmFsTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vZGVVdGlsIiwibm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwibm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVRdWFudGlmaWVyc05vZGUiLCJpc05vZGVOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSIsInF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzIiwicXVhbnRpZmllciIsInF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlIiwicHVzaCIsInF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMiLCJxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlIiwic2Vjb25kIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlIiwiZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxlQUFSLENBQWxCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSx5QkFBUixDQURyQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSw0QkFBUixDQUZ4Qjs7SUFJTUcsUTs7Ozs7Ozt1Q0FDc0JDLEksRUFBTTtBQUM5QixVQUFNQyxtQkFBb0JELGdCQUFnQkgsWUFBMUM7O0FBRUEsYUFBT0ksZ0JBQVA7QUFDRDs7OzBDQUU0QkQsSSxFQUFNO0FBQ2pDLFVBQU1FLHNCQUF1QkYsZ0JBQWdCRixlQUE3Qzs7QUFFQSxhQUFPSSxtQkFBUDtBQUNEOzs7MkNBRTZCRixJLEVBQU07QUFDbEMsVUFBSUcsdUJBQXVCLEtBQTNCOztBQUVBLFVBQU1GLG1CQUFtQkYsU0FBU0ssa0JBQVQsQ0FBNEJKLElBQTVCLENBQXpCOztBQUVBLFVBQUlDLGdCQUFKLEVBQXNCO0FBQ3BCLFlBQU1JLGVBQWVMLElBQXJCO0FBQUEsWUFDTU0sc0JBQXNCRCxhQUFhRSxVQUFiLEVBRDVCOztBQUdBSiwrQkFBd0JHLHdCQUF3QixpQkFBaEQsQ0FKb0IsQ0FJZ0Q7QUFDckU7O0FBRUQsYUFBT0gsb0JBQVA7QUFDRDs7OzBDQUU0QkgsSSxFQUFNO0FBQ2pDLFVBQUlRLHNCQUFzQixLQUExQjs7QUFFQSxVQUFNTixzQkFBc0JILFNBQVNVLHFCQUFULENBQStCVCxJQUEvQixDQUE1Qjs7QUFFQSxVQUFJRSxtQkFBSixFQUF5QjtBQUN2QixZQUFNUSxrQkFBa0JWLElBQXhCO0FBQUEsWUFBOEI7QUFDeEJXLHFCQUFhRCxnQkFBZ0JFLGFBQWhCLEVBRG5CO0FBQUEsWUFFTUMsaUJBQWlCbEIsVUFBVW1CLEtBQVYsQ0FBZ0JILFVBQWhCLENBRnZCO0FBQUEsWUFHTUksNkJBQTZCaEIsU0FBU0ssa0JBQVQsQ0FBNEJTLGNBQTVCLENBSG5DOztBQUtBLFlBQUlFLDBCQUFKLEVBQWdDO0FBQzlCLGNBQU1WLGVBQWVRLGNBQXJCO0FBQUEsY0FBc0M7QUFDaENQLGdDQUFzQkQsYUFBYUUsVUFBYixFQUQ1Qjs7QUFHQUMsZ0NBQXVCRix3QkFBd0IsR0FBekIsSUFDQ0Esd0JBQXdCLEdBRHpCLElBRUNBLHdCQUF3QixHQUYvQztBQUdEO0FBQ0Y7O0FBR0QsYUFBT0UsbUJBQVA7QUFDRDs7O21EQUVxQ1EsZSxFQUFtQztBQUFBLFVBQWxCQyxXQUFrQix1RUFBSixFQUFJOztBQUN2RSxVQUFNQyxhQUFhQyw4QkFBOEJILGVBQTlCLENBQW5COztBQUVBQyxrQkFBWUcsSUFBWixDQUFpQkYsVUFBakI7O0FBRUEsVUFBTUcsNEJBQTRCTCxnQkFBZ0JKLGFBQWhCLEVBQWxDO0FBQUEsVUFDTVUsa0NBQW1DRCwwQkFBMEJFLE1BRG5FOztBQUdBLFVBQUlELG9DQUFvQyxDQUF4QyxFQUEyQztBQUN6QyxZQUFNRSxpQ0FBaUM3QixVQUFVOEIsTUFBVixDQUFpQkoseUJBQWpCLENBQXZDOztBQUVBTCwwQkFBa0JRLDhCQUFsQixDQUh5QyxDQUdTOztBQUVsRFAsc0JBQWNsQixTQUFTMkIsOEJBQVQsQ0FBd0NWLGVBQXhDLEVBQXlEQyxXQUF6RCxDQUFkO0FBQ0Q7O0FBRUQsYUFBT0EsV0FBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQjdCLFFBQWpCOztBQUVBLFNBQVNvQiw2QkFBVCxDQUF1Q0gsZUFBdkMsRUFBd0Q7QUFDdEQsTUFBTUssNEJBQTRCTCxnQkFBZ0JKLGFBQWhCLEVBQWxDO0FBQUEsTUFDTWlCLGdDQUFnQ2xDLFVBQVVtQixLQUFWLENBQWdCTyx5QkFBaEIsQ0FEdEM7QUFBQSxNQUVNUyx1Q0FBdUNELDhCQUE4QnRCLFVBQTlCLEVBRjdDO0FBQUEsTUFHTVcsYUFBYVksb0NBSG5COztBQUtBLFNBQU9aLFVBQVA7QUFDRCIsImZpbGUiOiJub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5JyksXG4gICAgICBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3Mgbm9kZVV0aWwge1xuICBzdGF0aWMgaXNOb2RlVGVybWluYWxOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gKG5vZGUgaW5zdGFuY2VvZiBUZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVUZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlTm9uVGVybWluYWxOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gKG5vZGUgaW5zdGFuY2VvZiBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVOb1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG4gIFxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlVXRpbC5pc05vZGVUZXJtaW5hbE5vZGUobm9kZSk7XG4gIFxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG4gIFxuICAgICAgbm9kZU5vV2hpdGVzcGFjZU5vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gXCI8Tk9fV0hJVEVTUEFDRT5cIik7IC8vL1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG5vZGVOb1doaXRlc3BhY2VOb2RlO1xuICB9XG5cbiAgc3RhdGljIGlzTm9kZVF1YW50aWZpZXJzTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVRdWFudGlmaWVyc05vZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlVXRpbC5pc05vZGVOb25UZXJtaW5hbE5vZGUobm9kZSk7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBub2RlVXRpbC5pc05vZGVUZXJtaW5hbE5vZGUoZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgbm9kZVF1YW50aWZpZXJzTm9kZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnPycpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJyonKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICcrJyk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gbm9kZVF1YW50aWZpZXJzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlLCBxdWFudGlmaWVycyA9IFtdKSB7XG4gICAgY29uc3QgcXVhbnRpZmllciA9IHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSk7XG5cbiAgICBxdWFudGlmaWVycy5wdXNoKHF1YW50aWZpZXIpO1xuXG4gICAgY29uc3QgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyA9IHF1YW50aWZpZXJzTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9ICBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzTGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBhcnJheVV0aWwuc2Vjb25kKHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMpO1xuXG4gICAgICBxdWFudGlmaWVyc05vZGUgPSBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBxdWFudGlmaWVycyA9IG5vZGVVdGlsLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUsIHF1YW50aWZpZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVhbnRpZmllcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuZnVuY3Rpb24gcXVhbnRpZmllckZyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKSB7XG4gIGNvbnN0IHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMgPSBxdWFudGlmaWVyc05vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50ID0gZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBxdWFudGlmaWVyID0gZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50O1xuXG4gIHJldHVybiBxdWFudGlmaWVyO1xufVxuIl19