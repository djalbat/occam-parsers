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
  }]);

  return nodeUtil;
}();

module.exports = nodeUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL25vZGUuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vZGVVdGlsIiwibm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwibm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLHlCQUFSLENBQXJCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLDRCQUFSLENBRHhCOztJQUdNRSxROzs7Ozs7O3VDQUNzQkMsSSxFQUFNO0FBQzlCLFVBQU1DLG1CQUFvQkQsZ0JBQWdCSixZQUExQzs7QUFFQSxhQUFPSyxnQkFBUDtBQUNEOzs7MENBRTRCRCxJLEVBQU07QUFDakMsVUFBTUUsc0JBQXVCRixnQkFBZ0JGLGVBQTdDOztBQUVBLGFBQU9JLG1CQUFQO0FBQ0Q7OzsyQ0FFNkJGLEksRUFBTTtBQUNsQyxVQUFJRyx1QkFBdUIsS0FBM0I7O0FBRUEsVUFBTUYsbUJBQW1CRixTQUFTSyxrQkFBVCxDQUE0QkosSUFBNUIsQ0FBekI7O0FBRUEsVUFBSUMsZ0JBQUosRUFBc0I7QUFDcEIsWUFBTUksZUFBZUwsSUFBckI7QUFBQSxZQUNNTSxzQkFBc0JELGFBQWFFLFVBQWIsRUFENUI7O0FBR0FKLCtCQUF3Qkcsd0JBQXdCLGlCQUFoRCxDQUpvQixDQUlnRDtBQUNyRTs7QUFFRCxhQUFPSCxvQkFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQlYsUUFBakIiLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdGVybWluYWwnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIG5vZGVVdGlsIHtcbiAgc3RhdGljIGlzTm9kZVRlcm1pbmFsTm9kZShub2RlKSB7XG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IChub2RlIGluc3RhbmNlb2YgVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub2RlVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGlzTm9kZU5vblRlcm1pbmFsTm9kZShub2RlKSB7XG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IChub2RlIGluc3RhbmNlb2YgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub2RlTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGlzTm9kZU5vV2hpdGVzcGFjZU5vZGUobm9kZSkge1xuICAgIGxldCBub2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuICBcbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZVV0aWwuaXNOb2RlVGVybWluYWxOb2RlKG5vZGUpO1xuICBcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuICBcbiAgICAgIG5vZGVOb1doaXRlc3BhY2VOb2RlID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09IFwiPE5PX1dISVRFU1BBQ0U+XCIpOyAvLy9cbiAgICB9XG4gIFxuICAgIHJldHVybiBub2RlTm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIl19