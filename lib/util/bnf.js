'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var arrayUtil = require('../util/array');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var bnfUtil = function () {
  function bnfUtil() {
    _classCallCheck(this, bnfUtil);
  }

  _createClass(bnfUtil, null, [{
    key: 'isNodeNoWhitespaceNode',
    value: function isNodeNoWhitespaceNode(node) {
      var nodeNoWhitespaceNode = false;

      var nodeTerminalNode = node.isTerminal();

      if (nodeTerminalNode) {
        var terminalNode = node,
            terminalNodeContent = terminalNode.getContent();

        nodeNoWhitespaceNode = terminalNodeContent === NO_WHITESPACE;
      }

      return nodeNoWhitespaceNode;
    }
  }, {
    key: 'isNodeChoiceNode',
    value: function isNodeChoiceNode(node) {
      var nodeNoChoiceNode = false;

      var nodeTerminalNode = node.isTerminal();

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

      var nodeTerminalNode = node.isTerminal(),
          nodeNonTerminalNode = !nodeTerminalNode;

      if (nodeNonTerminalNode) {
        var nonTerminalNode = node,
            ///
        childNodes = nonTerminalNode.getChildNodes(),
            firstChildNode = arrayUtil.first(childNodes),
            firstChildNodeTerminalNode = firstChildNode.isTerminal();

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

        quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
      }

      return quantifiers;
    }
  }]);

  return bnfUtil;
}();

module.exports = bnfUtil;

function quantifierFromQuantifiersNode(quantifiersNode) {
  var quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
      firstQuantifiersNodeChildNode = arrayUtil.first(quantifiersNodeChildNodes),
      firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
      quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2JuZi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJibmZVdGlsIiwibm9kZSIsIm5vZGVOb1doaXRlc3BhY2VOb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWwiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVOb0Nob2ljZU5vZGUiLCJub2RlUXVhbnRpZmllcnNOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsImZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlIiwicXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnMiLCJxdWFudGlmaWVyIiwicXVhbnRpZmllckZyb21RdWFudGlmaWVyc05vZGUiLCJwdXNoIiwicXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyIsInF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUiLCJzZWNvbmQiLCJxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUiLCJmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGVBQVIsQ0FBbEI7O0FBRU0sSUFBRUUsUUFBRixHQUFlSCxNQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsYUFGRixHQUVvQkQsY0FGcEIsQ0FFRUMsYUFGRjs7SUFJQUMsTzs7Ozs7OzsyQ0FDMEJDLEksRUFBTTtBQUNsQyxVQUFJQyx1QkFBdUIsS0FBM0I7O0FBRUEsVUFBTUMsbUJBQW1CRixLQUFLRyxVQUFMLEVBQXpCOztBQUVBLFVBQUlELGdCQUFKLEVBQXNCO0FBQ3BCLFlBQU1FLGVBQWVKLElBQXJCO0FBQUEsWUFDTUssc0JBQXNCRCxhQUFhRSxVQUFiLEVBRDVCOztBQUdBTCwrQkFBd0JJLHdCQUF3QlAsYUFBaEQ7QUFDRDs7QUFFRCxhQUFPRyxvQkFBUDtBQUNEOzs7cUNBRXVCRCxJLEVBQU07QUFDNUIsVUFBSU8sbUJBQW1CLEtBQXZCOztBQUVBLFVBQU1MLG1CQUFtQkYsS0FBS0csVUFBTCxFQUF6Qjs7QUFFQSxVQUFJRCxnQkFBSixFQUFzQjtBQUNwQixZQUFNRSxlQUFlSixJQUFyQjtBQUFBLFlBQ01LLHNCQUFzQkQsYUFBYUUsVUFBYixFQUQ1Qjs7QUFHQUMsMkJBQW9CRix3QkFBd0IsR0FBNUM7QUFDRDs7QUFFRCxhQUFPRSxnQkFBUDtBQUNEOzs7MENBRTRCUCxJLEVBQU07QUFDakMsVUFBSVEsc0JBQXNCLEtBQTFCOztBQUVBLFVBQU1OLG1CQUFtQkYsS0FBS0csVUFBTCxFQUF6QjtBQUFBLFVBQ01NLHNCQUFzQixDQUFDUCxnQkFEN0I7O0FBR0EsVUFBSU8sbUJBQUosRUFBeUI7QUFDdkIsWUFBTUMsa0JBQWtCVixJQUF4QjtBQUFBLFlBQThCO0FBQ3hCVyxxQkFBYUQsZ0JBQWdCRSxhQUFoQixFQURuQjtBQUFBLFlBRU1DLGlCQUFpQmxCLFVBQVVtQixLQUFWLENBQWdCSCxVQUFoQixDQUZ2QjtBQUFBLFlBR01JLDZCQUE2QkYsZUFBZVYsVUFBZixFQUhuQzs7QUFLQSxZQUFJWSwwQkFBSixFQUFnQztBQUM5QixjQUFNWCxlQUFlUyxjQUFyQjtBQUFBLGNBQXNDO0FBQ2hDUixnQ0FBc0JELGFBQWFFLFVBQWIsRUFENUI7O0FBR0FFLGdDQUF1Qkgsd0JBQXdCLEdBQXpCLElBQ0NBLHdCQUF3QixHQUR6QixJQUVDQSx3QkFBd0IsR0FGL0M7QUFHRDtBQUNGOztBQUVELGFBQU9HLG1CQUFQO0FBQ0Q7OzttREFFcUNRLGUsRUFBbUM7QUFBQSxVQUFsQkMsV0FBa0IsdUVBQUosRUFBSTs7QUFDdkUsVUFBTUMsYUFBYUMsOEJBQThCSCxlQUE5QixDQUFuQjs7QUFFQUMsa0JBQVlHLElBQVosQ0FBaUJGLFVBQWpCOztBQUVBLFVBQU1HLDRCQUE0QkwsZ0JBQWdCSixhQUFoQixFQUFsQztBQUFBLFVBQ01VLGtDQUFtQ0QsMEJBQTBCRSxNQURuRTs7QUFHQSxVQUFJRCxvQ0FBb0MsQ0FBeEMsRUFBMkM7QUFDekMsWUFBTUUsaUNBQWlDN0IsVUFBVThCLE1BQVYsQ0FBaUJKLHlCQUFqQixDQUF2Qzs7QUFFQUwsMEJBQWtCUSw4QkFBbEIsQ0FIeUMsQ0FHUzs7QUFFbERQLHNCQUFjbEIsUUFBUTJCLDhCQUFSLENBQXVDVixlQUF2QyxFQUF3REMsV0FBeEQsQ0FBZDtBQUNEOztBQUVELGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUI3QixPQUFqQjs7QUFFQSxTQUFTb0IsNkJBQVQsQ0FBdUNILGVBQXZDLEVBQXdEO0FBQ3RELE1BQU1LLDRCQUE0QkwsZ0JBQWdCSixhQUFoQixFQUFsQztBQUFBLE1BQ01pQixnQ0FBZ0NsQyxVQUFVbUIsS0FBVixDQUFnQk8seUJBQWhCLENBRHRDO0FBQUEsTUFFTVMsdUNBQXVDRCw4QkFBOEJ2QixVQUE5QixFQUY3QztBQUFBLE1BR01ZLGFBQWFZLG9DQUhuQjs7QUFLQSxTQUFPWixVQUFQO0FBQ0QiLCJmaWxlIjoiYm5mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIGJuZlV0aWwge1xuICBzdGF0aWMgaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVOb1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG4gIFxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWwoKTtcbiAgXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcbiAgXG4gICAgICBub2RlTm9XaGl0ZXNwYWNlTm9kZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBOT19XSElURVNQQUNFKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiBub2RlTm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVDaG9pY2VOb2RlKG5vZGUpIHtcbiAgICBsZXQgbm9kZU5vQ2hvaWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbCgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgbm9kZU5vQ2hvaWNlTm9kZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnfCcpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlTm9DaG9pY2VOb2RlO1xuICB9XG5cbiAgc3RhdGljIGlzTm9kZVF1YW50aWZpZXJzTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVRdWFudGlmaWVyc05vZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWwoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gIW5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZS5pc1Rlcm1pbmFsKCk7XG5cbiAgICAgIGlmIChmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICBub2RlUXVhbnRpZmllcnNOb2RlID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICc/JykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnKicpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJysnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVF1YW50aWZpZXJzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlLCBxdWFudGlmaWVycyA9IFtdKSB7XG4gICAgY29uc3QgcXVhbnRpZmllciA9IHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSk7XG5cbiAgICBxdWFudGlmaWVycy5wdXNoKHF1YW50aWZpZXIpO1xuXG4gICAgY29uc3QgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyA9IHF1YW50aWZpZXJzTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9ICBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzTGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBhcnJheVV0aWwuc2Vjb25kKHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMpO1xuXG4gICAgICBxdWFudGlmaWVyc05vZGUgPSBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBxdWFudGlmaWVycyA9IGJuZlV0aWwucXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSwgcXVhbnRpZmllcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWFudGlmaWVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJuZlV0aWw7XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSkge1xuICBjb25zdCBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzID0gcXVhbnRpZmllcnNOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QocXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudCA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgcXVhbnRpZmllciA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudDtcblxuICByZXR1cm4gcXVhbnRpZmllcjtcbn1cbiJdfQ==