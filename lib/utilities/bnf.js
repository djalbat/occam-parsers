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
        var secondQuantifiersNodeChildNode = second(quantifiersNodeChildNodes);

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
      firstQuantifiersNodeChildNode = first(quantifiersNodeChildNodes),
      firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
      quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYm5mLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJCTkZMZXhlciIsImFycmF5IiwiZmlyc3QiLCJzZWNvbmQiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJibmZVdGlsaXRpZXMiLCJub2RlIiwibm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVOb0Nob2ljZU5vZGUiLCJub2RlUXVhbnRpZmllcnNOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSIsInF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzIiwicXVhbnRpZmllciIsInF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlIiwicHVzaCIsInF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMiLCJxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlIiwiZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxNQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxL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aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5LFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBibmZVdGlsaXRpZXMge1xuICBzdGF0aWMgaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVOb1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG4gIFxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG4gIFxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG4gIFxuICAgICAgbm9kZU5vV2hpdGVzcGFjZU5vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gTk9fV0hJVEVTUEFDRSk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gbm9kZU5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlQ2hvaWNlTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVOb0Nob2ljZU5vZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBub2RlTm9DaG9pY2VOb2RlID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICd8Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVOb0Nob2ljZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlUXVhbnRpZmllcnNOb2RlKG5vZGUpIHtcbiAgICBsZXQgbm9kZVF1YW50aWZpZXJzTm9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gIW5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgICBmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICBub2RlUXVhbnRpZmllcnNOb2RlID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICc/JykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnKicpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJysnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVF1YW50aWZpZXJzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlLCBxdWFudGlmaWVycyA9IFtdKSB7XG4gICAgY29uc3QgcXVhbnRpZmllciA9IHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSk7XG5cbiAgICBxdWFudGlmaWVycy5wdXNoKHF1YW50aWZpZXIpO1xuXG4gICAgY29uc3QgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyA9IHF1YW50aWZpZXJzTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9ICBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzTGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBzZWNvbmQocXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlcyk7XG5cbiAgICAgIHF1YW50aWZpZXJzTm9kZSA9IHNlY29uZFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHF1YW50aWZpZXJzID0gYm5mVXRpbGl0aWVzLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUsIHF1YW50aWZpZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVhbnRpZmllcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBibmZVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSkge1xuICBjb25zdCBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzID0gcXVhbnRpZmllcnNOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBmaXJzdChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50ID0gZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBxdWFudGlmaWVyID0gZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGVDb250ZW50O1xuXG4gIHJldHVybiBxdWFudGlmaWVyO1xufVxuIl19