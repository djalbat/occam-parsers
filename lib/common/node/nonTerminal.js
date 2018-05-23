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

    this.parentNode = undefined; ///
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
    key: 'getParentNode',
    value: function getParentNode() {
      return this.parentNode;
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
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      this.childNodes = childNodes;
    }
  }, {
    key: 'setParentNode',
    value: function setParentNode(parentNode) {
      this.parentNode = parentNode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmaXJzdCIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwYXJlbnROb2RlIiwidW5kZWZpbmVkIiwidGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiY2hpbGROb2RlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsIm51bGxpZmllZCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlRXBzaWxvbk5vZGUiLCJpc0Vwc2lsb25Ob2RlIiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsIkNsYXNzIiwibm9kZXMiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLDJCQUEyQkQsUUFBUSw4QkFBUixDQURqQzs7SUFHUUUsSyxHQUF1Q0gsYyxDQUF2Q0csSztJQUFPQyxZLEdBQWdDSixjLENBQWhDSSxZO0lBQWNDLGEsR0FBa0JMLGMsQ0FBbEJLLGE7O0lBRXZCQyxlO0FBQ0osMkJBQVlDLFFBQVosRUFBc0JDLFVBQXRCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtE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QXhCOztBQUVBLGFBQU9JLGVBQVA7QUFDRDs7Ozs7O0FBR0hxQixPQUFPQyxPQUFQLEdBQWlCNUIsZUFBakIiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlJyk7XG5cbmNvbnN0IHsgZmlyc3QsIGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG5cbiAgICB0aGlzLnBhcmVudE5vZGUgPSB1bmRlZmluZWQ7ICAvLy9cbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBpc051bGxpZmllZCgpIHtcbiAgICBsZXQgbnVsbGlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2RlcyksXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSA9IHRlcm1pbmFsTm9kZS5pc0Vwc2lsb25Ob2RlKCk7XG5cbiAgICAgICAgbnVsbGlmaWVkID0gdGVybWluYWxOb2RlRXBzaWxvbk5vZGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsaWZpZWQ7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG4gIFxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUoQ2xhc3MsIG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGlmIChydWxlTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlTmFtZSA9IG5vZGVzO1xuICAgICAgbm9kZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IENsYXNzLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7XG4gICAgICBydWxlTmFtZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuIl19