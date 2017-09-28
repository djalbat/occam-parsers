'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var forwardsSome = arrayUtilities.forwardsSome,
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
    key: 'getFirstLine',
    value: function getFirstLine() {
      var firstLine = null;

      forwardsSome(this.childNodes, function (childNode) {
        firstLine = childNode.getFirstLine();

        if (firstLine !== null) {
          return true;
        }
      });

      return firstLine;
    }
  }, {
    key: 'getLastLine',
    value: function getLastLine() {
      var lastLine = null;

      backwardsSome(this.childNodes, function (childNode) {
        lastLine = childNode.getLastLine();

        if (lastLine !== null) {
          return true;
        }
      });

      return lastLine;
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
      var firstLine = this.getFirstLine(),
          nullified = firstLine === null; ///

      return nullified;
    }
  }, {
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      this.childNodes = childNodes;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(lines) {
      var nonTerminalNode = this,
          ///
      nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndLines(nonTerminalNode, lines),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwiTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwidGVybWluYWxOb2RlIiwiZmlyc3RMaW5lIiwiY2hpbGROb2RlIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdExpbmUiLCJnZXRMYXN0TGluZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJudWxsaWZpZWQiLCJsaW5lcyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyIsInBhcnNlVHJlZSIsIkNsYXNzIiwibm9kZXMiLCJ1bmRlZmluZWQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLDJCQUEyQkQsUUFBUSw4QkFBUixDQURqQzs7SUFHUUUsWSxHQUFnQ0gsYyxDQUFoQ0csWTtJQUFjQyxhLEdBQWtCSixjLENBQWxCSSxhOztJQUVoQkMsZTtBQUNKLDJCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsVUFBTUMsZUFBZSxLQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0YsUUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUUsWUFBWSxJQUFoQjs7QUFFQU4sbUJBQWEsS0FBS0ksVUFBbEIsRUFBOEIsVUFBU0csU0FBVCxFQUFvQjtBQUNoREQsb0JBQVlDLFVBQVVDLFlBQVYsRUFBWjs7QUFFQSxZQUFJRixjQUFjLElBQWxCLEVBQXdCO0FBQ3RCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT0EsU0FBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFJRyxXQUFXLElBQWY7O0FBRUFSLG9CQUFjLEtBQUtHLFVBQW5CLEVBQStCLFVBQVNHLFNBQVQsRUFBb0I7QUFDakRFLG1CQUFXRixVQUFVRyxXQUFWLEVBQVg7O0FBRUEsWUFBSUQsYUFBYSxJQUFqQixFQUF1QjtBQUNyQixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5EOztBQVFBLGFBQU9BLFFBQVA7QUFDRDs7OytDQUUwQjtBQUN6QixVQUFJRSx3QkFBd0IsSUFBNUI7O0FBRUFYLG1CQUFhLEtBQUtJLFVBQWxCLEVBQThCLFVBQVNHLFNBQVQsRUFBb0I7QUFDaERJLGdDQUF3QkosVUFBVUssd0JBQVYsRUFBeEI7O0FBRUEsWUFBSUQsMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT0EscUJBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFJRSx1QkFBdUIsSUFBM0I7O0FBRUFaLG9CQUFjLEtBQUtHLFVBQW5CLEVBQStCLFVBQVNHLFNBQVQsRUFBb0I7QUFDakRNLCtCQUF1Qk4sVUFBVU8sdUJBQVYsRUFBdkI7O0FBRUEsWUFBSUQseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT0Esb0JBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTVAsWUFBWSxLQUFLRSxZQUFMLEVBQWxCO0FBQUEsVUFDTU8sWUFBYVQsY0FBYyxJQURqQyxDQURZLENBRTZCOztBQUV6QyxhQUFPUyxTQUFQO0FBQ0Q7OztrQ0FFYVgsVSxFQUFZO0FBQ3hCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7OztnQ0FFV1ksSyxFQUFPO0FBQ2pCLFVBQU1DLGtCQUFrQixJQUF4QjtBQUFBLFVBQStCO0FBQ3pCQyxpQ0FBMkJuQix5QkFBeUJvQiwyQkFBekIsQ0FBcURGLGVBQXJELEVBQXNFRCxLQUF0RSxDQURqQztBQUFBLFVBRU1JLFlBQVlGLHdCQUZsQixDQURpQixDQUc0Qjs7QUFFN0MsYUFBT0UsU0FBUDtBQUNEOzs7eUNBRTJCQyxLLEVBQU9DLEssRUFBT25CLFEsRUFBVTtBQUNsRCxVQUFJQSxhQUFhb0IsU0FBakIsRUFBNEI7QUFDMUJwQixtQkFBV21CLEtBQVg7QUFDQUEsZ0JBQVFELEtBQVI7QUFDQUEsZ0JBQVFuQixlQUFSO0FBQ0Q7O0FBRUQsVUFBTUUsYUFBYWtCLEtBQW5CO0FBQUEsVUFBMEI7QUFDcEJMLHdCQUFrQkksTUFBTUcseUJBQU4sQ0FBZ0NILEtBQWhDLEVBQXVDbEIsUUFBdkMsRUFBaURDLFVBQWpELENBRHhCOztBQUdBLGFBQU9hLGVBQVA7QUFDRDs7OzhDQUVnQ0ksSyxFQUFPbEIsUSxFQUFVQyxVLEVBQVk7QUFDNUQsVUFBSUEsZUFBZW1CLFNBQW5CLEVBQThCO0FBQzVCbkIscUJBQWFELFFBQWI7QUFDQUEsbUJBQVdrQixLQUFYO0FBQ0FBLGdCQUFRbkIsZUFBUjtBQUNEOztBQUVELFVBQU1lLGtCQUFrQixJQUFJSSxLQUFKLENBQVVsQixRQUFWLEVBQW9CQyxVQUFwQixDQUF4Qjs7QUFFQSxhQUFPYSxlQUFQO0FBQ0Q7Ozs7OztBQUdIUSxPQUFPQyxPQUFQLEdBQWlCeEIsZUFBakIiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlJyk7XG5cbmNvbnN0IHsgZm9yd2FyZHNTb21lLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgbGV0IGZpcnN0TGluZSA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGZpcnN0TGluZSA9IGNoaWxkTm9kZS5nZXRGaXJzdExpbmUoKTtcblxuICAgICAgaWYgKGZpcnN0TGluZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdExpbmU7XG4gIH1cblxuICBnZXRMYXN0TGluZSgpIHtcbiAgICBsZXQgbGFzdExpbmUgPSBudWxsO1xuXG4gICAgYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgbGFzdExpbmUgPSBjaGlsZE5vZGUuZ2V0TGFzdExpbmUoKTtcblxuICAgICAgaWYgKGxhc3RMaW5lICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RMaW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChsYXN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgaXNOdWxsaWZpZWQoKSB7XG4gICAgY29uc3QgZmlyc3RMaW5lID0gdGhpcy5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBudWxsaWZpZWQgPSAoZmlyc3RMaW5lID09PSBudWxsKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBudWxsaWZpZWQ7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUobGluZXMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyhub25UZXJtaW5hbE5vZGUsIGxpbmVzKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUoQ2xhc3MsIG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGlmIChydWxlTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlTmFtZSA9IG5vZGVzO1xuICAgICAgbm9kZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IENsYXNzLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7XG4gICAgICBydWxlTmFtZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuIl19