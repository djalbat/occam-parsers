'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var arrayUtil = require('../util/array'),
    TerminalNode = require('../common/node/terminal'),
    NonTerminalNode = require('../common/node/nonTerminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var bnfUtil = function () {
  function bnfUtil() {
    _classCallCheck(this, bnfUtil);
  }

  _createClass(bnfUtil, null, [{
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

      var nodeTerminalNode = bnfUtil.isNodeTerminalNode(node);

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

      var nodeTerminalNode = bnfUtil.isNodeTerminalNode(node);

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

      var nodeNonTerminalNode = bnfUtil.isNodeNonTerminalNode(node);

      if (nodeNonTerminalNode) {
        var nonTerminalNode = node,
            ///
        childNodes = nonTerminalNode.getChildNodes(),
            firstChildNode = arrayUtil.first(childNodes),
            firstChildNodeTerminalNode = bnfUtil.isNodeTerminalNode(firstChildNode);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2JuZi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwiVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJibmZVdGlsIiwibm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwibm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVOb0Nob2ljZU5vZGUiLCJub2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJxdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVycyIsInF1YW50aWZpZXIiLCJxdWFudGlmaWVyRnJvbVF1YW50aWZpZXJzTm9kZSIsInB1c2giLCJxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzIiwicXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInNlY29uZFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSIsInNlY29uZCIsInF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSIsImZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsZUFBUixDQUFsQjtBQUFBLElB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QUFBLE1BQ01pQixnQ0FBZ0NyQyxVQUFVc0IsS0FBVixDQUFnQk8seUJBQWhCLENBRHRDO0FBQUEsTUFFTVMsdUNBQXVDRCw4QkFBOEJ2QixVQUE5QixFQUY3QztBQUFBLE1BR01ZLGFBQWFZLG9DQUhuQjs7QUFLQSxTQUFPWixVQUFQO0FBQ0QiLCJmaWxlIjoiYm5mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdGVybWluYWwnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgYm5mVXRpbCB7XG4gIHN0YXRpYyBpc05vZGVUZXJtaW5hbE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSAobm9kZSBpbnN0YW5jZW9mIFRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZVRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVOb25UZXJtaW5hbE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSAobm9kZSBpbnN0YW5jZW9mIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZU5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVOb1doaXRlc3BhY2VOb2RlKG5vZGUpIHtcbiAgICBsZXQgbm9kZU5vV2hpdGVzcGFjZU5vZGUgPSBmYWxzZTtcbiAgXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IGJuZlV0aWwuaXNOb2RlVGVybWluYWxOb2RlKG5vZGUpO1xuICBcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuICBcbiAgICAgIG5vZGVOb1doaXRlc3BhY2VOb2RlID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09IE5PX1dISVRFU1BBQ0UpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG5vZGVOb1doaXRlc3BhY2VOb2RlO1xuICB9XG5cbiAgc3RhdGljIGlzTm9kZUNob2ljZU5vZGUobm9kZSkge1xuICAgIGxldCBub2RlTm9DaG9pY2VOb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gYm5mVXRpbC5pc05vZGVUZXJtaW5hbE5vZGUobm9kZSk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBub2RlTm9DaG9pY2VOb2RlID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICd8Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVOb0Nob2ljZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlUXVhbnRpZmllcnNOb2RlKG5vZGUpIHtcbiAgICBsZXQgbm9kZVF1YW50aWZpZXJzTm9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IGJuZlV0aWwuaXNOb2RlTm9uVGVybWluYWxOb2RlKG5vZGUpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlID0gYm5mVXRpbC5pc05vZGVUZXJtaW5hbE5vZGUoZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgbm9kZVF1YW50aWZpZXJzTm9kZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnPycpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJyonKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICcrJyk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gbm9kZVF1YW50aWZpZXJzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlLCBxdWFudGlmaWVycyA9IFtdKSB7XG4gICAgY29uc3QgcXVhbnRpZmllciA9IHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSk7XG5cbiAgICBxdWFudGlmaWVycy5wdXNoKHF1YW50aWZpZXIpO1xuXG4gICAgY29uc3QgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyA9IHF1YW50aWZpZXJzTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9ICBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzTGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBhcnJheVV0aWwuc2Vjb25kKHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMpO1xuXG4gICAgICBxdWFudGlmaWVyc05vZGUgPSBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBxdWFudGlmaWVycyA9IGJuZlV0aWwucXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSwgcXVhbnRpZmllcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWFudGlmaWVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJuZlV0aWw7XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSkge1xuICBjb25zdCBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzID0gcXVhbnRpZmllcnNOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QocXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudCA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgcXVhbnRpZmllciA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudDtcblxuICByZXR1cm4gcXVhbnRpZmllcjtcbn1cbiJdfQ==