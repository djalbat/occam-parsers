'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    necessary = require('necessary');

var BNFLexer = lexers.BNFLexer,
    array = necessary.array,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var bnfUtilities = function () {
  function bnfUtilities() {
    _classCallCheck(this, bnfUtilities);
  }

  _createClass(bnfUtilities, null, [{
    key: 'isNodeNoWhitespaceNode',
    value: function isNodeNoWhitespaceNode(node) {
      var nodeNoWhitespaceNode = false;

      var nodeTerminalNode = node.isTerminalNode();

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

      var nodeTerminalNode = node.isTerminalNode();

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

      var nodeTerminalNode = node.isTerminalNode(),
          nodeNonTerminalNode = !nodeTerminalNode;

      if (nodeNonTerminalNode) {
        var nonTerminalNode = node,
            ///
        childNodes = nonTerminalNode.getChildNodes(),
            firstChildNode = array.first(childNodes),
            firstChildNodeTerminalNode = firstChildNode.isTerminalNode();

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
        var secondQuantifiersNodeChildNode = array.second(quantifiersNodeChildNodes);

        quantifiersNode = secondQuantifiersNodeChildNode; ///

        quantifiers = bnfUtilities.quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
      }

      return quantifiers;
    }
  }]);

  return bnfUtilities;
}();

module.exports = bnfUtilities;

function quantifierFromQuantifiersNode(quantifiersNode) {
  var quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
      firstQuantifiersNodeChildNode = array.first(quantifiersNodeChildNodes),
      firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
      quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYm5mLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJCTkZMZXhlciIsImFycmF5Iiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiYm5mVXRpbGl0aWVzIiwibm9kZSIsIm5vZGVOb1doaXRlc3BhY2VOb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJub2RlTm9DaG9pY2VOb2RlIiwibm9kZVF1YW50aWZpZXJzTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSIsInF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzIiwicXVhbnRpZmllciIsInF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlIiwicHVzaCIsInF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMiLCJxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlIiwic2Vjb25kIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlIiwiZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxNQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lGLFNBRFosQ0FDRUUsS0FERjtBQUFBLElBRUVDLGNBRkYsR0FFcUJGLFFBRnJCLENBRUVFLGNBRkY7QUFBQSxJQUdFQyxhQUhGLEdBR29CRCxjQUhwQixDQUdFQyxhQUhGOztJQUtBQyxZOzs7Ozs7OzJDQUMwQkMsSSxFQUFNO0FBQ2xDLFVBQUlDLHVCQUF1QixLQUEzQjs7QUFFQSxVQUFNQyxtQkFBbUJGLEtBQUtHLGNBQUwsRUFBekI7O0FBRUEsVUFBSUQsZ0JBQUosRUFBc0I7QUFDcEIsWUFBTUUsZUFBZUosSUFBckI7QUFBQSxZQUNNSyxzQkFBc0JELGFBQWFFLFVBQWIsRUFENUI7O0FBR0FMLCtCQUF3Qkksd0JBQXdCUCxhQUFoRDtBQUNEOztBQUVELGFBQU9HLG9CQUFQO0FBQ0Q7OztxQ0FFdUJELEksRUFBTTtBQUM1QixVQUFJTyxtQkFBbUIsS0FBdkI7O0FBRUEsVUFBTUwsbUJBQW1CRixLQUFLRyxjQUFMLEVBQXpCOztBQUVBLFVBQUlELGdCQUFKLEVBQXNCO0FBQ3BCLFlBQU1FLGVBQWVKLElBQXJCO0FBQUEsWUFDTUssc0JBQXNCRCxhQUFhRSxVQUFiLEVBRDVCOztBQUdBQywyQkFBb0JGLHdCQUF3QixHQUE1QztBQUNEOztBQUVELGFBQU9FLGdCQUFQO0FBQ0Q7OzswQ0FFNEJQLEksRUFBTTtBQUNqQyxVQUFJUSxzQkFBc0IsS0FBMUI7O0FBRUEsVUFBTU4sbUJBQW1CRixLQUFLRyxjQUFMLEVBQXpCO0FBQUEsVUFDTU0sc0JBQXNCLENBQUNQLGdCQUQ3Qjs7QUFHQSxVQUFJTyxtQkFBSixFQUF5QjtBQUN2QixZQUFNQyxrQkFBa0JWLElBQXhCO0FBQUEsWUFBOEI7QUFDeEJXLHFCQUFhRCxnQkFBZ0JFLGFBQWhCLEVBRG5CO0FBQUEsWUFFTUMsaUJBQWlCakIsTUFBTWtCLEtBQU4sQ0FBWUgsVUFBWixDQUZ2QjtBQUFBLFlBR01JLDZCQUE2QkYsZUFBZVYsY0FBZixFQUhuQzs7QUFLQSxZQUFJWSwwQkFBSixFQUFnQztBQUM5QixjQUFNWCxlQUFlUyxjQUFyQjtBQUFBLGNBQXNDO0FBQ2hDUixnQ0FBc0JELGFBQWFFLFVBQWIsRUFENUI7O0FBR0FFLGdDQUF1Qkgsd0JBQXdCLEdBQXpCLElBQ0NBLHdCQUF3QixHQUR6QixJQUVDQSx3QkFBd0IsR0FGL0M7QUFHRDtBQUNGOztBQUVELGFBQU9HLG1CQUFQO0FBQ0Q7OzttREFFcUNRLGUsRUFBbUM7QUFBQSxVQUFsQkMsV0FBa0IsdUVBQUosRUFBSTs7QUFDdkUsVUFBTUMsYUFBYUMsOEJBQThCSCxlQUE5QixDQUFuQjs7QUFFQUMsa0JBQVlHLElBQVosQ0FBaUJGLFVBQWpCOztBQUVBLFVBQU1HLDRCQUE0QkwsZ0JBQWdCSixhQUFoQixFQUFsQztBQUFBLFVBQ01VLGtDQUFtQ0QsMEJBQTBCRSxNQURuRTs7QUFHQSxVQUFJRCxvQ0FBb0MsQ0FBeEMsRUFBMkM7QUFDekMsWUFBTUUsaUNBQWlDNUIsTUFBTTZCLE1BQU4sQ0FBYUoseUJBQWIsQ0FBdkM7O0FBRUFMLDBCQUFrQlEsOEJBQWxCLENBSHlDLENBR1M7O0FBRWxEUCxzQkFBY2xCLGFBQWEyQiw4QkFBYixDQUE0Q1YsZUFBNUMsRUFBNkRDLFdBQTdELENBQWQ7QUFDRDs7QUFFRCxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdIVSxPQUFPQyxPQUFQLEdBQWlCN0IsWUFBakI7O0FBRUEsU0FBU29CLDZCQUFULENBQXVDSCxlQUF2QyxFQUF3RDtBQUN0RCxNQUFNSyw0QkFBNEJMLGdCQUFnQkosYUFBaEIsRUFBbEM7QUFBQSxNQUNNaUIsZ0NBQWdDakMsTUFBTWtCLEtBQU4sQ0FBWU8seUJBQVosQ0FEdEM7QUFBQSxNQUVNUyx1Q0FBdUNELDhCQUE4QnZCLFVBQTlCLEVBRjdDO0FBQUEsTUFHTVksYUFBYVksb0NBSG5COztBQUtBLFNBQU9aLFVBQVA7QUFDRCIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgYm5mVXRpbGl0aWVzIHtcbiAgc3RhdGljIGlzTm9kZU5vV2hpdGVzcGFjZU5vZGUobm9kZSkge1xuICAgIGxldCBub2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuICBcbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuICBcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuICBcbiAgICAgIG5vZGVOb1doaXRlc3BhY2VOb2RlID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09IE5PX1dISVRFU1BBQ0UpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG5vZGVOb1doaXRlc3BhY2VOb2RlO1xuICB9XG5cbiAgc3RhdGljIGlzTm9kZUNob2ljZU5vZGUobm9kZSkge1xuICAgIGxldCBub2RlTm9DaG9pY2VOb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgbm9kZU5vQ2hvaWNlTm9kZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnfCcpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlTm9DaG9pY2VOb2RlO1xuICB9XG5cbiAgc3RhdGljIGlzTm9kZVF1YW50aWZpZXJzTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVRdWFudGlmaWVyc05vZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5LmZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgbm9kZVF1YW50aWZpZXJzTm9kZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnPycpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJyonKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICcrJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVRdWFudGlmaWVyc05vZGU7XG4gIH1cblxuICBzdGF0aWMgcXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSwgcXVhbnRpZmllcnMgPSBbXSkge1xuICAgIGNvbnN0IHF1YW50aWZpZXIgPSBxdWFudGlmaWVyRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpO1xuXG4gICAgcXVhbnRpZmllcnMucHVzaChxdWFudGlmaWVyKTtcblxuICAgIGNvbnN0IHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMgPSBxdWFudGlmaWVyc05vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXNMZW5ndGggPSAgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3Qgc2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlID0gYXJyYXkuc2Vjb25kKHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMpO1xuXG4gICAgICBxdWFudGlmaWVyc05vZGUgPSBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBxdWFudGlmaWVycyA9IGJuZlV0aWxpdGllcy5xdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlLCBxdWFudGlmaWVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1YW50aWZpZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm5mVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBxdWFudGlmaWVyRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpIHtcbiAgY29uc3QgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyA9IHF1YW50aWZpZXJzTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlID0gYXJyYXkuZmlyc3QocXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudCA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgcXVhbnRpZmllciA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudDtcblxuICByZXR1cm4gcXVhbnRpZmllcjtcbn1cbiJdfQ==