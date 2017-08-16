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
    key: 'parseTreeFromLines',
    value: function parseTreeFromLines(lines) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiYXJyYXkiLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwiTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwidGVybWluYWxOb2RlIiwiZmlyc3RMaW5lIiwiY2hpbGROb2RlIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdExpbmUiLCJnZXRMYXN0TGluZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJudWxsaWZpZWQiLCJsaW5lcyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyIsInBhcnNlVHJlZSIsIkNsYXNzIiwibm9kZXMiLCJ1bmRlZmluZWQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQywyQkFBMkJELFFBQVEsOEJBQVIsQ0FBakM7O0FBRU0sSUFBRUUsS0FBRixHQUFZSCxTQUFaLENBQUVHLEtBQUY7QUFBQSxJQUNFQyxZQURGLEdBQ2tDRCxLQURsQyxDQUNFQyxZQURGO0FBQUEsSUFDZ0JDLGFBRGhCLEdBQ2tDRixLQURsQyxDQUNnQkUsYUFEaEI7O0lBR0FDLGU7QUFDSiwyQkFBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7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Y29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5O1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG4gIFxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIGxldCBmaXJzdExpbmUgPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBmaXJzdExpbmUgPSBjaGlsZE5vZGUuZ2V0Rmlyc3RMaW5lKCk7XG5cbiAgICAgIGlmIChmaXJzdExpbmUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RMaW5lO1xuICB9XG5cbiAgZ2V0TGFzdExpbmUoKSB7XG4gICAgbGV0IGxhc3RMaW5lID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGxhc3RMaW5lID0gY2hpbGROb2RlLmdldExhc3RMaW5lKCk7XG5cbiAgICAgIGlmIChsYXN0TGluZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0TGluZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGZvcndhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGlzTnVsbGlmaWVkKCkge1xuICAgIGNvbnN0IGZpcnN0TGluZSA9IHRoaXMuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICAgICAgbnVsbGlmaWVkID0gKGZpcnN0TGluZSA9PT0gbnVsbCk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbnVsbGlmaWVkO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIHBhcnNlVHJlZUZyb21MaW5lcyhsaW5lcykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZExpbmVzKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShDbGFzcywgbm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgaWYgKHJ1bGVOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVOYW1lID0gbm9kZXM7XG4gICAgICBub2RlcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gQ2xhc3MuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTtcbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG4iXX0=