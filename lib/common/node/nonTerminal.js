'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var first = arrayUtilities.first,
    forwardsSome = arrayUtilities.forwardsSome,
    backwardsSome = arrayUtilities.backwardsSome;

var NonTerminalNode = function () {
  function NonTerminalNode(ruleName, childNodes) {
    _classCallCheck(this, NonTerminalNode);

    this.ruleName = ruleName;
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
    key: 'getChildNodes',
    value: function getChildNodes() {
      return this.childNodes;
    }
  }, {
    key: 'getFirstToken',
    value: function getFirstToken() {
      var firstToken = null;

      forwardsSome(this.childNodes, function (childNode) {
        firstToken = childNode.getFirstToken();

        if (firstToken !== null) {
          return true;
        }
      });

      return firstToken;
    }
  }, {
    key: 'getLastToken',
    value: function getLastToken() {
      var lastToken = null;

      backwardsSome(this.childNodes, function (childNode) {
        lastToken = childNode.getLastToken();

        if (lastToken !== null) {
          return true;
        }
      });

      return lastToken;
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
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(Class, nodes, ruleName) {
      if (ruleName === undefined) {
        ruleName = nodes;
        nodes = Class;
        Class = NonTerminalNode;
      }

      var childNodes = nodes,
          ///
      nonTerminalNode = Class.fromRuleNameAndChildNodes(Class, ruleName, childNodes);

      return nonTerminalNode;
    }
  }, {
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
      if (childNodes === undefined) {
        childNodes = ruleName;
        ruleName = Class;
        Class = NonTerminalNode;
      }

      var nonTerminalNode = new Class(ruleName, childNodes);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmaXJzdCIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJmaXJzdFRva2VuIiwiY2hpbGROb2RlIiwiZ2V0Rmlyc3RUb2tlbiIsImxhc3RUb2tlbiIsImdldExhc3RUb2tlbiIsIm51bGxpZmllZCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlRXBzaWxvbk5vZGUiLCJpc0Vwc2lsb25Ob2RlIiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsIkNsYXNzIiwibm9kZXMiLCJ1bmRlZmluZWQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLDJCQUEyQkQsUUFBUSw4QkFBUixDQURqQzs7SUFHUUUsSyxHQUF1Q0gsYyxDQUF2Q0csSztJQUFPQyxZLEdBQWdDSixjLENBQWhDSSxZO0lBQWNDLGEsR0FBa0JMLGMsQ0FBbEJLLGE7O0lBRXZCQyxlO0FBQ0osMkJBQVlDLFFBQVosRUFBc0JDLFVBQXRCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OztxQ0FFZ0I7QUFDZixVQUFNQyxlQUFlLEtBQXJCOztBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxrQkFBa0IsSUFBeEI7O0FBRUEsYUFBT0EsZUFBUDtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtILFFBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQUlHLGFBQWEsSUFBakI7O0FBRUFQLG1CQUFhLEtBQUtJLFVBQWxCLEVBQThCLFVBQVNJLFNBQVQsRUFBb0I7QUFDaERELHFCQUFhQyxVQUFVQyxhQUFWLEVBQWI7O0FBRUEsWUFBSUYsZUFBZSxJQUFuQixFQUF5QjtBQUN2QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5EOztBQVFBLGFBQU9BLFVBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUcsWUFBWSxJQUFoQjs7QUFFQVQsb0JBQWMsS0FBS0csVUFBbkIsRUFBK0IsVUFBU0ksU0FBVCxFQUFvQjtBQUNqREUsb0JBQVlGLFVBQVVHLFlBQVYsRUFBWjs7QUFFQSxZQUFJRCxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT0EsU0FBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFJRSxZQUFZLEtBQWhCOztBQUVBLFVBQU1DLG1CQUFtQixLQUFLVCxVQUFMLENBQWdCVSxNQUF6Qzs7QUFFQSxVQUFJRCxxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUIsWUFBTUUsaUJBQWlCaEIsTUFBTSxLQUFLSyxVQUFYLENBQXZCO0FBQUEsWUFDTUksWUFBWU8sY0FEbEI7QUFBQSxZQUNrQztBQUM1QkMsZ0NBQXdCUixVQUFVUyxjQUFWLEVBRjlCOztBQUlBLFlBQUlELHFCQUFKLEVBQTJCO0FBQ3pCLGNBQU1YLGVBQWVHLFNBQXJCO0FBQUEsY0FBZ0M7QUFDMUJVLG9DQUEwQmIsYUFBYWMsYUFBYixFQURoQzs7QUFHQVAsc0JBQVlNLHVCQUFaLENBSnlCLENBSVk7QUFDdEM7QUFDRjs7QUFFRCxhQUFPTixTQUFQO0FBQ0Q7OztrQ0FFYVIsVSxFQUFZO0FBQ3hCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7OztnQ0FFV2dCLE0sRUFBUTtBQUNsQixVQUFNZCxrQkFBa0IsSUFBeEI7QUFBQSxVQUErQjtBQUN6QmUsaUNBQTJCdkIseUJBQXlCd0IsNEJBQXpCLENBQXNEaEIsZUFBdEQsRUFBdUVjLE1BQXZFLENBRGpDO0FBQUEsVUFFTUcsWUFBWUYsd0JBRmxCLENBRGtCLENBRzJCOztBQUU3QyxhQUFPRSxTQUFQO0FBQ0Q7Ozt5Q0FFMkJDLEssRUFBT0MsSyxFQUFPdEIsUSxFQUFVO0FBQ2xELFVBQUlBLGFBQWF1QixTQUFqQixFQUE0QjtBQUMxQnZCLG1CQUFXc0IsS0FBWDtBQUNBQSxnQkFBUUQsS0FBUjtBQUNBQSxnQkFBUXRCLGVBQVI7QUFDRDs7QUFFRCxVQUFNRSxhQUFhcUIsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQm5CLHdCQUFrQmtCLE1BQU1HLHlCQUFOLENBQWdDSCxLQUFoQyxFQUF1Q3JCLFFBQXZDLEVBQWlEQyxVQUFqRCxDQUR4Qjs7QUFHQSxhQUFPRSxlQUFQO0FBQ0Q7Ozs4Q0FFZ0NrQixLLEVBQU9yQixRLEVBQVVDLFUsRUFBWTtBQUM1RCxVQUFJQSxlQUFlc0IsU0FBbkIsRUFBOEI7QUFDNUJ0QixxQkFBYUQsUUFBYjtBQUNBQSxtQkFBV3FCLEtBQVg7QUFDQUEsZ0JBQVF0QixlQUFSO0FBQ0Q7O0FBRUQsVUFBTUksa0JBQWtCLElBQUlrQixLQUFKLENBQVVyQixRQUFWLEVBQW9CQyxVQUFwQixDQUF4Qjs7QUFFQSxhQUFPRSxlQUFQO0FBQ0Q7Ozs7OztBQUdIc0IsT0FBT0MsT0FBUCxHQUFpQjNCLGVBQWpCIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jb25zdCB7IGZpcnN0LCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldEZpcnN0VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBmaXJzdFRva2VuID0gY2hpbGROb2RlLmdldEZpcnN0VG9rZW4oKTtcblxuICAgICAgaWYgKGZpcnN0VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RUb2tlbigpIHtcbiAgICBsZXQgbGFzdFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGxhc3RUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0VG9rZW47XG4gIH1cbiAgXG4gIGlzTnVsbGlmaWVkKCkge1xuICAgIGxldCBudWxsaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QodGhpcy5jaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlID0gdGVybWluYWxOb2RlLmlzRXBzaWxvbk5vZGUoKTtcblxuICAgICAgICBudWxsaWZpZWQgPSB0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxpZmllZDtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKENsYXNzLCBub2RlcywgcnVsZU5hbWUpIHtcbiAgICBpZiAocnVsZU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZU5hbWUgPSBub2RlcztcbiAgICAgIG5vZGVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBDbGFzcy5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lO1xuICAgICAgcnVsZU5hbWUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcbiJdfQ==