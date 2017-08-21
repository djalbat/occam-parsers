'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var array = necessary.array,
    forwardsSome = array.forwardsSome,
    backwardsSome = array.backwardsSome;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiYXJyYXkiLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwiTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwidGVybWluYWxOb2RlIiwiZmlyc3RMaW5lIiwiY2hpbGROb2RlIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdExpbmUiLCJnZXRMYXN0TGluZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJudWxsaWZpZWQiLCJsaW5lcyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyIsInBhcnNlVHJlZSIsIkNsYXNzIiwibm9kZXMiLCJ1bmRlZmluZWQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQywyQkFBMkJELFFBQVEsOEJBQVIsQ0FBakM7O0FBRU0sSUFBRUUsS0FBRixHQUFZSCxTQUFaLENBQUVHLEtBQUY7QUFBQSxJQUNFQyxZQURGLEdBQ2tDRCxLQURsQyxDQUNFQyxZQURGO0FBQUEsSUFDZ0JDLGFBRGhCLEdBQ2tDRixLQURsQyxDQUNnQkUsYUFEaEI7O0lBR0FDLGU7QUFDSiwyQkFBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7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b25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXk7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG4gIFxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgbGV0IGZpcnN0TGluZSA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGZpcnN0TGluZSA9IGNoaWxkTm9kZS5nZXRGaXJzdExpbmUoKTtcblxuICAgICAgaWYgKGZpcnN0TGluZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdExpbmU7XG4gIH1cblxuICBnZXRMYXN0TGluZSgpIHtcbiAgICBsZXQgbGFzdExpbmUgPSBudWxsO1xuXG4gICAgYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgbGFzdExpbmUgPSBjaGlsZE5vZGUuZ2V0TGFzdExpbmUoKTtcblxuICAgICAgaWYgKGxhc3RMaW5lICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RMaW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChsYXN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgaXNOdWxsaWZpZWQoKSB7XG4gICAgY29uc3QgZmlyc3RMaW5lID0gdGhpcy5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBudWxsaWZpZWQgPSAoZmlyc3RMaW5lID09PSBudWxsKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBudWxsaWZpZWQ7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUobGluZXMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyhub25UZXJtaW5hbE5vZGUsIGxpbmVzKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUoQ2xhc3MsIG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGlmIChydWxlTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlTmFtZSA9IG5vZGVzO1xuICAgICAgbm9kZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IENsYXNzLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7XG4gICAgICBydWxlTmFtZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuIl19