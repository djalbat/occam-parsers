'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var first = arrayUtilities.first,
    forwardsSome = arrayUtilities.forwardsSome,
    backwardsSome = arrayUtilities.backwardsSome;

var NonTerminalNode = function () {
  function NonTerminalNode(ruleName, parentNode, childNodes) {
    _classCallCheck(this, NonTerminalNode);

    this.ruleName = ruleName;
    this.parentNode = parentNode;
    this.childNodes = childNodes;
  }

  _createClass(NonTerminalNode, [{
    key: 'isTerminalNode',
    value: function isTerminalNode() {
      var terminalNode = false;

      return terminalNode;
    }
  }, {
    key: 'isNonTerminalNode',
    value: function isNonTerminalNode() {
      var nonTerminalNode = true;

      return nonTerminalNode;
    }
  }, {
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'getParentNode',
    value: function getParentNode() {
      return this.parentNode;
    }
  }, {
    key: 'getChildNodes',
    value: function getChildNodes() {
      return this.childNodes;
    }
  }, {
    key: 'getFirstSignificantToken',
    value: function getFirstSignificantToken() {
      var firstSignificantToken = null;

      forwardsSome(this.childNodes, function (childNode) {
        firstSignificantToken = childNode.getFirstSignificantToken();

        if (firstSignificantToken !== null) {
          return true;
        }
      });

      return firstSignificantToken;
    }
  }, {
    key: 'getLastSignificantToken',
    value: function getLastSignificantToken() {
      var lastSignificantToken = null;

      backwardsSome(this.childNodes, function (childNode) {
        lastSignificantToken = childNode.getLastSignificantToken();

        if (lastSignificantToken !== null) {
          return true;
        }
      });

      return lastSignificantToken;
    }
  }, {
    key: 'isNullified',
    value: function isNullified() {
      var nullified = false;

      var childNodesLength = this.childNodes.length;

      if (childNodesLength === 1) {
        var firstChildNode = first(this.childNodes),
            childNode = firstChildNode,
            ///
        childNodeTerminalNode = childNode.isTerminalNode();

        if (childNodeTerminalNode) {
          var terminalNode = childNode,
              ///
          terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

          nullified = terminalNodeEpsilonNode; ///
        }
      }

      return nullified;
    }
  }, {
    key: 'setRuleName',
    value: function setRuleName(ruleName) {
      this.ruleName = ruleName;
    }
  }, {
    key: 'setParentNode',
    value: function setParentNode(parentNode) {
      this.parentNode = parentNode;
    }
  }, {
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      this.childNodes = childNodes;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(tokens) {
      var nonTerminalNode = this,
          ///
      nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          parseTree = nonTerminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
      if (childNodes === undefined) {
        childNodes = ruleName;
        ruleName = Class;
        Class = NonTerminalNode; ///
      }

      var childNodesLength = childNodes.length;

      if (childNodesLength === 0) {
        throw new Error('There are no child nodes at rule \'' + ruleName + '\'');
      }

      var parentNode = undefined,
          ///
      nonTerminalNode = new Class(ruleName, parentNode, childNodes);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmaXJzdCIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwidGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiY2hpbGROb2RlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsIm51bGxpZmllZCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlRXBzaWxvbk5vZGUiLCJpc0Vwc2lsb25Ob2RlIiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsIkNsYXNzIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTUMsMkJBQTJCRCxRQUFRLDhCQUFSLENBRGpDOztJQUdRRSxLLEdBQXVDSCxjLENBQXZDRyxLO0lBQU9DLFksR0FBZ0NKLGMsQ0FBaENJLFk7SUFBY0MsYSxHQUFrQkwsYyxDQUFsQkssYTs7SUFFdkJDLGU7QUFDSiwyQkFBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0NDLFVBQWxDLEVBQThDO0FBQUE7O0FBQzVDLFNBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7O3FDQUVnQjtBQUNmLFVBQU1DLGVBQWUsS0FBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGtCQUFrQixJQUF4Qjs7QUFFQSxhQUFPQSxlQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0osUUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsVUFBSUcsd0JBQXdCLElBQTVCOztBQUVBUixtQkFBYSxLQUFLSyxVQUFsQixFQUE4QixVQUFTSSxTQUFULEVBQW9CO0FBQ2hERCxnQ0FBd0JDLFVBQVVDLHdCQUFWLEVBQXhCOztBQUVBLFlBQUlGLDBCQUEwQixJQUE5QixFQUFvQztBQUNsQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5EOztBQVFBLGFBQU9BLHFCQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUcsdUJBQXVCLElBQTNCOztBQUVBVixvQkFBYyxLQUFLSSxVQUFuQixFQUErQixVQUFTSSxTQUFULEVBQW9CO0FBQ2pERSwrQkFBdUJGLFVBQVVHLHVCQUFWLEVBQXZCOztBQUVBLFlBQUlELHlCQUF5QixJQUE3QixFQUFtQztBQUNqQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5EOztBQVFBLGFBQU9BLG9CQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUlFLFlBQVksS0FBaEI7O0FBRUEsVUFBTUMsbUJBQW1CLEtBQUtULFVBQUwsQ0FBZ0JVLE1BQXpDOztBQUVBLFVBQUlELHFCQUFxQixDQUF6QixFQUE0QjtBQUMxQixZQUFNRSxpQkFBaUJqQixNQUFNLEtBQUtNLFVBQVgsQ0FBdkI7QUFBQSxZQUNNSSxZQUFZTyxjQURsQjtBQUFBLFlBQ2tDO0FBQzVCQyxnQ0FBd0JSLFVBQVVTLGNBQVYsRUFGOUI7O0FBSUEsWUFBSUQscUJBQUosRUFBMkI7QUFDekIsY0FBTVgsZUFBZUcsU0FBckI7QUFBQSxjQUFnQztBQUMxQlUsb0NBQTBCYixhQUFhYyxhQUFiLEVBRGhDOztBQUdBUCxzQkFBWU0sdUJBQVosQ0FKeUIsQ0FJWTtBQUN0QztBQUNGOztBQUVELGFBQU9OLFNBQVA7QUFDRDs7O2dDQUVXVixRLEVBQVU7QUFDcEIsV0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7O2dDQUVXZ0IsTSxFQUFRO0FBQ2xCLFVBQU1kLGtCQUFrQixJQUF4QjtBQUFBLFVBQStCO0FBQ3pCZSxpQ0FBMkJ4Qix5QkFBeUJ5Qiw0QkFBekIsQ0FBc0RoQixlQUF0RCxFQUF1RWMsTUFBdkUsQ0FEakM7QUFBQSxVQUVNRyxZQUFZRix3QkFGbEIsQ0FEa0IsQ0FHMkI7O0FBRTdDLGFBQU9FLFNBQVA7QUFDRDs7OzhDQUVnQ0MsSyxFQUFPdEIsUSxFQUFVRSxVLEVBQVk7QUFDNUQsVUFBSUEsZUFBZXFCLFNBQW5CLEVBQThCO0FBQzVCckIscUJBQWFGLFFBQWI7QUFDQUEsbUJBQVdzQixLQUFYO0FBQ0FBLGdCQUFRdkIsZUFBUixDQUg0QixDQUdGO0FBQzNCOztBQUVELFVBQU1ZLG1CQUFtQlQsV0FBV1UsTUFBcEM7O0FBRUEsVUFBSUQscUJBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSWEsS0FBSix5Q0FBK0N4QixRQUEvQyxRQUFOO0FBQ0Q7O0FBRUQsVUFBTUMsYUFBYXNCLFNBQW5CO0FBQUEsVUFBOEI7QUFDeEJuQix3QkFBa0IsSUFBSWtCLEtBQUosQ0FBVXRCLFFBQVYsRUFBb0JDLFVBQXBCLEVBQWdDQyxVQUFoQyxDQUR4Qjs7QUFHQSxhQUFPRSxlQUFQO0FBQ0Q7Ozs7OztBQUdIcUIsT0FBT0MsT0FBUCxHQUFpQjNCLGVBQWpCIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jb25zdCB7IGZpcnN0LCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcykge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0UGFyZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChsYXN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgaXNOdWxsaWZpZWQoKSB7XG4gICAgbGV0IG51bGxpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdCh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlRXBzaWxvbk5vZGUgPSB0ZXJtaW5hbE5vZGUuaXNFcHNpbG9uTm9kZSgpO1xuXG4gICAgICAgIG51bGxpZmllZCA9IHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbGlmaWVkO1xuICB9XG5cbiAgc2V0UnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7XG4gICAgICBydWxlTmFtZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgbm8gY2hpbGQgbm9kZXMgYXQgcnVsZSAnJHtydWxlTmFtZX0nYCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuIl19