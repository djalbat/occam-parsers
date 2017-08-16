'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    necessary = require('necessary');

var BNFLexer = lexers.BNFLexer,
    array = necessary.array,
    first = array.first,
    second = array.second,
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
            firstChildNode = first(childNodes),
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
        var secondQuantifiersNodeChildNode = second(quantifiersNodeChildNodes),
            secondQuantifiersNodeChildNodeQuantifiersNode = bnfUtilities.isNodeQuantifiersNode(secondQuantifiersNodeChildNode);

        if (secondQuantifiersNodeChildNodeQuantifiersNode) {
          quantifiersNode = secondQuantifiersNodeChildNode; ///

          quantifiers = bnfUtilities.quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
        }
      }

      return quantifiers;
    }
  }]);

  return bnfUtilities;
}();

module.exports = bnfUtilities;

function quantifierFromQuantifiersNode(quantifiersNode) {
  var quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
      firstQuantifiersNodeChildNode = first(quantifiersNodeChildNodes),
      firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
      quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYm5mLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJCTkZMZXhlciIsImFycmF5IiwiZmlyc3QiLCJzZWNvbmQiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJibmZVdGlsaXRpZXMiLCJub2RlIiwibm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVOb0Nob2ljZU5vZGUiLCJub2RlUXVhbnRpZmllcnNOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSIsInF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzIiwicXVhbnRpZmllciIsInF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlIiwicHVzaCIsInF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMiLCJxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlIiwic2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlUXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlIiwiZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxZ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QSxNQUVNVSx1Q0FBdUNELDhCQUE4QnZCLFVBQTlCLEVBRjdDO0FBQUEsTUFHTVcsYUFBYWEsb0NBSG5COztBQUtBLFNBQU9iLFVBQVA7QUFDRCIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXksXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIGJuZlV0aWxpdGllcyB7XG4gIHN0YXRpYyBpc05vZGVOb1doaXRlc3BhY2VOb2RlKG5vZGUpIHtcbiAgICBsZXQgbm9kZU5vV2hpdGVzcGFjZU5vZGUgPSBmYWxzZTtcbiAgXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcbiAgXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcbiAgXG4gICAgICBub2RlTm9XaGl0ZXNwYWNlTm9kZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBOT19XSElURVNQQUNFKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiBub2RlTm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVDaG9pY2VOb2RlKG5vZGUpIHtcbiAgICBsZXQgbm9kZU5vQ2hvaWNlTm9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIG5vZGVOb0Nob2ljZU5vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJ3wnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU5vQ2hvaWNlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVRdWFudGlmaWVyc05vZGUobm9kZSkge1xuICAgIGxldCBub2RlUXVhbnRpZmllcnNOb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSAhbm9kZVRlcm1pbmFsTm9kZTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIG5vZGVRdWFudGlmaWVyc05vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJz8nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICcqJykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnKycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlUXVhbnRpZmllcnNOb2RlO1xuICB9XG5cbiAgc3RhdGljIHF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUsIHF1YW50aWZpZXJzID0gW10pIHtcbiAgICBjb25zdCBxdWFudGlmaWVyID0gcXVhbnRpZmllckZyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKTtcblxuICAgIHF1YW50aWZpZXJzLnB1c2gocXVhbnRpZmllcik7XG5cbiAgICBjb25zdCBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzID0gcXVhbnRpZmllcnNOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzTGVuZ3RoID0gIHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXNMZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IHNlY29uZFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSA9IHNlY29uZChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHNlY29uZFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZVF1YW50aWZpZXJzTm9kZSA9IGJuZlV0aWxpdGllcy5pc05vZGVRdWFudGlmaWVyc05vZGUoc2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlKTtcblxuICAgICAgaWYgKHNlY29uZFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZVF1YW50aWZpZXJzTm9kZSkge1xuICAgICAgICBxdWFudGlmaWVyc05vZGUgPSBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHF1YW50aWZpZXJzID0gYm5mVXRpbGl0aWVzLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUsIHF1YW50aWZpZXJzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVhbnRpZmllcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBibmZVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSkge1xuICBjb25zdCBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzID0gcXVhbnRpZmllcnNOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBmaXJzdChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50ID0gZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBxdWFudGlmaWVyID0gZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50O1xuXG4gIHJldHVybiBxdWFudGlmaWVyO1xufVxuIl19